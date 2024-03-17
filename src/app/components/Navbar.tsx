"use client";

import logo from "@/app/assets/SVGs/Signature.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isInteractable, setIsInteractable] = useState(false);

  const toggleMenu = () => {
    console.log(`Is nav open? ${navIsOpen}`);
    if (navIsOpen != isInteractable) {
      setIsInteractable(navIsOpen);
      return;
    }
    if (!navIsOpen) {
      // setIsInteractable(!isInteractable);
      setTimeout(() => setNavIsOpen(!navIsOpen), 10);
      setTimeout(() => setIsInteractable(!isInteractable), 0);
    } else {
      setTimeout(() => setNavIsOpen(!navIsOpen), 0);
      setTimeout(() => setIsInteractable(!isInteractable), 300);
    }
  };

  return (
    <div>
      <nav className="w-full shadow-md shadow-[inset_0_-1px_rgba(255,255,255,.15)] h-28 backdrop-blur-lg z-50 bg-black/30 fixed flex justify-end items-center pr-8 xs:pr-16">
        <Image
          src={logo}
          alt="logo"
          className=" h-[calc(100%-4rem)] sm:h-[calc(100%-2rem)] w-auto absolute left-0 xs:left-1/2 translate-x-[1rem] xs:translate-x-[-50%]"
        />
        <button
          className={`${
            navIsOpen
              ? "after:rotate-45 after:translate-y-[0px] before:rotate-[-45deg] before:translate-y-[0px]"
              : ""
          } flex items-center justify-center 
          after:translate-y-[-5px] after:transition-rotate after:duration-200 after:ease-in-out after:content-[' '] after:absolute after:h-0.5 after:w-10 after:bg-white
          before:translate-y-[5px] before:transition-rotate before:duration-200 before:ease-in-out before:content-[' '] before:absolute before:h-0.5 before:w-10 before:bg-white
          p-6 relative z-50`}
          onClick={toggleMenu}
        ></button>
      </nav>
      <aside
        className={`${navIsOpen ? "translate-x-[-100%]" : "pointer-events-none"}
        ${isInteractable ? "block" : "hidden"}
        left-[100%] transition-right duration-200 ease-in-out italic shadow-[inset_0_0_0_2px_rgba(255,255,255,.15)] bg-black/45 backdrop-blur-lg z-40 fixed top-0 h-screen flex flex-col w-auto items-end p-4 pt-44 pl-16 pr-16 gap-14 text-sm sm:text-base`}
      >
        <section className="flex flex-col text-right items-end gap-6">
          <div>
            <h4 className="text-[1.2rem] sm:text-[2rem] font-bold text-wrap sm:text-nowrap">
              Professional Projects
            </h4>
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                className={`hover:underline flex gap-1 justify-end items-center ${
                  navIsOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
                href="#1"
              >
                Alexa Photos
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#2"
              >
                Brunis Apartments
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#3"
              >
                U Jacka
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#4"
              >
                Nefeli's Rooms
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-col text-right items-end gap-6">
          <div>
            <h4 className="text-[1.2rem] sm:text-[2rem] font-bold text-wrap sm:text-nowrap">
              Other Projects
            </h4>
          </div>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#5"
              >
                Orthopaignia
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#6"
              >
                Dating4Pets
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#7"
              >
                Mechtopia
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline flex gap-1 justify-end items-center"
                href="#8"
              >
                LoopoKrator
                <span className="inline-flex">
                  <LuExternalLink />
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="hover:opacity-100 opacity-70 justify-self-end underline absolute bottom-[1.5rem]">
          <Link href="#9" className="inline-flex gap-1 items-center">
            Download Resume <IoArrowDown className="animate-bounce" />
          </Link>
        </section>
      </aside>
      <div
        onClick={toggleMenu}
        aria-hidden="true"
        className={`${
          navIsOpen ? "block" : "hidden"
        } fixed top-0 right-0 w-screen h-screen z-30`}
      ></div>
    </div>
  );
}
