import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/misc/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my latest projects and contributions to the open-source community.",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <h1 className="text-4xl mt-6 font-bold tracking-tight text-zinc-50 sm:text-5xl">
          My Ongoing Projects
        </h1>

        <p className="mt-6 text-base text-zinc-400 font-light">
          To be updated
        </p>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-8">
        {projects.map((project, projectIndex) => (
          <ProjectCard
            key={projectIndex}
            href={project.href}
            name={project.name}
            description={project.description}
            icon={project.icon}
            image={project.image}
          />
        ))}
      </div> */}
    </div>
  );
}
