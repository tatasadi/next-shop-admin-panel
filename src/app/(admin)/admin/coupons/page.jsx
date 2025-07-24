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
		<div>
			<div className="mb-5 flex items-center justify-between">
				<h1 className="text-xl font-bold mb-5">کد های تخفیف</h1>
				<Link
					href="/admin/coupons/add"
					className="font-bold text-blue-500 flex items-center gap-x-2"
				>
					<HiPlusCircle className="w-6 h-6" />{' '}
					<span>اضافه کردن کد تحفیف</span>
				</Link>
			</div>
			<CouponListTable coupons={coupons} />
		</div>
	)
}
export default page
