import {
	getAllUsers,
	getUserProfile,
	getUserById,
} from '@/services/authServices'
import { useQuery } from '@tanstack/react-query'

export const useGetUser = () =>
	useQuery({
		queryKey: ['get-user'],
		queryFn: getUserProfile,
		retry: false,
		refetchOnWindowFocus: true,
	})

export const useGetUsers = () =>
	useQuery({
		queryKey: ['get-users'],
		queryFn: getAllUsers,
		retry: false,
		refetchOnWindowFocus: true,
	})

export const useGetUserById = id =>
	useQuery({
		queryKey: ['user', id],
		queryFn: () => getUserById(id),
		enabled: !!id,
	})
