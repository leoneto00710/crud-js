import { useState } from "react"
import { UserScreens } from "./pages/user-screens"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<UserScreens/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}