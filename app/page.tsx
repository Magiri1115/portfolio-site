import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />
      <ProjectsSection />
      <ContactForm />
    </div>
  );
}
