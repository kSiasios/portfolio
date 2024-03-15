"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCall, IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
// import Navbar from "./components/Navbar";
import Navbar from "@/app/components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProjectCard from "./components/ProjectCard";
import SideSection from "./components/SideSection";

import image from "@/app/assets/SideArrow.svg";
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
    <main className="bg-sky-500 sm:bg-sky-700 md:bg-sky-100 lg:bg-sky-300 xl:bg-sky-600 h-screen font-Montserrat">
      <Navbar />
      {/* <p>Hello there</p> */}
      <div className="flex flex-col md:flex-row w-full absolute top-0 left-0 h-max md:h-screen">
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
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="absolute w-full h-full bg-gradient-to-t from-[#303030] to-[#30303000]"></div>
          <div className="group-hover:flex group-hover:flex-col group-hover:gap-[40px] group-hover:animate-fadeIn hidden absolute w-full h-full backdrop-blur-xl bg-black/70 ps-16 pt-[25%] italic z-50">
            {/* My Info */}
            <section className="flex flex-col gap-1">
              <p className="font-thin">Hello! I'm</p>
              <h2 className="text-4xl font-semibold">Konstantinos Siasios</h2>
            </section>
            <section className="flex flex-col gap-1">
              <p className="font-thin">I am a junior</p>
              <h3 className="text-2xl font-light">Frontend Developer</h3>
            </section>
            <section className="flex flex-col gap-6">
              <p className="font-thin mb-6">
                My <span className="font-medium">skills</span> include
              </p>
              <div style={featheredSidesStyle}>
                {/* Skill carousel */}
                <Slider {...settings} className="flex gap-6">
                  <FaReact className="text-[50px]" />
                  <FaNode className="text-[50px]" />
                  <FaVuejs className="text-[50px]" />
                  <FaJs className="text-[50px]" />
                  <FaHtml5 className="text-[50px]" />
                  <FaCss3Alt className="text-[50px]" />
                  <FaPhp className="text-[50px]" />
                  <FaGit className="text-[50px]" />
                  <FaJava className="text-[50px]" />
                </Slider>
              </div>
            </section>
            <section className="">
              <p className="font-thin">
                You can find some of my projects{" "}
                <span className="relative hidden md:inline font-medium">
                  there!
                  <Image
                    aria-hidden="true"
                    alt=""
                    className="absolute left-0 max-w-none w-[700%] drop-shadow-md"
                    src={image}
                    width={1000}
                    height={1000}
                  />
                </span>
                <span className="inline md:hidden font-medium">below!</span>
              </p>
            </section>
            <section className="">
              <p className="font-thin">
                <span className="font-medium">Find me</span> on
              </p>
              <div className="flex gap-6 mt-6">
                {/* Social Media Links */}
                <Link
                  className="text-[50px] hover:text-black focus:text-black"
                  href="#"
                >
                  <IoLogoGithub />
                </Link>
                <Link className="text-[50px]" href="#">
                  <IoLogoLinkedin />
                </Link>
                <Link className="text-[50px]" href="#">
                  <IoMail />
                </Link>
                <Link className="text-[50px]" href="#">
                  <IoCall />
                </Link>
              </div>
            </section>
            <section className="">
              <Link className="underline" href="#">
                Download my resume now!
              </Link>
            </section>
          </div>
        </SideSection>
        <SideSection className="h-screen z-10">
          <ProjectCard gradientColor="red" />
          <ProjectCard gradientColor="orange" />
          <ProjectCard gradientColor="green" />
          <ProjectCard gradientColor="blue" />
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
