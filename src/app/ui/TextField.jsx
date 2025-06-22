function TextField({ label, name, value, onChange }) {
	return (
		<div>
			<label htmlFor={name} className="block mb-2">
				{label}
			</label>
			<input
				autoComplete="off"
				className="w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-800 border border-gray-100 outline-none duration-200 transition-all ease-in-out hover:border-blue-300 focus:outline-none focus:border-blue-700 focus:shadow-input-focus focus:bg-white"
				type="text"
				name={name}
				id={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
export default TextField
