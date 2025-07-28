'use client'

import Select from 'react-select'
import TextField from '@/ui/TextField'
import Loader from '@/ui/Loader'

const productsFormData = [
	{
		id: 1,
		label: 'عنوان',
		name: 'title',
	},
	{
		id: 2,
		label: 'توضیحات',
		name: 'description',
	},
	{
		id: 3,
		label: 'اسلاگ',
		name: 'slug',
	},
	{
		id: 4,
		label: 'برند',
		name: 'brand',
	},
	{
		id: 5,
		label: 'قیمت',
		name: 'price',
	},
	{
		id: 6,
		label: 'تخفیف',
		name: 'discount',
	},
	{
		id: 7,
		label: 'قیمت روی تخفیف',
		name: 'offPrice',
	},
	{
		id: 8,
		label: 'موجودی',
		name: 'countInStock',
	},
	{
		id: 9,
		label: 'لینک عکس محصول',
		name: 'imageLink',
	},
]

function ProductForm({
	onSubmit,
	productData,
	productDataOnChange,
	categories,
	setSelectedCategory,
	isLoading,
	selectedCategory = '',
}) {
	return (
		<div className="max-w-sm">
			<form className="space-y-4" onSubmit={onSubmit}>
				{productsFormData.map(item => {
					return (
						<TextField
							key={item.id}
							label={item.label}
							name={item.name}
							value={productData[item.name] ?? ''}
							onChange={productDataOnChange}
						/>
					)
				})}
				<div>
					<label htmlFor="category" className="mb-2 block">
						دسته بندی
					</label>
					<Select
						id="category"
						onChange={setSelectedCategory}
						options={categories}
						getOptionLabel={option => option.title}
						getOptionValue={option => option._id}
						defaultValue={selectedCategory}
					/>
				</div>
				<div>
					{isLoading ? (
						<Loader />
					) : (
						<button className="btn-primary">تایید</button>
					)}
				</div>
			</form>
		</div>
	)
}
export default ProductForm
