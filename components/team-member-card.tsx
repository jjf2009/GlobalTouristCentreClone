import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMemberCardProps {
  name: string
  role: string
  imageQuery: string
}

export function TeamMemberCard({ name, role, imageQuery }: TeamMemberCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <article className="text-center group" aria-label={`${name}, ${role}`}>
      <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 ring-2 ring-transparent group-hover:ring-primary transition-all">
        <AvatarImage
          src={`/.jpg?height=128&width=128&query=${encodeURIComponent(imageQuery)}`}
          alt={`Photo of ${name}`}
          className="object-cover"
        />
        <AvatarFallback className="text-lg sm:text-xl bg-primary/10 text-primary">{initials}</AvatarFallback>
      </Avatar>
      <h4 className="font-serif font-semibold text-foreground text-sm sm:text-base">{name}</h4>
      <p className="text-primary text-xs sm:text-sm">{role}</p>
    </article>
  )
}
