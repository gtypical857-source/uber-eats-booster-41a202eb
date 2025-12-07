import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
  className?: string;
}

const StepCard = ({ icon: Icon, step, title, description, className }: StepCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-3xl p-8 shadow-card flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {/* Icon Circle */}
      <div className="w-16 h-16 rounded-full bg-uber-green-light flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-uber-green" strokeWidth={2} />
      </div>

      {/* Step Number */}
      <div className="w-8 h-8 rounded-full bg-uber-green flex items-center justify-center mb-4">
        <span className="text-primary-foreground text-sm font-bold">{step}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default StepCard;
