'use client'
import { useState } from 'react'
import SendOTPFrom from './SendOTPFrom'
import http from '@/services/httpService'
import { toast } from 'react-hot-toast'

function Authpage() {
	const [phoneNumber, setPhoneNumber] = useState('')

	const phoneNumberHandler = e => {
		setPhoneNumber(e.target.value)
	}
	const sendOtpHandler = async e => {
		e.preventDefault()
		try {
			const data = await http.post('/user/get-otp', { phoneNumber })
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
			/>
		</div>
	)
}

export default Authpage
