'use client'

import { useGetUser } from '@/hooks/useAuth'
import { toLocalDateString } from '@/utils/toLocalDate'
import PaymentTable from './payments/PaymentTable'
import Link from 'next/link'
import Loader from '@/ui/Loader'
import { HiPlusCircle } from 'react-icons/hi'

function Profile() {
	const { data, isLoading } = useGetUser()
	const { user, payments } = data || {}
	if (isLoading) return <Loader />
	return (
		<div className="py-4">
			<h1 className="mb-4 text-xl">
				سلام ! <span className="font-bold">{user.name}</span> خوش
				آمدی!
			</h1>
			<p>
				<span>تاریخ پیوستن:</span>
				<span> {toLocalDateString(user.createdAt)} </span>
			</p>
			<div className="border border-gray-300 rounded-xl  mt-8">
				<div className="p-4 flex items-center justify-between">
					<h2 className="font-bold text-xl">آخرین سفارشات کاربر</h2>
					<Link className="link-btn" href="/profile/payments">
						<HiPlusCircle className="w-6 h-6" />
						<span>مشاهده همه سفارشات</span>
					</Link>
				</div>
				<PaymentTable
					payments={payments
						.sort(
							(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
						)
						.slice(0, 3)}
				/>
			</div>
		</div>
	)
}
export default Profile
