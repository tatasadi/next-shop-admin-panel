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
		<div className="p-4 md:p-6 bg-white rounded-xl shadow-sm">
			<div className="mb-5 flex items-center justify-between">
				<h1 className="text-2xl font-extrabold text-gray-800 mb-4">
					دسته بندی
				</h1>
				<Link href="/admin/categories/add" className="link-btn">
					<HiPlusCircle className="w-6 h-6" />{' '}
					<span>اضافه کردن دسته بندی</span>
				</Link>
			</div>
			<CategoryListTable categories={categories} />
		</div>
	)
}
export default page
