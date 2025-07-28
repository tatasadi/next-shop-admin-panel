'use client'

import { useGetCoupons } from '@/hooks/useCoupons'
import Link from 'next/link'
import { HiPlusCircle } from 'react-icons/hi'
import CouponListTable from './CouponListTable'
import Loader from '@/ui/Loader'

function page() {
	const { isLoading, data } = useGetCoupons()
	const { coupons } = data || {}
	if (isLoading) return <Loader />
	return (
		<div className="p-4 md:p-6 bg-white rounded-xl shadow-sm">
			<div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
				<h1 className="text-2xl font-extrabold text-gray-800 mb-4">
					کد های تخفیف
				</h1>
				<Link href="/admin/coupons/add" className="link-btn">
					<HiPlusCircle className="w-6 h-6" />{' '}
					<span>اضافه کردن کد تخفیف</span>
				</Link>
			</div>
			<CouponListTable coupons={coupons} />
		</div>
	)
}
export default page
