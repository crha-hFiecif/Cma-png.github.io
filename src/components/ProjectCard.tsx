import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface ProjectCardProps {
  name: string;
  description?: string;
  icon: React.ComponentType<{ className: string }>;
  href: string;
  image?: string | StaticImageData;
  tag?: string;
}

export function ProjectCard({
  name,
  description,
  icon: Icon,
  href,
  image,
  tag,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full bg-background-light/30 border border-primary/20 rounded-lg shadow-lg hover:shadow-accent/20 hover:border-accent/40 transition-all duration-300">
      {/* Image Container */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image 
            src={image} 
            alt={name} 
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 
            shadow-md shadow-primary/5 ring-1 ring-primary/20 group-hover:bg-accent/20 group-hover:ring-accent/30 transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary-light group-hover:text-accent-light transition-colors duration-300" />
          </div>
          {tag && (
            <div className="text-xs font-medium text-secondary-light bg-secondary/5 px-3 py-1 rounded-full group-hover:bg-accent/5 group-hover:text-accent-light transition-colors duration-300">
              {tag}
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold text-background-paper group-hover:text-accent-light transition-colors duration-300 mb-3">
          {name}
        </h2>

        <p className="text-secondary-light text-sm mb-6 flex-grow group-hover:text-background-paper transition-colors duration-300">
          {description}
        </p>

        <Link
          target="_blank"
          href={href}
          className="inline-flex items-center gap-2 text-sm text-primary-light hover:text-accent transition-colors duration-300 mt-auto"
        >
          View Project
          <IconArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}