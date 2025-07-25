'use client'

import { useParams } from 'next/navigation'
import { useGetProductById } from '@/hooks/useProducts'
import Loader from '@/ui/Loader'
import Image from 'next/image'
import {
	HiOutlineTag,
	HiOutlineCurrencyDollar,
	HiOutlineClipboardCheck,
	HiOutlineDocumentText,
	HiOutlineArchive,
	HiOutlinePhotograph,
} from 'react-icons/hi'
import Link from 'next/link'

function ProductDetailsPage() {
	const { id } = useParams()
	const { data, isLoading } = useGetProductById(id)

	if (isLoading) return <Loader />
	if (!data?.product)
		return (
			<p className="text-center text-red-500 mt-10">
				محصول یافت نشد.
			</p>
		)

	const product = data.product

	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
			{/* Header */}
			<div className="mb-10 bg-gradient-to-tr from-blue-100 to-white rounded-xl p-6 shadow-sm flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-extrabold text-blue-800 mb-2">
						جزئیات محصول
					</h1>
					<p className="text-gray-600">
						مشخصات کامل محصول را در این صفحه مشاهده می‌کنید.
					</p>
				</div>
				<Link href="/admin/products" className="link-btn">
					بازگشت
				</Link>
			</div>

			{/* Main Content */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Image */}
				<div className="col-span-1">
					<div className="bg-white shadow-md rounded-xl p-4 border">
						<h2 className="text-lg font-bold mb-4 text-gray-700 border-b pb-2">
							تصویر محصول
						</h2>
						<div className="flex justify-center items-center h-64">
							{product.image ? (
								<Image
									src={product.image}
									alt={product.title}
									width={300}
									height={300}
									className="rounded-xl shadow-lg object-contain transition hover:scale-105"
								/>
							) : (
								<div className="text-gray-400 text-center">
									<HiOutlinePhotograph className="w-12 h-12 mx-auto mb-2" />
									<p>بدون تصویر</p>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Product Info */}
				<div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
					<InfoCard
						icon={<HiOutlineTag />}
						label="نام محصول"
						value={product.title}
						color="blue"
					/>
					<InfoCard
						icon={<HiOutlineClipboardCheck />}
						label="دسته‌بندی"
						value={product.category?.title}
						color="indigo"
					/>
					<InfoCard
						icon={<HiOutlineCurrencyDollar />}
						label="قیمت اصلی"
						value={product.price.toLocaleString() + ' تومان'}
						color="emerald"
					/>
					<InfoCard
						icon={<HiOutlineCurrencyDollar />}
						label="درصد تخفیف"
						value={product.discount + '%'}
						color="rose"
					/>
					<InfoCard
						icon={<HiOutlineCurrencyDollar />}
						label="قیمت نهایی"
						value={product.offPrice.toLocaleString() + ' تومان'}
						color="amber"
					/>
					<InfoCard
						icon={<HiOutlineArchive />}
						label="موجودی انبار"
						value={product.countInStock}
						color="purple"
					/>
					<InfoCard
						icon={<HiOutlineDocumentText />}
						label="توضیحات"
						value={product.description || '—'}
						color="gray"
						full
					/>
				</div>
			</div>
		</div>
	)
}

function InfoCard({
	icon,
	label,
	value,
	color = 'gray',
	full = false,
}) {
	const colorMap = {
		blue: 'text-blue-500 border-l-blue-500',
		indigo: 'text-indigo-500 border-l-indigo-500',
		emerald: 'text-emerald-500 border-l-emerald-500',
		amber: 'text-amber-500 border-l-amber-500',
		rose: 'text-rose-500 border-l-rose-500',
		purple: 'text-purple-500 border-l-purple-500',
		gray: 'text-gray-500 border-l-gray-400',
	}

	return (
		<div
			className={`bg-white shadow-sm border rounded-xl p-5 flex gap-4 items-start ${
				full ? 'col-span-full' : ''
			} border-l-4 ${colorMap[color]}`}
		>
			<div className={`${colorMap[color]} text-xl`}>{icon}</div>
			<div>
				<p className="text-sm text-gray-500">{label}</p>
				<p className="text-lg font-bold text-gray-800 mt-1">
					{value}
				</p>
			</div>
		</div>
	)
}

export default ProductDetailsPage
