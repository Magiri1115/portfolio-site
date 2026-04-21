import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionTitle } from "../ui/SectionTitle";

export function ProjectsSection() {
  return (
    <section className="px-6 md:px-20 py-16 max-w-[144rem] mx-auto">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
