import SwivelImg from "@/images/swivel.jpg";
import PolyUImg from "@/images/PolyU.jpg";
import HKTImg from "@/images/hkt.jpg";
import ProMexImg from "@/images/ProMEX.jpg";
import KNImg from "@/images/kn.jpg";
import MUImg from "@/images/mu.jpg";
import GovImg from "@/images/gov.jpg";
import HKCCImg from "@/images/hkcc.jpg";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Experience",
};

export default function AboutPage() {
  return (
        <div className="mt-6 space-y-7 text-base text-zinc-600 font-light">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                  Software Developer in LLMs &amp; ML
                  <br />
                  Dec.23 - Present
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
                  Sep.23 - Exp Dec.24
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
  );
}