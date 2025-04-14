import { UserScreens } from "./pages/user-screens"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/status/not-found"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/auth" replace />}/>
        <Route path="/auth" element={<UserScreens />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
