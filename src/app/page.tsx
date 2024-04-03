"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IoArrowDown,
  IoArrowForward,
  IoCall,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoSave,
} from "react-icons/io5";
// import Navbar from "./components/Navbar";
import Navbar from "@/app/components/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProjectCard from "./components/ProjectCard";
import SideSection from "./components/SideSection";

import {
  FaCss3Alt,
  FaGit,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPhp,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import BGDecoration from "./components/BGDecoration";
import ImageSlider from "./components/ImageSlider";
import projects from "./utils/project_data";

// let projects = require("@/app/assets/project_data.json");

export default function Home() {
  // console.log(projects);
  const featheredSidesStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 5rem, black calc(100% - 5rem), transparent)",
  };

  const projectsData = Object.values(projects);

  // projectsData.forEach((project) => {
  //   console.log(project);
  // });

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true, // To prevent pausing on hover
    arrows: false,
    cssEase: "linear",
  };
  return (
    <main className="h-screen font-Montserrat bg-gradient-to-br to-black from-zinc-900">
      <Navbar />
      <div className="w-full md:w-screen flex items-center justify-center absolute shadow-lg">
        <div className="max-w-screen-2xl flex flex-col md:flex-row w-full top-0 left-0 h-max md:h-screen">
          <SideSection
            useGrid={false}
            className="h-screen sm:h-full group overflow-x-hidden z-20 relative"
          >
            {/* <div
              aria-hidden
              className="group-hover:hidden group-focus-within:hidden pointer-events-none animate-ping flex justify-center items-center text-3xl absolute w-full h-full top-0 left-0 z-[9999]"
            >
              HOVER ME!
            </div> */}
            <div className="md:absolute w-full md:w-full h-full">
              <Image
                src="https://picsum.photos/200/300"
                width={1000}
                height={1000}
                alt="Image"
                className="w-full h-full object-cover"
              />
              {/* <Image
                src="/public_assets/portrait.jpg"
                width={1000}
                height={1000}
                alt="Image"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <div className="absolute w-full h-full bg-gradient-to-t from-[#303030] to-[#30303000]"></div>
            {/* <div className="overflow-x-hidden group-hover:flex group-hover:flex-col group-hover:gap-[40px] group-hover:animate-fadeIn hidden absolute w-full h-full backdrop-blur-xl bg-black/70 ps-8 xs:ps-16 pt-32 italic z-50"> */}
            <div
              className="
              overflow-y-hidden
            overflow-x-hidden opacity-0 
            group-hover:opacity-100 focus-within:opacity-100 group-hover:animate-fadeIn focus-within:animate-fadeIn 
            justify-center flex flex-col gap-4 xxs:gap-6 md:gap-[40px] absolute w-full h-full 
            backdrop-blur-xl bg-black/70 ps-4 xxs:ps-16 pt-16 xxs:pt-32 italic z-50"
            >
              {/* My Info */}
              <section className="flex flex-col gap-1">
                <p className="font-thin">Hello! I&apos;m</p>
                <h2 className="text-2xl sm:text-4xl font-semibold">
                  Konstantinos Siasios
                </h2>
              </section>
              <section className="flex flex-col gap-1">
                <p className="font-thin">I am a junior</p>
                <h3 className="text-xl sm:text-2xl font-light">
                  Frontend Developer
                </h3>
              </section>
              <section className="flex flex-col gap-3 xxs:gap-6">
                <p className="font-thin mb-6">
                  My <span className="font-medium">skills</span> include
                </p>
                <div style={featheredSidesStyle} className="overflow-hidden">
                  {/* Skill carousel */}
                  <ImageSlider>
                    {/* <Slider {...settings} className="flex gap-6"> */}
                    {/* <FaReact /> */}
                    <FaReact className="text-[30px] xs:text-[50px]" />
                    <FaNode className="text-[30px] xs:text-[50px]" />
                    <FaVuejs className="text-[30px] xs:text-[50px]" />
                    <FaJs className="text-[30px] xs:text-[50px]" />
                    <FaHtml5 className="text-[30px] xs:text-[50px]" />
                    <FaCss3Alt className="text-[30px] xs:text-[50px]" />
                    <FaPhp className="text-[30px] xs:text-[50px]" />
                    <FaGit className="text-[30px] xs:text-[50px]" />
                    <FaJava className="text-[30px] xs:text-[50px]" />
                    {/* </Slider> */}
                  </ImageSlider>
                </div>
              </section>
              <section className="relative">
                <p className="font-thin relative">
                  You can find some of my projects{" "}
                  <span className="relative md:inline-flex md:justify-center md:items-center md:gap-1 hidden font-medium">
                    there!
                    {/* <Image
                      aria-hidden="true"
                      alt="Arrow pointing to the side"
                      className="absolute left-0 top-[100%] max-w-none w-[700%] drop-shadow-md"
                      src={arrowSide}
                      width={1000}
                      height={1000}
                    /> */}
                    {/* <IoArrowDown className="drop-shadow-md -rotate-90 animate-bounce" /> */}
                    <IoArrowForward className="drop-shadow-md animate-bounceSide" />
                  </span>
                  <span className="relative inline-flex justify-center items-center gap-1 md:hidden font-medium">
                    <Link href="#projects" className="hover:underline">
                      below!
                    </Link>
                    {/* <Image
                      aria-hidden="true"
                      alt="Arrow pointing below"
                      className="absolute left-0 top-[100%] max-w-none w-[140%] drop-shadow-md"
                      src={arrowBelow}
                      width={1000}
                      height={1000}
                    /> */}
                    <IoArrowDown className="animate-bounce" />
                  </span>
                </p>
              </section>
              <section className="z-10">
                <p className="font-thin">
                  <span className="font-medium">Find me</span> on
                </p>
                <div className="flex gap-6 mt-6 flex-wrap">
                  {/* Social Media Links */}
                  <Link
                    className="text-[30px] xs:text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoLogoGithub />
                  </Link>
                  <Link
                    className="text-[30px] xs:text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoLogoLinkedin />
                  </Link>
                  <Link
                    className="text-[30px] xs:text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoMail />
                  </Link>
                  <Link
                    className="text-[30px] xs:text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoCall />
                  </Link>
                </div>
              </section>
              <section className="inline-flex items-center gap-1">
                <Link
                  target="_blank"
                  download="Konstantinos Siasios - Resume"
                  href="./public_assets/resume/Konstantinos Siasios - Resume.pdf"
                  className="underline text-sm xxs:text-base"
                >
                  Download my resume now!{" "}
                </Link>
                <div>
                  <IoSave className="absolute animate-ping" />
                  <IoSave />
                </div>
              </section>
            </div>
          </SideSection>
          <SideSection id="projects" className="h-screen z-10" useGrid={true}>
            {projectsData &&
              projectsData.map((project) => (
                <ProjectCard
                  preferedColor={project["prefered-color"]}
                  coverImage={project["cover-image"]}
                  projectName={project.name}
                  description={project.description}
                  projectLink={project["project-link"]}
                />
              ))}
            {projectsData && projectsData.length % 2 != 0 && (
              // <div className="">

              <Link
                className="flex flex-col justify-center items-center hover:underline focus:underline"
                href="./public_assets/resume/Konstantinos Siasios - Resume.pdf"
              >
                <div>
                  <IoSave className="absolute animate-ping" />
                  <IoSave />
                </div>
                <p>Download my resume</p>
              </Link>
              // </div>
            )}
          </SideSection>
        </div>
      </div>
      <BGDecoration />
    </main>
  );
}
