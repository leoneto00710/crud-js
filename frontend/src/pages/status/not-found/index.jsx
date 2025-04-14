export function NotFound() {
    return (
        <div className="flex justify-center items-center h-screen w-screen flex-col">
            <h1 className="text-9xl">404</h1>
            <h2 className="font-semibold text-2xl">page not found</h2>
            <p className="font-semibold">go back to <a className="underline text-lime-600 hover:cursor-pointer hover:text-lime-400 transition-all duration-200" href="/">home</a></p>
        </div>
    )}