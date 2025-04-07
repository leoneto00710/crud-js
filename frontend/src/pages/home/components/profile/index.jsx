import { AtSign, User2 } from "lucide-react"

export function Profile({ profile }) {
  return (
    <div className="flex flex-col gap-1">
      <ProfileItem Icon={AtSign} text={profile.email} />
      <ProfileItem Icon={User2} text={profile.name} />
    </div>
  )
}

function ProfileItem({ Icon, text }) {
  return (
    <div className="flex gap-1">
      <div className="flex text-base items-center gap-1 font-semibold">
        <Icon className="size-5" />
        {text}
      </div>
    </div>
  )
}
