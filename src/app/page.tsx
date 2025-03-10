import Image from "next/image";
import heroImage from "@/images/intro.jpeg";
import { Button } from "@/components/Button";
import { IconDownload } from "@tabler/icons-react";
import { projects } from "@/misc/data";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import Badge from '@/components/Badge';
import { SocialMediaButtons } from "@/components/SocialMediaButtons";
import SwivelImg from "@/images/swivel.jpg";
import PolyUImg from "@/images/PolyU.jpg";
import HKTImg from "@/images/hkt.jpg";
import ProMexImg from "@/images/ProMEX.jpg";
import KNImg from "@/images/kn.jpg";
import MUImg from "@/images/mu.jpg";
import GovImg from "@/images/gov.jpg";
import HKCCImg from "@/images/hkcc.jpg";
import HorizontalTimeline from "@/components/HorizontalTimeline"; // Import the HorizontalTimeline component
import TypingText from '@/components/TypingText'; // Import the TypingText component
import { Carousel } from '@/components/Carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function HomePage() {
  return ( 
    <>
      {/* Hero section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        {/* Image section on the left */}
        <div className="flex flex-col justify-center items-center lg:order-first">
          <div className="relative w-80 h-80 rounded-full overflow-hidden mb-6 ring-2 ring-accent/30 shadow-xl shadow-accent/10 group-hover:ring-accent transition-all duration-300">
            <Image
              src={heroImage}
              alt="Profile photo"
              priority
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/resume.pdf" target="_blank">
              <Button className="group">
                Download Resume
                <IconDownload className="h-4 w-4 ml-2 group-hover:text-accent-light transition-colors duration-300" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Text section on the right */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary-light hover:from-primary-light hover:to-accent transition-all duration-300">
              BeChal L-H SIM
            </span>
          </h1>

          <h2 className="mt-6 text-xl text-secondary-light font-light">
            <span className="text-accent-light hover:text-background-paper transition-colors duration-300">
              AI Developer & Machine Learning Engineer
            </span>
            <br />
            MSc., Artificial Intelligence & Big Data Computing @{" "}
            <Link
              href="https://www.polyu.edu.hk/comp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light hover:text-accent-light transition-colors duration-300"
            >
              The Hong Kong Polytechnic University
            </Link>
          </h2>

          <div className="mt-8 space-y-4">
            <p className="text-secondary-light/90 text-lg leading-relaxed hover:text-background-paper transition-colors duration-300">
              I'm a <span className="text-accent-light font-semibold">Backend Developer</span> with a strong focus on <span className="text-accent-light font-semibold">AI/ML integration</span> and <span className="text-accent-light font-semibold">microservices architecture</span>. Currently working at Swivel Software while pursuing my part-time Master's degree in AI & Big Data Computing at PolyU and will graduate in end of April 2025, specializing in LLMs, computer vision and machine learning applications.
            </p>

            <p className="text-secondary-light/90 text-lg leading-relaxed hover:text-background-paper transition-colors duration-300">
              With a background in <span className="text-accent-light font-semibold">Business Intelligence and Analytics</span>, I bring a unique blend of technical expertise and business acumen. My experience spans developing <span className="text-accent-light font-semibold">ML-powered solutions</span>, implementing <span className="text-accent-light font-semibold">LLMs, RAG,OCR & Vision Models</span>, and building <span className="text-accent-light font-semibold">cloud-native applications</span> using cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge text="Machine Learning" color="primary" />
              <Badge text="Computer Vision" color="success" />
              <Badge text="Cloud Services" color="info" />
              <Badge text="Backend Development" color="warning" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects section */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-primary-light mb-8 hover:from-primary-light hover:to-accent-light transition-all duration-300">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.slice(0, 4).map((project, index) => (
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
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-primary-light hover:text-accent-light transition-colors duration-300 group">
            View All Projects 
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
