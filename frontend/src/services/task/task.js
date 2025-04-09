import { api } from "../api"

export async function getTasks() {
  try {
    const { data: tasks } = await api.get("/task/list", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    // console.log(tasks)
    return tasks
  } catch (e) {
    throw new Error(e)
  }
}

export async function createTask(title, content) {
  try {
    await api.post(
      "/task/create",
      { title, content },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return ("Task created successfully")
  } catch (e) {
    throw new Error(e)
  }
}

export async function updateTask(id, title, content) {
  try {
    await api.put(
      `/task/update/${id}`,
      { title, content },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    return ("Task updated successfully")
  } catch (e) {
    throw new Error(e)
  }
}

export async function deleteTask(id) {
  try {
    await api.delete(`/task/delete/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    return ("Task deleted successfully")
  } catch (e) {
    throw new Error(e)
  }
}
