import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Profile } from "./profile"
import { UserRound } from "lucide-react"

export function DropDown({ profile }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const logOut = () => {
    localStorage.removeItem("token")
    navigate("/auth")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 text-zinc-200 px-3 py-1 rounded-md hover:bg-zinc-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <UserRound />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 rounded-md bg-zinc-700 p-2 shadow-lg z-50">
          <Profile profile={profile} />
          <DisconnectButton handleClick={logOut} />
        </div>
      )}
    </div>
  )
}

function DisconnectButton({ handleClick }) {
  return (
    <button
      className="w-full text-left text-zinc-200 px-3 py-1 rounded-md hover:bg-zinc-600"
      onClick={(e) => {
        e.stopPropagation()
        handleClick()
      }}
    >
      Disconnect
    </button>
  )
}
