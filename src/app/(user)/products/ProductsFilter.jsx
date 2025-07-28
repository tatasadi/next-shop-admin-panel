'use client'
import CheckBox from '@/ui/CheckBox'
import {
	usePathname,
	useSearchParams,
	useRouter,
} from 'next/navigation'
import { useCallback, useState } from 'react'

function ProductsFilter({ categories }) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [selectedCategories, setSelectedCategories] = useState(
		searchParams.get('category')?.split(',') || [],
	) // ["frontend" , "devops"]
	// console.log(searchParams.getAll("category")[0].split(","));

	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)
			return params.toString()
		},
		[searchParams],
	)

	const categoryHandler = e => {
		const value = e.target.value
		// already checked :
		if (selectedCategories.includes(value)) {
			const categories = selectedCategories.filter(c => c !== value)
			setSelectedCategories(categories)
			router.push(
				pathname + '?' + createQueryString('category', categories),
			)
		} else {
			// not in checked list:
			setSelectedCategories([...selectedCategories, value])
			router.push(
				pathname +
					'?' +
					createQueryString('category', [
						...selectedCategories,
						value,
					]),
			)
		}
	}

	return (
		<div className="mb-8 bg-white rounded-2xl shadow-md p-5 border border-gray-200">
			<p className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">
				📂 دسته‌بندی‌ها
			</p>
			<ul className="space-y-3">
				{categories.map(category => (
					<CheckBox
						key={category._id}
						id={category._id}
						value={category.englishTitle}
						name="product-type"
						label={category.title}
						onChange={categoryHandler}
						checked={selectedCategories.includes(
							category.englishTitle,
						)}
						className="text-sm text-gray-700 flex items-center gap-2 transition hover:text-indigo-600"
					/>
				))}
			</ul>
		</div>
	)
}
export default ProductsFilter
