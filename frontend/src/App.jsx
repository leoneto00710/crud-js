import { useState } from "react"
import { UserScreens } from "./pages/user-screens"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserScreens />} />
      </Routes>
    </BrowserRouter>
  )
}
