import { api } from "../api"

export async function getProfile() {
  try {
    const { data: profile } = await api.get("/profile/user-info", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    // console.log(profile)
    return profile
  } catch (e) {
    throw new Error(e)
  }
}
