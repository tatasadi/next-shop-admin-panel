'use client'

import { useGetUser } from '@/hooks/useAuth'
import { updateProfile } from '@/services/authServices'
import Loader from '@/ui/Loader'
import TextField from '@/ui/TextField'
import { includeObj } from '@/utils/objectUtils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

function MePage() {
	const { data, isLoading } = useGetUser()
	const queryClient = useQueryClient()
	const { isLoading: isUpdating, mutateAsync } = useMutation({
		mutationFn: updateProfile,
	})

	const [formData, setFormData] = useState({})
	const { user } = data || {}

	const includesKey = ['name', 'email', 'phoneNumber', 'biography']

	useEffect(() => {
		if (user) setFormData(includeObj(user, includesKey))
	}, [user])

	const submitHandler = async e => {
		e.preventDefault()
		try {
			const { message } = await mutateAsync(formData)
			queryClient.invalidateQueries({ queryKey: ['get-user'] })
			toast.success(message)
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	if (isLoading) return <Loading />

	return (
		<div className="max-w-sm">
			<h1 className="text-xl font-bold mb-4">اطلاعات کاربری</h1>
			<form onSubmit={submitHandler} className="space-y-5">
				{Object.keys(includeObj(user, includesKey)).map(key => {
					return (
						<TextField
							label={key}
							name={key}
							key={key}
							value={formData[key] || ''}
							onChange={e =>
								setFormData({
									...formData,
									[e.target.name]: e.target.value,
								})
							}
						/>
					)
				})}
				<div className="pt-2">
					{isUpdating ? (
						<Loader />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							تایید
						</button>
					)}
				</div>
			</form>
		</div>
	)
}
export default MePage
