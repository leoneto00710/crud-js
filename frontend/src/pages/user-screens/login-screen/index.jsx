import { useState } from "react"
import { AtSign, Lock } from "lucide-react"
import { Input } from "../../../components/input"
import { Button } from "../../../components/button"
import { ErrorMessage } from "../../../components/error-message"
import { useAuth } from "../../../hooks/user/use-auth"
import { checkInput } from "../../../utils/check-input/index"

export function LoginScreen({ handleHaveAccount }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [missingEmail, setMissingEmail] = useState(false)
  const [missingPassword, setMissingPassword] = useState(false)

  const { useLogin, isLoading } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const isEmailMissing = checkInput(email)
    const isPasswordMissing = checkInput(password)

    setMissingEmail(isEmailMissing)
    setMissingPassword(isPasswordMissing)

    if (missingEmail || missingPassword) return

    try {
      await useLogin(email, password)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center rounded-md">
      <h1 className="text-2xl font-bold">log-in your account</h1>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        <Input
          onChange={(e) => {
            setEmail(e.target.value)
            if (missingEmail) setMissingEmail(false)
          }}
          value={email}
          icon={AtSign}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value)
            if (missingPassword) setMissingPassword(false)
          }}
          value={password}
          icon={Lock}
          type={"password"}
          placeholder={"Password"}
        />
        {isLoading ? (
          <Button isLoading={isLoading} />
        ) : (
          <Button text={"log-in"} />
        )}
      </form>
      <p className="cursor-pointer hover:underline" onClick={handleHaveAccount}>
        don't have an account?
      </p>
      <div className="flex flex-col items-center">
        {missingEmail && <ErrorMessage message="email is required" />}
        {missingPassword && <ErrorMessage message="password is required" />}
      </div>
    </div>
  )
}
