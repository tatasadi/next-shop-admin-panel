function CheckOTPForm({ onSubmit }) {
	return (
		<div>
			<form className="space-y-10" onSubmit={onSubmit}>
				<p className="font-bold">کد تایید را وارد کنید</p>
				<button type="submit" className="btn-primary w-full">
					تایید
				</button>
			</form>
		</div>
	)
}

export default CheckOTPForm
