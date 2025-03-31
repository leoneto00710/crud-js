export function ErrorMessage({ message }) {
  return (
    <p className="text-red-400/70 font-bold transition-all duration-500">
      {message}
    </p>
  )
}