export function Button({
  isLoading = false,
  text,
  Icon,
  handleClick,
  size = "10",
  variant = "text",
  iconVariant = "green",
}) {
  const baseStyles = `cursor-pointer`

  if (isLoading) {
    return (
      <div className="inline-block animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent p-3 m-2"></div>
    )
  }

  const iconVariantStyles = {
    green: `bg-zinc-200 text-zinc-800 hover:text-zinc-200 hover:bg-lime-600 rounded-3xl hover:scale-110 transition-all duration-200`,
    red: `bg-zinc-200 text-zinc-800 hover:text-zinc-200 hover:bg-red-500 rounded-3xl hover:scale-110 transition-all duration-200`,
  }

  const variantStyles = {
    text: `bg-zinc-200 text-zinc-800 hover:text-zinc-200 hover:bg-lime-600 transition-all duration-200 w-full hover:rounded-3xl p-2 font-semibold rounded-md active:bg-lime-600/50 active:text-zinc-200/50`,
    icon: `fixed bottom-0 right-0 p-5 text-zinc-200`,
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}${
        isLoading && loadingStyles
      }`}
    >
      {variant !== "icon" && text}
      {Icon && (
        <Icon className={`size-${size} ${iconVariantStyles[iconVariant]}`} />
      )}
    </button>
  )
}
