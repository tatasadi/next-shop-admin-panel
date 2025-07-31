'use client'

import { useGetUser } from '@/hooks/useAuth'
import { toLocalDateString } from '@/utils/toLocalDate'
import PaymentTable from './payments/PaymentTable'
import Link from 'next/link'
import Loader from '@/ui/Loader'
import { HiPlusCircle } from 'react-icons/hi'
import Image from 'next/image'

function Profile() {
	const { data, isLoading } = useGetUser()
	const { user, payments } = data || {}

	if (isLoading) return <Loader />

	return (
		<div className="overflow-y-scroll scrollbar-hide h-[800px]">
			<div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200  max-w-3xl mx-auto">
				<div className="p-6 text-center">
					<h2 className="text-2xl font-extrabold mb-2 text-gray-800">
						داشبورد کاربری {user.name}
					</h2>
					<p className="text-gray-600 mb-6">
						اطلاعات، سفارشات و فعالیت‌های خود را در اینجا مشاهده کنید.
					</p>
					<div className="flex justify-center">
						<Image
							src="/Uomo.png"
							alt="User Panel Illustration"
							width={500}
							height={400}
							className="rounded-xl shadow-md border border-gray-300"
						/>
					</div>
				</div>
			</div>
			<div className="border border-gray-200 rounded-xl mt-8 shadow-sm bg-white">
				<div className="p-4 flex items-center justify-between">
					<h2 className="font-bold text-lg text-gray-700">
						آخرین سفارشات کاربر
					</h2>
					<Link className="link-btn text-sm" href="/profile/payments">
						<HiPlusCircle className="w-5 h-5 ml-1" />
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
