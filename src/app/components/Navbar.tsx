"use client";

export default function Navbar() {
  return (
    <nav className="h-12 backdrop-blur-lg z-50 bg-white/5 relative flex justify-end items-center pr-4">
      <button
        onClick={() => {
          console.log("Hello there");
        }}
      >
        Click
      </button>
    </nav>
  );
}
