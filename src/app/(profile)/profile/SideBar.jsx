'use client'

import { logout } from '@/services/authServices'
import Link from 'next/link'

function SideBar() {
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
					<Link href="/profile" className="link-li">
						داشبورد
					</Link>
				</li>
				<li>
					<Link href="/profile/me" className="link-li">
						اطلاعات کاربری
					</Link>
				</li>
				<li>
					<Link href="/profile/payments" className="link-li">
						سفارشات{' '}
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
export default SideBar
