'use client'
import { useState } from 'react'
import SendOTPFrom from './SendOTPFrom'
import http from '@/services/httpService'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { getOtp } from '@/services/authServices'

function Authpage() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const { data, error, isLoading, mutateAsync } = useMutation({
		mutationFn: getOtp,
	})

	const phoneNumberHandler = e => {
		setPhoneNumber(e.target.value)
	}
	const sendOtpHandler = async e => {
		e.preventDefault()
		try {
			const data = await mutateAsync({ phoneNumber })
			toast.success(data.message)
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	return (
		<div>
			<SendOTPFrom
				phoneNumber={phoneNumber}
				onChange={phoneNumberHandler}
				onSubmit={sendOtpHandler}
				isLoading={isLoading}
			/>
		</div>
	)
}

export default Authpage
