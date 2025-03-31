import { useState } from "react"
import { AtSign, Lock } from "lucide-react"
import { Input } from "../components/input"
import { Button } from "../components/button"
import { ErrorMessage } from "../components/components/error-message"
import { login } from "../../../services/user/user"

export function LoginScreen({ handleHaveAccount }) {
  const [missingEmail, setMissingEmail] = useState(false)
  const [missingPassword, setMissingPassword] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function checkInput(param, state) {
    state(!param)
    return
  }

  function resetForm() {
    setEmail("")
    setPassword("")

    setMissingEmail(false)
    setMissingPassword(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    checkInput(email, setMissingEmail)
    checkInput(password, setMissingPassword)

    if(email && password) {
      const token = login(email, password)
      if (token) {
        resetForm()
      }
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          icon={AtSign}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          icon={Lock}
          type={"password"}
          placeholder={"Password"}
        />
        <Button text={"log-in"} />
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
