import { Profile } from "./components"
import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { getProfile } from "../../services/profile/profile"
import { useEffect, useState } from "react"

export function Home() {
  const [profile, setProfile] = useState({ name: "", email: "" })
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

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
      setLoading(true)
      const data = await getProfile()
      setProfile({
        name: data.name,
        email: data.email,
      })
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkToken()
    loadProfile()
  }, [])

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-between items-start p-5">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-4xl font-bold">TODO</h1>
          <Profile profile={profile} />
        </div>
        <div className="flex items-center p-1 cursor-pointer hover:text-red-400 hover:scale-110 transition-all duration-200">
          <button className="" onClick={logOut}>
            <LogOut />
          </button>
        </div>
      </div>
    </div>
  )
}
