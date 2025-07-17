function CheckBox({ id, name, value, onChange, checked, label }) {
	return (
		<div className="flex items-center gap-x-2 text-[#6A6C87]">
			<input
				type="checkbox"
				name={name}
				id={id}
				checked={checked}
				value={value}
				onChange={onChange}
				className="cursor-pointer  rounded-[5px] border-none bg-[#D4D5DD]/80 w-4 h-4 checked:text-blue-500"
			/>
			<label htmlFor={id} className="cursor-pointer">
				{label}
			</label>
		</div>
	)
}
export default CheckBox
