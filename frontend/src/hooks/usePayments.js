import {
	getAllPayments,
	getPaymentById,
} from '@/services/paymentService'
import { useQuery } from '@tanstack/react-query'

export const useGetPayments = () =>
	useQuery({
		queryKey: ['payments'],
		queryFn: getAllPayments,
		retry: false,
	})

export const useGetPaymentById = id =>
	useQuery({
		queryKey: ['get-payment', id],
		queryFn: () => getPaymentById(id),
		retry: false,
		enabled: !!id,
	})
