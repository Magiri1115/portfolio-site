import Link from "next/link";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className={cn(
        "group block bg-[#1e3a5f] border border-blue-500 rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20",
        className
      )}
    >
      <div className="bg-blue-600/10 p-8 h-[16rem] flex flex-col justify-center">
        <h3 className="text-[2rem] font-medium text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-[1.4rem] text-slate-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-md text-[1.2rem] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
