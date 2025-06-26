import OTPInput from 'react-otp-input'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CiEdit } from 'react-icons/ci'
import Loader from '../ui/Loader'

function CheckOTPForm({
	onSubmit,
	otp,
	setOtp,
	onBack,
	time,
	onResendOtp,
	otpResponse,
	isCheckingOtp,
}) {
	return (
		<div>
			<button onClick={onBack} className="mb-4">
				<HiArrowNarrowRight className="w-6 h-6" />
			</button>
			{otpResponse && (
				<p>
					{otpResponse?.message}
					<button onClick={onBack} className="mr-2">
						<CiEdit className="w-6 h-6 text-gray-700" />
					</button>
				</p>
			)}
			<div className="mb-4 text-secondary-500">
				{time > 0 ? (
					<p>{time} ثانیه تا ارسال مجدد کد</p>
				) : (
					<button onClick={onResendOtp}>ارسال مجدد کد؟</button>
				)}
			</div>
			<form className="space-y-10" onSubmit={onSubmit}>
				<p className="font-bold">کد تایید را وارد کنید</p>
				<OTPInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderSeparator={<span>-</span>}
					inputStyle={{
						width: '2.5rem',
						padding: '0.5rem 0.2rem',
						border: '1px solid gray',
						borderRadius: '0.5rem',
					}}
					containerStyle="flex flex-row-reverse gap-x-2 justify-center"
					renderInput={props => <input type="number" {...props} />}
				/>
				<div>
					{isCheckingOtp ? (
						<Loader />
					) : (
						<button type="submit" className="btn-primary">
							تایید
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default CheckOTPForm
