import TextField from '../ui/TextField'

function SendOTPFrom({ phoneNumber, onChange, onSubmit }) {
	return (
		<div>
			<form className="space-y-10" onSubmit={onSubmit}>
				<TextField
					label="شماره موبایل"
					name="phoneNumber"
					value={phoneNumber}
					onChange={onChange}
				/>
				<button
					type="submit"
					className="font-bold rounded-2xl transition-all duration-300 px-4 py-3 bg-blue-500 text-white hover:bg-blue-300 shadow-lg 
          shadow-blue-800 w-full"
				>
					ارسال کد تایید
				</button>
			</form>
		</div>
	)
}

export default SendOTPFrom
