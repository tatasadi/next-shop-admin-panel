'use client'

import { useGetUser } from '@/hooks/useAuth'
import Link from 'next/link'

function Header() {
	const { data, error, isLoading } = useGetUser()
	const { user, cart } = data || {}

	return (
		<header
			className={`sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 mb-20 ${
				isLoading ? 'blur-sm opacity-70' : 'opacity-100 blur-0'
			}`}
		>
			<nav className="container xl:max-w-screen-xl mx-auto">
				<ul className="flex items-center justify-between py-4 px-4 md:px-6 text-sm md:text-base font-medium text-gray-700 dark:text-gray-100">
					<li>
						<Link
							href="/"
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							خانه
						</Link>
					</li>
					<li>
						<Link
							href="/products"
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							محصولات
						</Link>
					</li>
					<li>
						<Link
							href="/profile"
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							پنل کاربر
						</Link>
					</li>
					<li>
						<Link
							href="/admin"
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							پنل ادمین
						</Link>
					</li>
					<li>
						<Link
							href="/cart"
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							سبد خرید ({cart ? cart.payDetail.productIds.length : 0})
						</Link>
					</li>

					{user ? (
						<span className="text-xs md:text-sm text-gray-600 dark:text-gray-300 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
							{user.name}
						</span>
					) : (
						<li>
							<Link
								href="/auth"
								className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
							>
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
