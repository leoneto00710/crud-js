import { AtSign, Lock} from "lucide-react"
import { Input } from "../../../components/input"
import { Button } from "../../../components/button"

export function LoginScreen({handleHaveAccount}) {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return(
      <div className="flex flex-col gap-4 items-center rounded-md">
        <h1 className="text-2xl font-bold">log-in your account</h1>
        <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
            <Input icon={AtSign} type={"email"} placeholder={"Email"}/>
            <Input icon={Lock} type={"password"} placeholder={"Password"}/>
            <Button text={"log-in"}/>
        </form>
        <p className="cursor-pointer hover:underline" onClick={handleHaveAccount}>don't have an account?</p>
      </div>
    )
  }
  