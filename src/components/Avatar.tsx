
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap: Record<string, string> = {
  A: "bg-red-500",
  B: "bg-blue-500",
  C: "bg-green-500",
  D: "bg-yellow-500",
  E: "bg-purple-500",
  F: "bg-pink-500",
  G: "bg-indigo-500",
  H: "bg-purple-500",
  I: "bg-teal-500",
  J: "bg-cyan-500",
  K: "bg-sky-500",
  L: "bg-blue-500",
  M: "bg-indigo-500",
  N: "bg-purple-600",
  O: "bg-orange-500",
  P: "bg-rose-500",
  Q: "bg-amber-500",
  R: "bg-red-500",
  S: "bg-slate-500",
  T: "bg-teal-500",
  U: "bg-emerald-500",
  V: "bg-violet-500",
  W: "bg-yellow-500",
  X: "bg-zinc-500",
  Y: "bg-yellow-400",
  Z: "bg-green-600",
};

const sizeClassMap = {
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
};

const Avatar = ({ name, size = "md", className }: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  
  const firstLetter = initials[0] || "A";
  const bgColor = colorMap[firstLetter] || "bg-purple-500";

  return (
    <div 
      className={cn(
        "avatar-circle", 
        bgColor,
        sizeClassMap[size],
        className
      )}
    >
      {initials}
    </div>
  );
};

export default Avatar;
