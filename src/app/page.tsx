"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IoArrowDown,
  IoCall,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
} from "react-icons/io5";
// import Navbar from "./components/Navbar";
import Navbar from "@/app/components/Navbar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProjectCard from "./components/ProjectCard";
import SideSection from "./components/SideSection";

import arrowBelow from "@/app/assets/SVGs/DownArrow.svg";
import arrowSide from "@/app/assets/SVGs/SideArrow.svg";
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
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  const featheredSidesStyle = {
    maskImage:
      "linear-gradient(to right, transparent, black 5rem, black calc(100% - 5rem), transparent)",
  };

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
      <div className="md:w-screen flex items-center justify-center absolute shadow-lg">
        <div className="max-w-screen-2xl flex flex-col md:flex-row w-full top-0 left-0 h-max md:h-screen">
          <SideSection
            useGrid={false}
            className="h-full group overflow-x-visible z-20 h-screen"
          >
            <div className="md:absolute w-full md:w-full h-full">
              <Image
                src="https://picsum.photos/200/300"
                width={1000}
                height={1000}
                alt="Image"
                className="w-full h-full object-cover"
              />
              {/* <Image
              src={portraitPicture}
              width={1000}
              height={1000}
              alt="Image"
              className="w-full h-full object-cover"
            /> */}
            </div>
            <div className="absolute w-full h-full bg-gradient-to-t from-[#303030] to-[#30303000]"></div>
            {/* <div className="overflow-x-hidden group-hover:flex group-hover:flex-col group-hover:gap-[40px] group-hover:animate-fadeIn hidden absolute w-full h-full backdrop-blur-xl bg-black/70 ps-8 xs:ps-16 pt-32 italic z-50"> */}
            <div className="overflow-x-hidden opacity-0 group-hover:opacity-100 focus-within:opacity-100 flex flex-col gap-[40px] group-hover:animate-fadeIn focus-within:animate-fadeIn absolute w-full h-full backdrop-blur-xl bg-black/70 ps-8 xs:ps-16 pt-32 italic z-50">
              {/* My Info */}
              <section className="flex flex-col gap-1">
                <p className="font-thin">Hello! I'm</p>
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
              <section className="flex flex-col gap-6">
                <p className="font-thin mb-6">
                  My <span className="font-medium">skills</span> include
                </p>
                <div style={featheredSidesStyle} className="overflow-hidden">
                  {/* Skill carousel */}
                  <ImageSlider>
                    {/* <Slider {...settings} className="flex gap-6"> */}
                    {/* <FaReact /> */}
                    <FaReact className="text-[50px]" />
                    <FaNode className="text-[50px]" />
                    <FaVuejs className="text-[50px]" />
                    <FaJs className="text-[50px]" />
                    <FaHtml5 className="text-[50px]" />
                    <FaCss3Alt className="text-[50px]" />
                    <FaPhp className="text-[50px]" />
                    <FaGit className="text-[50px]" />
                    <FaJava className="text-[50px]" />
                    {/* </Slider> */}
                  </ImageSlider>
                </div>
              </section>
              <section className="relative">
                <p className="font-thin">
                  You can find some of my projects{" "}
                  <span className="relative hidden md:inline font-medium z-[9999]">
                    there!
                    <Image
                      aria-hidden="true"
                      alt="Arrow pointing to the side"
                      className="z-[9999] absolute left-0 top-[100%] max-w-none w-[700%] drop-shadow-md"
                      src={arrowSide}
                      width={1000}
                      height={1000}
                    />
                  </span>
                  <span className="relative inline md:hidden font-medium">
                    <Link href="#projects">below!</Link>
                    <Image
                      aria-hidden="true"
                      alt="Arrow pointing below"
                      className="z-0 absolute left-0 top-[100%] max-w-none w-[140%] drop-shadow-md"
                      src={arrowBelow}
                      width={1000}
                      height={1000}
                    />
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
                    className="text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoLogoGithub />
                  </Link>
                  <Link
                    className="text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoLogoLinkedin />
                  </Link>
                  <Link
                    className="text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoMail />
                  </Link>
                  <Link
                    className="text-[50px] hover:text-white/50 focus:text-white/50"
                    href="#"
                  >
                    <IoCall />
                  </Link>
                </div>
              </section>
              <section className="">
                <Link
                  className="underline inline-flex items-center gap-1"
                  href="#"
                >
                  Download my resume now!{" "}
                  <IoArrowDown className="animate-bounce" />
                </Link>
              </section>
            </div>
          </SideSection>
          <SideSection id="projects" className="h-screen z-10">
            <ProjectCard gradientColor="red" />
            <ProjectCard gradientColor="orange" />
            <ProjectCard gradientColor="green" />
            <ProjectCard gradientColor="blue" />
          </SideSection>
        </div>
      </div>
      <div aria-hidden className="opacity-55">
        <div className="w-96 h-96 rounded-full blur-[200px] fixed left-0 top-0 bg-[#A68FFF] opacity-50"></div>
        <div className="w-52 h-52 blur-[200px] fixed left-0 top-0 bg-[#50CAFF] opacity-75"></div>
        <div className="w-24 h-24 rounded blur-[200px] fixed left-0 top-0 bg-[#50FFC0]"></div>
        {/* <div className="w-52 h-52 rounded-full blur-[200px] fixed right-0 top-0 bg-[#FFCC7E]"></div> */}
        <div className="w-96 h-52 rounded-full blur-[100px] fixed right-0 bottom-0 bg-[#DB75FF] opacity-50"></div>
        <div className="w-52 h-96 blur-[100px] fixed right-0 bottom-0 bg-[#FF7EB4] opacity-70"></div>
        <div className="w-72 h-80 rounded blur-[200px] fixed right-0 bottom-0 bg-[#FF7575] opacity-60"></div>
      </div>
    </main>
  );
}
