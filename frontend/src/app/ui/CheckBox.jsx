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
				className="cursor-pointer rounded-[5px] border-none bg-[#D4D5DD]/80 checked:text-blue-500 accent-indigo-600 w-4 h-4 border-gray-300 focus:ring-0"
			/>
			<label
				htmlFor={id}
				className="text-sm text-gray-700 group-hover:text-indigo-600 transition"
			>
				{label}
			</label>
		</div>
	)
}
export default CheckBox
