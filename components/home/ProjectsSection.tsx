import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionTitle } from "../ui/SectionTitle";

export function ProjectsSection() {
  return (
    <section className="px-8 py-16 max-w-[1440px] mx-auto">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
