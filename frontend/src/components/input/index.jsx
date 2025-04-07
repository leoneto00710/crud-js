export function Input({ value, onChange, type, placeholder, icon: Icon }) {
  return (
    <div className="bg-zinc-700 flex items-center p-1.5 gap-1 rounded-md">
      {Icon && <Icon className="text-zinc-400" />}
      <div className="border-l-2 border-zinc-400 h-full px-2">
        <input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className="font-semibold text-zinc-200 focus:p-1 transition-all duration-100"
        />
      </div>
    </div>
  )
}
