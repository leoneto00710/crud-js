import { useState } from "react"
import { AtSign, Lock, LockKeyhole, UserRound } from "lucide-react"
import { Input } from "../../../components/input"
import { Button } from "../../../components/button"
import { ErrorMessage } from "../../../components/error-message"
import { checkInput } from "../../../utils/check-input/index"
import { useAuth } from "../../../hooks/user/use-auth"

export function RegisterScreen({ handleHaveAccount }) {
  const [missingUsername, setMissingUsername] = useState(false)
  const [missingEmail, setMissingEmail] = useState(false)
  const [missingPassword, setMissingPassword] = useState(false)
  const [missingConfirmPassword, setMissingConfirmPassword] = useState(false)
  const [passwordNotMatch, setPasswordNotMatch] = useState(false)

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const { useCreateUser, isLoading } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()
  
    const isUsernameMissing = checkInput(username)
    const isEmailMissing = checkInput(email)
    const isPasswordMissing = checkInput(password)
    const isConfirmPasswordMissing = checkInput(confirmPassword)
  
    setMissingUsername(isUsernameMissing)
    setMissingEmail(isEmailMissing)
    setMissingPassword(isPasswordMissing)
    setMissingConfirmPassword(isConfirmPasswordMissing)
  
    if (isUsernameMissing || isEmailMissing || isPasswordMissing || isConfirmPasswordMissing) return

    const isPasswordMatch = password === confirmPassword

    setPasswordNotMatch(!isPasswordMatch)

    if (isPasswordMatch && email && username && password) {
      useCreateUser(username, email, password)
      handleHaveAccount(!handleHaveAccount)
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center rounded-md">
      <h1 className="text-2xl font-bold">create your account</h1>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={UserRound}
          type={"text"}
          placeholder={"Username"}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={AtSign}
          type={"email"}
          placeholder={"Email"}
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={Lock}
          type={"password"}
          placeholder={"Password"}
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={LockKeyhole}
          type={"password"}
          placeholder={"Confirm password"}
        />
        {isLoading ? (
          <Button isLoading={isLoading} />
        ) : (
          <Button text={"create"} />
        )}
      </form>
      <p className="cursor-pointer hover:underline" onClick={handleHaveAccount}>
        already have an account?
      </p>

      <div className="flex flex-col items-center">
        {missingUsername && <ErrorMessage message="username is required" />}
        {missingEmail && <ErrorMessage message="email is required" />}
        {missingPassword && <ErrorMessage message="password is required" />}
        {missingConfirmPassword && (
          <ErrorMessage message="confirm password is required" />
        )}
        {passwordNotMatch && <ErrorMessage message="passwords doesn't match" />}
      </div>
    </div>
  )
}
