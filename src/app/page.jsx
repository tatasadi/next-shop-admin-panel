'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WelcomeSection() {
	return (
		<section className="relative overflow-hidden bg-white py-20 px-4 md:px-10 lg:px-20">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9 }}
					className="w-full"
				>
					<Image
						src="/Capture11.PNG"
						width={600}
						height={400}
						alt="welcome"
						className="rounded-3xl shadow-lg"
						priority
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col gap-y-12 items-center md:items-start"
				>
					<h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500 leading-tight mb-6">
						به فروشگاه ما خوش آمدید!
					</h1>
					<p className="text-lg text-gray-500 mb-8">
						با ورود به حساب کاربری خود، به محصولات متنوع، تخفیف‌های
						ویژه و تجربه‌ای بی‌نظیر در خرید آنلاین دسترسی پیدا کنید.
					</p>
					<div className="flex gap-x-8">
						<Link
							href="/products"
							className="bg-[#35aaa2] hover:bg-[#35aaa2]/60 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200"
						>
							مشاهده محصولات
						</Link>
						<Link
							href="/auth"
							className="bg-[#f97937] hover:bg-[#f97937]/60 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200"
						>
							ورود به حساب کاربری
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
