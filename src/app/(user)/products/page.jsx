import { getCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'
import CategorySidebar from './CategorySidebar'
import queryString from 'query-string'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import Link from 'next/link'
import AddToCart from './[slug]/AddToCart'
import { cookies } from 'next/headers'
import { toStringCookies } from '@/utils/toStringCookies'

export const dynamic = 'force-dynamic'

async function Products({ searchParams }) {
	const cookieStore = cookies()
	const strCookies = toStringCookies(cookieStore)

	const productsPromise = getProducts(
		queryString.stringify(searchParams, { arrayFormat: 'comma' }),
		strCookies,
	)

	const categoryPromise = getCategories()

	const [{ products }, { categories }] = await Promise.all([
		productsPromise,
		categoryPromise,
	])

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-2">
				🛍️ فروشگاه محصولات
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<CategorySidebar categories={categories} />
				<div className="lg:col-span-3">
					{products.length === 0 ? (
						<p className="text-gray-500">محصولی یافت نشد.</p>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{products.map(product => (
								<div
									key={product._id}
									className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col"
								>
									{/* تصویر محصول */}
									<div className="h-48 bg-gray-100 flex items-center justify-center">
										{/* اگر تصویر داری، جایگزین کن */}
										<img
											src={product.image || '/image1.jfif'}
											alt={product.title}
											className="h-full object-contain p-4"
										/>
									</div>

									{/* محتوای کارت */}
									<div className="p-4 flex-1 flex flex-col justify-between">
										<div>
											<h2 className="text-lg font-bold text-gray-800 line-clamp-1">
												{product.title}
											</h2>

											<p className="text-sm text-gray-500 mt-1">
												تاریخ ساخت:
												<span className="text-gray-700 ml-1 font-medium">
													{toLocalDateStringShort(product.createdAt)}
												</span>
											</p>

											{/* قیمت محصول (در صورتی که وجود داشته باشد) */}
											{product.price && (
												<p className="mt-2 text-emerald-600 font-bold text-md">
													{product.price.toLocaleString()} تومان
												</p>
											)}
										</div>

										<div className="mt-4 flex flex-col gap-y-4">
											<Link
												href={`/products/${product.slug}`}
												className="inline-block text-center btn-primary"
											>
												مشاهده محصول
											</Link>

											<AddToCart product={product} />
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Products
