"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-12 backdrop-blur-lg z-30 bg-white/5 relative flex justify-end items-center pr-16">
      <button
        className="z-50"
        onClick={() => {
          console.log("Hello there");
        }}
      >
        Click
      </button>
      <aside className="br-black/42 backdrop-blur-lg z-10 absolute top-0 right-0 h-screen flex flex-col w-auto items-end p-4 pt-16 pr-16">
        <section className="flex flex-col text-right items -end">
          <div>
            <h4>Professional Projects</h4>
          </div>
          <ul>
            <li>
              <Link href="#">Alexa Photos</Link>
              <span>ICON</span>
            </li>
            <li>
              <Link href="#">Alexa Photos</Link>
              <span>ICON</span>
            </li>
            <li>
              <Link href="#">Alexa Photos</Link>
              <span>ICON</span>
            </li>
            <li>
              <Link href="#">Alexa Photos</Link>
              <span>ICON</span>
            </li>
          </ul>
        </section>
        <section>
          <div>
            <h4>Professional Projects</h4>
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
        <section className="justify-self-end">
          <Link href="#">Download Resume</Link>
        </section>
      </aside>
    </nav>
  );
}
