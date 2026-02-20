"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between items-center border-b border-gray-800">
      
      <h1 className="text-xl font-bold tracking-wider bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        ANSI-X Global Tech Academy
      </h1>

      <div className="hidden md:flex gap-8 text-sm">
        <Link href="/">Home</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex gap-4">
        <Link href="/login" className="border border-gray-600 px-4 py-1 rounded">
          Login
        </Link>
        <Link
          href="/register"
          className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
        >
          Enroll Now
        </Link>
      </div>

    </nav>
  );
}
