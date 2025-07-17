import http from './httpService'

export function getProducts() {
	return http.get('/product/list').then(({ data }) => data.data)
}

export function getOneProductBySlug(slug) {
	return http
		.get(`/product/slug/${slug}`)
		.then(({ data }) => data.data)
}
