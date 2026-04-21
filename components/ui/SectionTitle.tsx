import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
  underline?: boolean;
}

export function SectionTitle({ title, className, underline = true }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-[2.8rem] md:text-[3.2rem] font-medium mb-4">{title}</h2>
      {underline && <div className="w-[6rem] h-[0.3rem] bg-blue-400 rounded-sm" />}
    </div>
  );
}
