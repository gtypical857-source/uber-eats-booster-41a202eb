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
        "flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-uber-green text-primary-foreground font-semibold transition-all duration-300 hover:bg-uber-green/90 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg",
        className
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};

export default SocialButton;
