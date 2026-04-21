import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
  underline?: boolean;
}

export function SectionTitle({ title, className, underline = true }: SectionTitleProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-3xl font-medium mb-4">{title}</h2>
      {underline && <div className="w-[60px] h-[3px] bg-blue-400 rounded-sm" />}
    </div>
  );
}
