'use client'

import { userPaymentTHeads } from '@/constants/tableHeads'
import { useGetUser } from '@/hooks/useAuth'
import {
	toLocalDateString,
	toLocalDateStringShort,
} from '@/utils/toLocalDate'
import { toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import PaymentTable from './PaymentTable'
import Loader from '@/ui/Loader'

function Payments() {
	const { data, isLoading } = useGetUser()
	const { user, payments } = data || {}

	if (isLoading) return <Loader />
	return (
		<div>
			<h1>سفارشات کاربر</h1>
			<PaymentTable payments={payments} />
		</div>
	)
}
export default Payments
