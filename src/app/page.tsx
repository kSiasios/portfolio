import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SideSection from "./components/SideSection";

export default function Home() {
  return (
    <main className="bg-sky-500 sm:bg-sky-700 md:bg-sky-100 lg:bg-sky-300 xl:bg-sky-600 h-screen font-Montserrat">
      <Navbar />
      {/* <p>Hello there</p> */}
      <div className="flex flex-col sm:flex-row w-full absolute top-0 left-0 h-auto sm:h-screen">
        <SideSection className="h-full">
          <div className="absolute w-full h-full">
            <Image
              src="https://picsum.photos/200/300"
              width={1000}
              height={1000}
              alt="Image"
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-[#303030] to-[#30303000]"></div>
          <div className="absolute w-full h-full backdrop-blur-xl bg-black/70 ps-16 pt-[25%] italic ">
            {/* My Info */}
            <section className="">
              <p className="font-thin">Hello! I'm</p>
              <h2 className="text-4xl font-semibold">Konstantinos Siasios</h2>
            </section>
            <section className="">
              <p className="font-thin">I am a junior</p>
              <h3 className="text-2xl font-light">Frontend Developer</h3>
            </section>
            <section className="">
              <p className="font-thin">
                My <span className="font-medium">skills</span> include
              </p>
              <div>{/* Skill carousel */}</div>
            </section>
            <section className="">
              <p className="font-thin">
                You can find some of my projects{" "}
                <span className="hidden sm:inline font-medium">there!</span>
                <span className="inline sm:hidden font-medium">below!</span>
              </p>
              <div>{/* Arrow SVG that point */}</div>
            </section>
            <section className="">
              <p className="font-thin">
                <span className="font-medium">Find me</span> on
              </p>
              <div>{/* Social Media Links */}</div>
            </section>
            <section className="">
              <Link className="underline" href="#">
                Download my resume now!
              </Link>
            </section>
          </div>
        </SideSection>
        <SideSection>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          {/* <Image
            src="https://picsum.photos/200/300"
            width={1000}
            height={1000}
            alt="Image"
            className="w-full h-full bg-cover"
          />
          <Image
            src="https://picsum.photos/200/300"
            width={1000}
            height={1000}
            alt="Image"
            className="w-full h-full bg-cover"
          />
          <Image
            src="https://picsum.photos/200/300"
            width={1000}
            height={1000}
            alt="Image"
            className="w-full h-full bg-cover"
          />
          <Image
            src="https://picsum.photos/200/300"
            width={1000}
            height={1000}
            alt="Image"
            className="w-full h-full bg-cover"
          /> */}
        </SideSection>
      </div>
    </main>
  );
}
