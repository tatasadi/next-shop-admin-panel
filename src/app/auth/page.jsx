'use client'
import { useState } from 'react'
import SendOTPFrom from './SendOTPFrom'
import http from '@/services/httpService'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { getOtp, checkOtp } from '@/services/authServices'
import CheckOTPForm from './CheckOTPForm'

function Authpage() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [step, setStep] = useState(2)
	const [otp, setOtp] = useState('')
	const {
		data,
		error,
		isLoading,
		mutateAsync: mutateGetOtp,
	} = useMutation({
		mutationFn: getOtp,
	})

	const { mutateAsync: mutateCheckOtp } = useMutation({
		mutationFn: checkOtp,
	})

	const phoneNumberHandler = e => {
		setPhoneNumber(e.target.value)
	}
	const sendOtpHandler = async e => {
		e.preventDefault()
		try {
			const data = await mutateGetOtp({ phoneNumber })
			toast.success(data.message)
			setStep(2)
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}
	const checkOtpHandler = async e => {
		e.preventDefault()
		try {
			const { message, user } = await mutateCheckOtp({
				phoneNumber,
				otp,
			})
			toast.success(message)
			// if (user.isActive) {
			// router.push('/')
			// } else {
			// router.push('/complete-profile')
			// }
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}
	const renderSteps = () => {
		switch (step) {
			case 1:
				return (
					<SendOTPFrom
						phoneNumber={phoneNumber}
						onChange={phoneNumberHandler}
						onSubmit={sendOtpHandler}
						isLoading={isLoading}
					/>
				)
			case 2:
				return (
					<CheckOTPForm
						onBack={() => setStep(s => s - 1)}
						otp={otp}
						setOtp={setOtp}
						onSubmit={checkOtpHandler}
						// time={time}
						onResendOtp={sendOtpHandler}
					/>
				)
			default:
				return null
		}
	}
	return (
		<div className="flex justify-center">
			<div className="w-full sm:max-w-sm">{renderSteps()}</div>
		</div>
	)
}

export default Authpage
