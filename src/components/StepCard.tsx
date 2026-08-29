import { cn } from "@/lib/utils";

interface StepCardProps {
  step: number;
  description: string;
  className?: string;
}

const StepCard = ({ step, description, className }: StepCardProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-2xl bg-card p-4 shadow-card transition-all duration-300 hover:shadow-card-hover",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-uber-green bg-uber-green-light text-sm font-bold text-uber-green">
        {step}
      </div>
      <p className="text-sm font-medium text-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default StepCard;
