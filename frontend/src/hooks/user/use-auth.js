import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { login, createUser } from "../../services/user/user"

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const checkInput = (param) => {
    return !param || param.trim() === ""
  }

  const useLogin = async (email, password) => {
    setIsLoading(true)

    try {
      const token = await login(email, password)
      if (token) {
        localStorage.setItem("token", token)
        navigate("/home")
      }
    } catch (e) {
      throw new Error(e.response?.data?.message || "Login error")
    } finally {
      setIsLoading(false)
    }
  }

  const useCreateUser = async (username, email, password) => {
    setIsLoading(true)

    try {
      await createUser(username, email, password)
      if(createUser) {
        useLogin(email, password)
      }
    } catch (e) {
      throw new Error(e.response?.data?.message || "Error while creating user")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    useLogin,
    useCreateUser,
    checkInput,
    isLoading,
  }
}
