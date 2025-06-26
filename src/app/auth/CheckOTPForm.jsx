import OTPInput from 'react-otp-input'
import { HiArrowNarrowRight } from 'react-icons/hi'

function CheckOTPForm({ onSubmit, otp, setOtp, onBack }) {
	return (
		<div>
			<button onClick={onBack} className="mb-4">
				<HiArrowNarrowRight className="w-6 h-6 text-secondary-500" />
			</button>
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
				<button type="submit" className="btn-primary w-full">
					تایید
				</button>
			</form>
		</div>
	)
}

export default CheckOTPForm
