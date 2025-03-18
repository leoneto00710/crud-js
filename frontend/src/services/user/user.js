import {api} from "../api"

export async function createUser(name,email,password) {
    try{
        await api.post("/user/register", {name, email, password})
        alert("User created successfully")
    }catch(e){
        alert(e.response.data.message)
    }
}