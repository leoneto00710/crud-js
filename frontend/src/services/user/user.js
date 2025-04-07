import { api } from "../api"

export async function createUser(name, email, password) {
  try {
    await api.post("/user/register", { name, email, password })
    alert("User created successfully")
  } catch (e) {
    throw new Error(e)
  }
}

export async function login(email, password) {
  try {
    const { data: {token} } = await api.post("/user/login", { email, password })
    // console.log(token)
    return token
  } catch (e) {
    throw new Error(e)
  }
}
