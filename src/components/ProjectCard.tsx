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
    <div
  className="flex flex-col lg:flex-row items-center space-x-6 p-6 border border-zinc-200 rounded-lg shadow-md 
  hover:bg-gradient-to-r hover:from-green-100 hover:to-amber-100 hover:border-emerald-50 hover:shadow-cyan-500/50"
>
      {image && (
        <div className="flex-shrink-0">
          <Image 
            src={image} 
            alt={name} 
            className="rounded-md" 
            width={450}
            height={450}
          />
        </div>
      )}

      <div className="flex flex-col justify-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white 
        shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5"
        >
          <Icon className="h-8 w-8" />
        </div>

        <div className="mt-2">
          <h2 className="text-xl font-semibold text-zinc-900">{name}</h2>

          {/* Conditionally render tags if they exist */}
          {tag && (
            <div className="text-sm font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
              {tag}
            </div>
          )}

          <p className="text-zinc-500 font-light">{description}</p>

          <Link
            target="_blank"
            href={href}
            className="flex text-zinc-600 items-center gap-1 hover:underline mt-2"
          >
            Learn more
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}