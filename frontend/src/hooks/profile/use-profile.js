import { useState, useEffect } from "react"
import { getProfile } from "../../services/profile/profile"
import { useNavigate } from "react-router-dom"

export function useProfile() {
  const [profile, setProfile] = useState({ name: "", email: "" })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const loadProfile = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const profileData = await getProfile()
      setProfile({
        name: profileData.name,
        email: profileData.email,
        // Adicione outros campos conforme retornado pela API
      })
    } catch (e) {
      setError(e.message || "Failed to load profile")
      console.error("Error loading profile:", e)

      if (e.response?.status === 401) {
        localStorage.removeItem("token")
        navigate("/auth")
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return {
    profile,
    isLoading,
    error,
    loadProfile,
  }
}
