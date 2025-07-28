'use client'

import RadioInput from '@/ui/RadioInput'
import {
	usePathname,
	useRouter,
	useSearchParams,
} from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const sortOptions = [
	{
		id: 1,
		value: 'latest',
		label: 'جدید ترین',
	},
	{
		id: 2,
		value: 'earliest',
		label: 'قدیمی ترین',
	},
]

function ProductsSort() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [sort, setSort] = useState('')

	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)
			return params.toString()
		},
		[searchParams],
	)

	const sortHandler = e => {
		const value = e.target.value
		setSort(value)
		router.push(pathname + '?' + createQueryString('sort', value))
	}

	useEffect(() => {
		setSort(searchParams.get('sort') || '')
	}, [searchParams])

	return (
		<div className="mb-8 bg-white rounded-2xl shadow-md p-5 border border-gray-200">
			<p className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">
				🔽 مرتب‌سازی بر اساس
			</p>
			<div className="space-y-3">
				{sortOptions.map(item => (
					<RadioInput
						id={item.id}
						key={item.id}
						label={item.label}
						name="product-sort"
						value={item.value}
						checked={sort === item.value}
						onChange={sortHandler}
						className="text-sm text-gray-700 hover:text-indigo-600 transition cursor-pointer"
					/>
				))}
			</div>
		</div>
	)
}
export default ProductsSort
