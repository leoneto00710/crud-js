import { useState } from "react"
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/task/task"

export function useTask() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadTasks = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const tasksData = await getTasks()
      setTasks(tasksData)
    } catch (e) {
      setError(e.message || "Failed to load tasks")
      console.error("Error loading tasks:", e)
    } finally {
      setIsLoading(false)
    }
  }

  const createTask = async (title, content) => {
    setIsLoading(true)
    setError(null)
    try {
      await createTask(title, content)
      await loadTasks()
    } catch (e) {
      setError(e.message || "Failed to create task")
      console.error("Error creating task:", e)
      throw e
    } finally {
      setIsLoading(false)
    }
  }

  const editTask = async (id, title, content) => {
    setIsLoading(true)
    setError(null)
    try {
      await updateTask(id, title, content)
      await loadTasks()
    } catch (e) {
      setError(e.message || "Failed to update task")
      console.error("Error updating task:", e)
      throw e
    } finally {
      setIsLoading(false)
    }
  }

  const removeTask = async (id) => {
    setIsLoading(true)
    setError(null)
    try {
      await deleteTask(id)
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    } catch (e) {
      setError(e.message || "Failed to delete task")
      console.error("Error deleting task:", e)
      throw e
    } finally {
      setIsLoading(false)
    }
  }

  return {
    tasks,
    isLoading,
    error,
    loadTasks,
    createTask,
    editTask,
    removeTask,
  }
}
