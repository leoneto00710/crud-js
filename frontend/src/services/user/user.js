import { api } from "../api"

export async function createUser(name, email, password) {
  try {
    const lowerCaseEmail = email.toLowerCase()
    await api.post("/user/register", { name, email:lowerCaseEmail, password })
    console.log("User created successfully")
  } catch (e) {
    throw new Error(e)
  }
}

export async function login(email, password) {
  try {
    const lowerCaseEmail = email.toLowerCase()
    const { data: {token} } = await api.post("/user/login", { email:lowerCaseEmail, password })
    // console.log(token)
    return token
  } catch (e) {
    throw new Error(e)
  }
}
