import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { getProfile } from "../../services/profile/profile"
import { useEffect, useState } from "react"

export function Home() {
  const [profile, setProfile] = useState({ name: "", email: "" })

  function logOut() {
    localStorage.removeItem("token")
    return navigate("/auth")
  }

  function checkToken() {
    const token = localStorage.getItem("token")
    if (!token) {
      return navigate("/auth")
    }
    // console.log(token)
  }

  async function loadProfile() {
    try {
      const data = await getProfile()
      setProfile({
        name: data.name,
        email: data.email,
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    checkToken()
    loadProfile()
  }, [])

  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">TODO</h1>
        </div>
        <div className="flex items-center cursor-pointer hover:text-red-400 hover:scale-110 transition-all duration-200">
          <button className="" onClick={logOut}>
            <LogOut />
          </button>
        </div>
      </div>
      <div>
        <h2>Nome:{profile.name}</h2>
        <h2>Email:{profile.email}</h2>
      </div>
    </div>
  )
}
