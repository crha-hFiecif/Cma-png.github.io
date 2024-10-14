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
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-9 items-center">
        {/* Image section on the left */}
        <div className="flex flex-col justify-center items-center lg:order-first">
          {/* <div className="relative w-72 h-72 rounded-full overflow-hidden mb-6"> */}
          {/* <div className="relative w-72 h-72 rounded-full overflow-hidden mb-6"> */}
          <div className="relative w-80 h-80 rounded-full overflow-hidden mb-6">
            <Image
              src={heroImage}
              alt="Hero image"
              priority
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* <SocialMediaButtons /> */}
          <div className="mt-6 flex justify-center">
            <Link href="/resume.pdf">
              <Button>
                Download CV(Updated on Feb 2024)
                <IconDownload className="h-4 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Text section on the right */}
        <div className="flex flex-col items-start">
          <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-pink-500">
          BeChal L-H SIM
          </div>

          <h4 className="mt-6 text-base text-zinc-600 font-light">
            Software Developer <br />
            MSc., AIBD @{" "}
            <Link
              href="https://www.polyu.edu.hk/comp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#853750] no-underline hover:underline"
            >
              polyu.edu.hk/comp/
            </Link>
          </h4>
          <p>
            <br />
            I'm HL (BeChal) SIM, a software developer specializing in natural language processing and machine learning applications.
            <br />
            <br />
            <p>
              As an MSc AI student at PolyU, my coursework includes{' '}
              <Badge text="COMP5423 Natural Language Processing" color="blue" href="https://www.polyu.edu.hk/comp/docdrive/tpg/subject/COMP5423.pdf" />,{' '}
              <Badge text="COMP5523 Computer Vision and Image Processing" color="green" href="https://www.polyu.edu.hk/comp/docdrive/tpg/subject/COMP5523.pdf" />,{' '}
              <Badge text="COMP5434 Big Data Computing" color="purple" href="https://www.polyu.edu.hk/comp/docdrive/tpg/subject/COMP5434.pdf" />,{' '}
              <Badge text="COMP5541 Machine Learning and Data Analytics" color="pink" href="https://www.polyu.edu.hk/comp/docdrive/tpg/subject/COMP5541.pdf" />,{' '}
              <Badge text="COMP5241 Software Engineering and Development" color="yellow" href="https://www.polyu.edu.hk/comp/docdrive/tpg/subject/COMP5241.pdf" />, and so on{' '}.
            </p>
            <br />
            This summer, I'll begin my master's thesis on detecting sophisticated fake images/videos via Diffusion Model under{" "}
            <Link
              href="https://www.polyu.edu.hk/comp/people/academic-staff/prof-pathak-ajay-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#853750] no-underline hover:underline"
            >
              Prof. Ajay Kumar Pathak's
            </Link>{" "}
            supervision.
            <br/>
            <br/>
            With expertise in Python, JavaScript, Java, Go, Swift, and SQL, I'm passionate about developing innovative AI solutions through cutting-edge research and hands-on experience. <br />
          </p>

          {/* <div className="mt-6 flex justify-center">
            <Link href="/resume.pdf">
              <Button>
                Download CV(Updated on Feb 2024)
                <IconDownload className="h-4 w-6" />
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* My Journey section */}
      <section className="container mx-auto my-20">
        <h2 className="text-4xl font-bold mb-8">My Journey</h2>
        <div className="mt-6 space-y-7 text-base text-zinc-600 font-light">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
                {/* New Item Before Swivel */}
      <div className="flex flex-col items-center sm:items-start">
        <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
          <Image
            src={PolyUImg}  // Replace with your new image import
            alt="PolyU"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>


        <div>
          <h4 className="text-sm font-bold">PolyU</h4>
          <p className="text-sm">
            Part-Time Research Assistant/Engineer
            <br />
            <span className="flex items-center space-x-1">
              <span>Jun.24 -</span>
              <TypingText />
            </span>
          </p>
          </div>
        </div>


            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={SwivelImg}
                  alt="Swivel"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">Software Software</h4>
                <p className="text-sm">
                  Software Developer Intern in LLMs &amp; ML
                  <br />
                  <span className="flex items-center space-x-1">
                    <span>Dec.23 -</span>
                      <TypingText /> {/* Use TypingText component here */}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={PolyUImg}
                  alt="PolyU"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">PolyU</h4>
                <p className="text-sm">
                  Master of Science Degree in AI &amp; Data Computing
                  <br />
                  <span className="flex items-center space-x-1">
                  <span>Sep.23 -</span>
                  <TypingText /> {/* Use TypingText component here */} (Exp Dec.24)
                  </span>
                </p>
              </div>
            </div>


            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={HKTImg}
                  alt="HKT"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">HKT</h4>
                <p className="text-sm">
                  Graduate Programme, Fintech
                  <br />
                  Jul.23 - Sept.23
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={ProMexImg}
                  alt="ProMEX"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">ProMEX</h4>
                <p className="text-sm">
                  Associate Business &amp; System Analytsis Intern
                  <br />
                  Feb.23 - Jun.23
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={KNImg}
                  alt="Kuehne+Nagel"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">Kuehne+Nagel</h4>
                <p className="text-sm">
                  Data Solution Intern
                  <br />
                  Jun.22 - Jul.22
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={MUImg}
                  alt="HKMU"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">HKMU</h4>
                <p className="text-sm">
                  Bachelor Hons BIA
                  <br />
                  Sept.21 - May.23
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={GovImg}
                  alt="Census and Statistics Department"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold font-mono">
                  Census and Statistics Department
                </h4>
                <p className="text-sm">
                  Enumerator
                  <br />
                  Jun.21 - Aug.21
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
                <Image
                  src={HKCCImg}
                  alt="PolyU HKCC"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h4 className="text-sm font-bold">PolyU HKCC</h4>
                <p className="text-sm">
                  A.D acct
                  <br />
                  Sept.19 - Jul.21
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Project section */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-zinc-800">My Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mt-12">
            {[...projects].splice(0, 7).map((project, projectIndex) => (
              <ProjectCard
                key={projectIndex}
                href={project.href}
                name={project.name}
                tag={project.tag}
                description={project.description}
                icon={project.icon}
                image={project.image} // Pass image here 
              />
            ))}
          </div>

        <div className="mt-7">
          <Link href="/projects">
            <Button>View My Ongoing Projects</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
