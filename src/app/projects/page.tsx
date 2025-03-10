import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/misc/data";
import { Metadata } from "next";
import Badge from "@/components/Badge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my latest projects and contributions to the open-source community.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-background-paper to-primary-light mb-4">
          Projects & Research
        </h1>
        <p className="text-secondary-light text-lg hover:text-background-paper transition-colors duration-300">
          A collection of my research work, side projects, and technical explorations in AI, ML, and software development.
        </p>
      </div>

      {/* Skills Section - Moved Up */}
      <div className="mb-16 p-8 bg-background-light/30 rounded-lg border border-primary/20 hover:border-accent/40 transition-all duration-300">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-primary-light mb-6">
          Technical Skills & Tools
        </h2>
        <div className="space-y-6">
          <div className="group">
            <h3 className="text-accent-light mb-3 group-hover:text-background-paper transition-colors duration-300">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="Python" color="primary" />
              <Badge text="JavaScript/TypeScript" color="info" />
              <Badge text="Java" color="success" />
              <Badge text="Go" color="secondary" />
              <Badge text="SQL" color="warning" />
            </div>
          </div>
          <div className="group">
            <h3 className="text-accent-light mb-3 group-hover:text-background-paper transition-colors duration-300">
              AI/ML Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="PyTorch" color="primary" />
              <Badge text="TensorFlow" color="info" />
              <Badge text="Hugging Face" color="success" />
              <Badge text="LangChain" color="secondary" />
              <Badge text="OpenAI" color="warning" />
            </div>
          </div>
          <div className="group">
            <h3 className="text-accent-light mb-3 group-hover:text-background-paper transition-colors duration-300">
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="Docker" color="primary" />
              <Badge text="Git" color="info" />
              <Badge text="AWS" color="success" />
              <Badge text="FastAPI" color="secondary" />
              <Badge text="MongoDB" color="warning" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.href}
            name={project.name}
            tag={project.tag}
            description={project.description}
            icon={project.icon}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
