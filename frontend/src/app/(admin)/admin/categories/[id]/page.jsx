'use client'

import { useParams } from 'next/navigation'
import { useGetCategoryById } from '@/hooks/useCategories'
import Loader from '@/ui/Loader'
import Link from 'next/link'
import {
	HiOutlineTag,
	HiOutlineDocumentText,
	HiOutlineArchive,
	HiOutlineCollection,
} from 'react-icons/hi'

function CategoryDetailsPage() {
	const { id } = useParams()
	const { data, isLoading } = useGetCategoryById(id)

	if (isLoading) return <Loader />
	if (!data?.category)
		return (
			<p className="text-center text-red-500 mt-10">
				دسته‌بندی پیدا نشد.
			</p>
		)

	const category = data.category

	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
			<div className="mb-10 bg-gradient-to-tr from-purple-100 to-white rounded-xl p-6 shadow-sm flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-extrabold text-purple-800 mb-2">
						جزئیات دسته‌بندی
					</h1>
					<p className="text-gray-600">
						اطلاعات دسته‌بندی انتخاب‌شده را مشاهده می‌کنید.
					</p>
				</div>
				<Link
					href="/admin/categories"
					className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
				>
					بازگشت
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<InfoCard
					icon={<HiOutlineTag />}
					label="عنوان فارسی"
					value={category.title}
					color="rose"
				/>
				<InfoCard
					icon={<HiOutlineArchive />}
					label="عنوان انگلیسی"
					value={category.englishTitle}
					color="indigo"
				/>
				<InfoCard
					icon={<HiOutlineCollection />}
					label="نوع دسته‌بندی"
					value={category.type}
					color="emerald"
				/>
				<InfoCard
					icon={<HiOutlineDocumentText />}
					label="توضیحات"
					value={category.description || '—'}
					color="gray"
					full
				/>
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
		purple: 'text-purple-500 border-l-purple-500',
		indigo: 'text-indigo-500 border-l-indigo-500',
		emerald: 'text-emerald-500 border-l-emerald-500',
		gray: 'text-gray-500 border-l-gray-400',
		rose: 'text-rose-500 border-l-rose-500',
	}

	return (
		<div
			className={`bg-white shadow-sm border rounded-xl p-5 flex gap-4 items-start ${
				full ? 'col-span-full' : ''
			} border-l-4 ${colorMap[color]}`}
		>
			<div className={`text-xl mt-1 ${colorMap[color]}`}>{icon}</div>
			<div>
				<p className="text-sm text-gray-500">{label}</p>
				<p className="text-lg font-bold text-gray-800 mt-1">
					{value}
				</p>
			</div>
		</div>
	)
}

export default CategoryDetailsPage
