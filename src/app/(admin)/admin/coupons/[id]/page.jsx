'use client'

import { useParams } from 'next/navigation'
import { useGetOneCoupon } from '@/hooks/useCoupons'
import Loader from '@/ui/Loader'
import Link from 'next/link'
import {
	HiOutlineTag,
	HiOutlineCash,
	HiOutlineClock,
	HiOutlineCube,
	HiOutlineHashtag,
	HiOutlineChartSquareBar,
} from 'react-icons/hi'
import { toLocalDateStringShort } from '@/utils/toLocalDate'

function CouponDetailsPage() {
	const { id } = useParams()
	const { data, isLoading } = useGetOneCoupon(id)

	if (isLoading) return <Loader />
	if (!data?.coupon)
		return (
			<p className="text-center text-red-500 mt-10">کوپن پیدا نشد.</p>
		)

	const coupon = data.coupon

	return (
		<div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
			{/* Header */}
			<div className="mb-10 bg-gradient-to-tr from-green-100 to-white rounded-xl p-6 shadow-sm flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-extrabold text-green-800 mb-2">
						جزئیات کوپن تخفیف
					</h1>
					<p className="text-gray-600">
						اطلاعات کوپن انتخاب‌شده را مشاهده می‌کنید.
					</p>
				</div>
				<Link
					href="/admin/coupons"
					className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
				>
					بازگشت
				</Link>
			</div>

			{/* Detail Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<InfoCard
					icon={<HiOutlineTag />}
					label="کد کوپن"
					value={coupon.code}
					color="green"
				/>
				<InfoCard
					icon={<HiOutlineCash />}
					label="نوع تخفیف"
					value={coupon.type}
					color="blue"
				/>
				<InfoCard
					icon={<HiOutlineHashtag />}
					label="مقدار تخفیف"
					value={coupon.amount}
					color="indigo"
				/>
				<InfoCard
					icon={<HiOutlineClock />}
					label="تاریخ انقضا"
					value={toLocalDateStringShort(coupon.expireDate)}
					color="rose"
				/>
				<InfoCard
					icon={<HiOutlineChartSquareBar />}
					label="میزان مصرف"
					value={`${coupon.usageCount} / ${coupon.usageLimit}`}
					color="amber"
				/>
				<div className="bg-white border-l-4 border-l-purple-500 shadow-sm p-5 rounded-xl col-span-full">
					<div className="flex items-center gap-3 mb-2 text-purple-600 font-bold">
						<HiOutlineCube className="text-xl" />
						<span>محصولات مرتبط</span>
					</div>
					<div className="flex flex-wrap gap-2 mt-2">
						{coupon.productIds?.length ? (
							coupon.productIds.map(product => (
								<span
									key={product._id}
									className="badge badge--secondary"
								>
									{product.title}
								</span>
							))
						) : (
							<span className="text-sm text-gray-500">
								محصولی انتخاب نشده است.
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

function InfoCard({ icon, label, value, color = 'gray' }) {
	const colorMap = {
		green: 'text-green-500 border-l-green-500',
		blue: 'text-blue-500 border-l-blue-500',
		indigo: 'text-indigo-500 border-l-indigo-500',
		rose: 'text-rose-500 border-l-rose-500',
		amber: 'text-amber-500 border-l-amber-500',
		gray: 'text-gray-500 border-l-gray-400',
	}

	return (
		<div
			className={`bg-white shadow-sm border rounded-xl p-5 flex gap-4 items-start border-l-4 ${colorMap[color]}`}
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

export default CouponDetailsPage
