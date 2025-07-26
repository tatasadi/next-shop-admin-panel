'use client'

import { useGetUser } from '@/hooks/useAuth'
import Link from 'next/link'

function Header() {
	const { data, error, isLoading } = useGetUser()
	const { user, cart } = data || {}

	return (
		<header
			className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 mb-20 ${
				isLoading ? 'blur-sm opacity-70' : 'opacity-100 blur-0'
			}`}
		>
			<nav className="container xl:max-w-screen-xl mx-auto">
				<ul className="flex items-center justify-between py-4 px-4 md:px-6 text-sm md:text-base font-medium text-gray-700">
					<li>
						<Link href="/" className="link-li">
							خانه
						</Link>
					</li>
					<li>
						<Link href="/products" className="link-li">
							محصولات
						</Link>
					</li>
					<li>
						<Link href="/profile" className="link-li">
							پنل کاربر
						</Link>
					</li>
					<li>
						<Link href="/admin" className="link-li">
							پنل ادمین
						</Link>
					</li>
					<li>
						<Link href="/cart" className="link-li">
							سبد خرید ({cart ? cart.payDetail.productIds.length : 0})
						</Link>
					</li>

					{user ? (
						<span className="text-xs md:text-sm text-blue-700 px-4 py-2 bg-blue-100 rounded-lg">
							{user.name}
						</span>
					) : (
						<li>
							<Link href="/auth" className="link-li">
								ورود
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}
export default Header
