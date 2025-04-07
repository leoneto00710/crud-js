export function Button({
  text,
  Icon,
  handleClick,
  size = "5",
  variant = "text",
  iconVariant = "green",
}) {
  const baseStyles = `cursor-pointer`

  const iconVariantStyles = {
    green: `bg-zinc-200 text-zinc-800 hover:text-zinc-200 hover:bg-lime-600 rounded-3xl hover:scale-110 transition-all duration-200`,
    red: `bg-zinc-200 text-zinc-800 hover:text-zinc-200 hover:bg-red-500 rounded-3xl hover:scale-110 transition-all duration-200`,
  }

  const variantStyles = {
    text: `bg-zinc-200 text-zinc-800 hover:text-zinc-200 hover:bg-lime-600 transition-all duration-200 w-full hover:rounded-3xl p-2 font-semibold rounded-md`,
    icon: `fixed bottom-0 right-0 p-5 text-zinc-200`,
  }
  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {variant !== "icon" && text}
      {Icon && <Icon className={`size-${size} ${iconVariantStyles[iconVariant]}`} />}
    </button>
  )
}
