import { getCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'
import Link from 'next/link'

async function Products() {
	const { products } = await getProducts()
	const { categories } = await getCategories()
	return (
		<div>
			<h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
			<div className="grid grid-cols-4">
				<div className="col-span-1">
					<p className="font-bold mb-4">دسته بندی ها</p>
					<ul className="space-y-4">
						{categories.map(category => {
							return <li key={category._id}>{category.title}</li>
						})}
					</ul>
				</div>
				<div className="col-span-3 grid grid-cols-3 gap-4">
					{products.map(product => {
						return (
							<div
								className="col-span-1 border rounded-xl shadow-lg p-4"
								key={product._id}
							>
								<h2 className="font-bold text-xl mb-4">
									{product.title}
								</h2>
								<div className="mb-4">
									<span>تاریخ ساختن: </span>
									{/* <span className="font-bold"> */}
									{/* {toLocalDateStringShort(product.createdAt)} */}
									{/* </span> */}
								</div>
								<Link
									className="text-primary-900 font-bold mb-4 block"
									href={`/products/${product.slug}`}
								>
									مشاهده محصول
								</Link>
								{/* <LikeProduct product={product} /> */}
								{/* <AddToCart product={product} /> */}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Products
