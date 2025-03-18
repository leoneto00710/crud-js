import { useState } from "react"
import { LoginScreen } from "./login-screen"
import { RegisterScreen } from "./register-screen"

export function UserScreens() {
  const [haveAccount, setHaveAccount] = useState(true)

  const handleHaveAccount = () => {
    setHaveAccount(!haveAccount)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <div>
        <h1 className="text-5xl font-bold">TODO LIST</h1>
      </div>
      {haveAccount ? (
        <LoginScreen handleHaveAccount={handleHaveAccount} />
      ) : (
        <RegisterScreen handleHaveAccount={handleHaveAccount} />
      )}
    </div>
  )
}
