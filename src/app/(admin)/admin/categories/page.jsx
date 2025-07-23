'use client'
import { useGetCategories } from '@/hooks/useCategories'
import Link from 'next/link'
import CategoryListTable from './CategoryListTable'
import { HiPlusCircle } from 'react-icons/hi'
import Loader from '@/ui/Loader'

function page() {
	const { data, isLoading } = useGetCategories()
	const { categories } = data || {}

	if (isLoading) return <Loader />

	return (
		<div>
			<div className="mb-5 flex items-center justify-between">
				<h1 className="text-xl font-bold mb-5">دسته بندی</h1>
				<Link
					href="/admin/categories/add"
					className="inline-flex items-center gap-x-2 rounded-lg bg-blue-700 text-white hover:bg-blue-400 transition-colors duration-200 px-4 py-2 text-sm font-medium shadow-md"
				>
					<HiPlusCircle className="w-6 h-6" />{' '}
					<span>اضافه کردن دسته بندی</span>
				</Link>
			</div>
			<CategoryListTable categories={categories} />
		</div>
	)
}
export default page
