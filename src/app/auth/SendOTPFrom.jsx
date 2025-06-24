import Loader from '../ui/Loader'
import TextField from '../ui/TextField'

function SendOTPFrom({ phoneNumber, onChange, onSubmit, isLoading }) {
	return (
		<div>
			<form className="space-y-10" onSubmit={onSubmit}>
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
						<button
							type="submit"
							className="btn-primary font-bold rounded-2xl transition-all duration-300 px-4 py-3 text-white shadow-lg 
							shadow-blue-800 w-full"
						>
							ارسال کد تایید
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default SendOTPFrom
