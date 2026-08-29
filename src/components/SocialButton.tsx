import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  className?: string;
}

const SocialButton = ({ icon: Icon, label, href = "#", className }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl bg-muted text-foreground font-semibold transition-all duration-300 hover:bg-uber-green-light hover:text-uber-green hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md",
        className
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};

export default SocialButton;
