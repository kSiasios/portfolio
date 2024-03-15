"use client";

import logo from "@/app/assets/Signature.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-md shadow-[inset_0_-1px_rgba(255,255,255,.15)] h-28 backdrop-blur-lg z-40 bg-black/30 relative flex justify-end items-center pr-16">
        <Image
          src={logo}
          alt="logo"
          className="h-[calc(100%-2rem)] w-auto absolute left-1/2 translate-x-[-50%]"
        />
        <button
          className={`${
            navIsOpen ? "after:rotate-45 before:rotate-[-45deg]" : ""
          } flex items-center justify-center after:transition-rotate after:duration-300 after:ease-in-out before:transition-rotate before:duration-300 before:ease-in-out p-4 relative z-50 after:content-[' '] after:absolute after:h-2 after:w-10 after:bg-white before:content-[' '] before:absolute before:h-2 before:w-10 before:bg-white`}
          onClick={() => {
            console.log(`Is nav open? ${navIsOpen}`);
            setNavIsOpen(!navIsOpen);
          }}
        ></button>
      </nav>
      <aside
        className={`${
          navIsOpen
            ? "left-[100%] translate-x-[-100%]"
            : "left-[100%] pointer-events-none"
        } transition-right duration-300 ease-in-out italic shadow-[inset_0_0_0_2px_rgba(255,255,255,.15)] bg-black/45 backdrop-blur-lg z-30 fixed top-0 h-screen flex flex-col w-auto items-end p-4 pt-44 pl-16 pr-16 gap-14 text-sm sm:text-base`}
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
                className="hover:underline flex gap-1 justify-end items-center"
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
          <Link href="#" className="inline-flex gap-1 items-center">
            Download Resume <IoArrowDown className="animate-bounce" />
          </Link>
        </section>
      </aside>
    </div>
  );
}
