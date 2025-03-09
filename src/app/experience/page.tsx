import Image from "next/image";
import { Metadata } from "next";
import Badge from "@/components/Badge";
import TypingText from "@/components/TypingText";
import { Carousel } from "@/components/Carousel";

// Import company/institution images
import SwivelImg from "@/images/swivel.jpg";
import PolyUImg from "@/images/PolyU.jpg";
import HKTImg from "@/images/hkt.jpg";
import ProMexImg from "@/images/ProMEX.jpg";
import KNImg from "@/images/kn.jpg";
import MUImg from "@/images/mu.jpg";
import GovImg from "@/images/gov.jpg";
import HKCCImg from "@/images/hkcc.jpg";

export const metadata: Metadata = {
  title: "Experience - BeChal Sim",
  description: "Professional experience and background of BeChal Sim",
};

const experiences = [
  {
    company: "Swivel Software",
    role: "Software Developer, Backend",
    period: "Dec.23 - Present",
    image: SwivelImg,
    isPresent: true,
  },
  {
    company: "PolyU",
    role: "Part-Time Research Assistant/Engineer",
    period: "Jun.24 - Dec.24",
    image: PolyUImg,

  },
  {
    company: "PolyU",
    role: "MSc in Artificial Intelligence & Big Data Computing",
    period: "Sept.23 - Exp. Apr.25",
    image: PolyUImg,
    isPresent: true,
  },
  {
    company: "HKT",
    role: "Graduate Programme, Fintech",
    period: "Jul.23 - Sept.23",
    image: HKTImg,
  },
  {
    company: "ProMEX",
    role: "Business & System Analysis Intern",
    period: "Feb.23 - Jun.23",
    image: ProMexImg,
  },
  {
    company: "Kuehne+Nagel",
    role: "Data Solution Intern",
    period: "Jun.22 - Jul.22",
    image: KNImg,
  },
  {
    company: "HKMU",
    role: "Bachelor of Business Administration in Business Intelligence and Analytics",
    period: "Sept.21 - May.23",
    image: MUImg,
  },
  {
    company: "Census and Statistics Department",
    role: "Enumerator",
    period: "Jun.21 - Aug.21",
    image: GovImg,
  },
  {
    company: "PolyU HKCC",
    role: "Associate in Business (Accounting)",
    period: "Sept.19 - Jul.21",
    image: HKCCImg,
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      {/* Profile Summary */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-background-paper to-primary-light mb-6">
          Professional Background
        </h1>
        <div className="prose prose-invert max-w-none space-y-4">
          <p className="text-secondary-light/90 text-lg leading-relaxed hover:text-background-paper transition-colors duration-300">
            I'm a <span className="text-accent-light font-semibold">Backend Developer</span> specializing in AI/ML integration and microservices development. Currently pursuing my{" "}
            <span className="text-accent-light font-semibold">Master's in AI & Big Data Computing</span> part-time mode at The Hong Kong Polytechnic University while working as a Software Developer at Swivel Software.
          </p>
          <p className="text-secondary-light/90 text-lg leading-relaxed hover:text-background-paper transition-colors duration-300">
            My expertise includes developing <span className="text-accent-light font-semibold">ML-powered microservices</span>, implementing <span className="text-accent-light font-semibold">OCR & Vision Models</span>, and building <span className="text-accent-light font-semibold">cloud-native applications</span>. I have experience in both full-stack development and machine learning engineering, with a focus on creating scalable AI solutions using technologies like AWS Bedrock, JAX, and FastAPI.
          </p>
        </div>

        {/* Key Skills */}
        <div className="mt-8 group">
          <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-background-paper to-primary-light mb-4 group-hover:from-primary-light group-hover:to-background-paper transition-all duration-300">
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge text="Backend Development" color="primary" />
            <Badge text="Machine Learning" color="success" />
            <Badge text="Computer Vision" color="info" />
            <Badge text="Cloud Services" color="secondary" />
            <Badge text="Microservices" color="primary" />
            <Badge text="System Design" color="warning" />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section>
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-background-paper to-primary-light mb-8">
          Experience Timeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-background-light/30 rounded-lg p-6 border border-primary/20 hover:border-accent/40 hover:bg-background-light/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 group-hover:ring-2 group-hover:ring-primary-light transition-all duration-300">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-background-paper group-hover:text-primary-light transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <div className="text-primary-light font-medium mb-1 group-hover:text-background-paper transition-colors duration-300">
                    {exp.role}
                  </div>
                  <div className="text-sm text-secondary-light group-hover:text-secondary transition-colors duration-300">
                    {exp.isPresent ? (
                      <span className="flex items-center gap-1">
                        {exp.period.split(" - ")[0]} - <TypingText />
                      </span>
                    ) : (
                      exp.period
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 