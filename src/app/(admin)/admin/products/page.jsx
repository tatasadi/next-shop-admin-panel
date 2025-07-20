'use client'

import { useGetProducts } from '@/hooks/useProducts'
import ProductListTable from './ProductListTable'
import Link from 'next/link'
import { HiPlusCircle } from 'react-icons/hi'
import Loader from '@/ui/Loader'

function page() {
	const { data, isLoading } = useGetProducts()
	const { products } = data || {}

	if (isLoading) return <Loader />

	return (
		<div className="p-4 md:p-6 bg-white  rounded-xl shadow-sm">
			<div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
				<h1 className="text-2xl font-extrabold text-gray-800 dark:text-white">
					محصولات
				</h1>

				<Link
					href="/admin/products/add"
					className="inline-flex items-center gap-x-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-4 py-2 text-sm font-medium shadow-md"
				>
					<HiPlusCircle className="w-5 h-5" />
					<span>اضافه کردن محصول</span>
				</Link>
			</div>

			<ProductListTable products={products} />
		</div>
	)
}
export default page
