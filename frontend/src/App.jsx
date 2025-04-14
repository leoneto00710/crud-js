import { UserScreens } from "./pages/user-screens"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/auth" replace />}/>
        <Route path="/auth" element={<UserScreens />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
