const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

export function toPersianNumbersWithComma(n) {
	if (n === null || n === undefined) return '۰'
	const numWithCommas = numberWithCommas(n) // 1000,2343
	const persianNumber = toPersianNumbers(numWithCommas)
	return persianNumber
}

function numberWithCommas(x) {
	if (x === null || x === undefined) return '0'
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function toPersianNumbers(n) {
	if (n === null || n === undefined) return '۰'
	return n.toString().replace(/\d/g, x => farsiDigits[parseInt(x)])
}
