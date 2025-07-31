'use client'

import { logout } from '@/services/authServices'
import Link from 'next/link'

function AdminSideBar() {
	const logoutHandler = async () => {
		await logout()
		document.location.href = '/'
	}

	return (
		<div>
			<ul className="flex flex-col space-y-8">
				<li>
					<Link href="/" className="link-li">
						صفحه اصلی
					</Link>
				</li>
				<li>
					<Link href="/admin" className="link-li">
						داشبورد
					</Link>
				</li>
				<li>
					<Link href="/admin/users" className="link-li">
						کاربران
					</Link>
				</li>
				<li>
					<Link href="/admin/products" className="link-li">
						محصولات
					</Link>
				</li>
				<li>
					<Link href="/admin/categories" className="link-li">
						دسته بندی
					</Link>
				</li>
				<li>
					<Link href="/admin/payments" className="link-li">
						سفارشات{' '}
					</Link>
				</li>
				<li>
					<Link href="/admin/coupons" className="link-li">
						کد تخفیف
					</Link>
				</li>
				<li>
					<button
						onClick={logoutHandler}
						className="link-li cursor-pointer"
					>
						خروج از حساب کاربری
					</button>
				</li>
			</ul>
		</div>
	)
}
export default AdminSideBar
