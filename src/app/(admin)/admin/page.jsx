'use client'

import Image from 'next/image'

export default function AdminHome() {
	return (
		<div className="h-full w-full p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
				<div className="space-y-6">
					<h1 className="text-3xl font-bold text-gray-800">
						به پنل مدیریت خوش آمدید 🎉
					</h1>
					<p className="text-gray-600 leading-7">
						از اینجا می‌تونید محصولات، سفارشات، کاربران، کوپن‌ها و
						دسته‌بندی‌ها رو مدیریت کنید.
					</p>
					<p className="text-gray-500 text-sm">
						برای شروع یکی از گزینه‌ها رو از نوار کناری انتخاب کنید.
					</p>
				</div>
				<div className="flex justify-center">
					<Image
						src="/Dashboard.png"
						width={400}
						height={400}
						alt="admin dashboard"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
	)
}
