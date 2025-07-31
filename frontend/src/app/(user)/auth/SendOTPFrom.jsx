import Loader from '../../ui/Loader'
import TextField from '../../ui/TextField'

function SendOTPFrom({ phoneNumber, onChange, onSubmit, isLoading }) {
	return (
		<div className="flex items-center justify-center">
			<form
				className="space-y-10 lg:max-w-xl w-full"
				onSubmit={onSubmit}
			>
				<TextField
					label="شماره موبایل"
					name="phoneNumber"
					value={phoneNumber}
					onChange={onChange}
				/>
				<div>
					{isLoading ? (
						<Loader />
					) : (
						<button type="submit" className="btn-primary">
							ارسال کد تایید
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default SendOTPFrom
