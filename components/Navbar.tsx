"use client";
import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, User, Menu, X } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-20 py-5 md:py-7 bg-white relative z-50">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide">
        <Image
          src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/intervue.svg"
          alt="Logo"
          height={150}
          width={150}
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-gray-800 text-base font-normal">
        <Link
          href="#"
          className="flex flex-row items-center gap-2 hover:text-slate-900 hover:scale-105 transition-all font-medium"
        >
          <User size={16} className="fill-black" />
          <span className="flex flex-row">
            Become an Interviewer <ArrowUpRight className="ml-0.5" />
          </span>
        </Link>

        <Link href="#" className="hover:text-blue-700 transition-colors">
          Features
        </Link>

        <Link href="#" className="hover:text-blue-700 transition-colors">
          Pricing
        </Link>

        <Link href="#" className="hover:text-blue-700 transition-colors">
          Start a trial
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="px-4 py-1.5 border border-black text-black hover:bg-gray-50 transition"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-4 py-1.5 bg-black text-white hover:bg-gray-900 transition"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col p-5 gap-4 md:hidden animate-slideDown">
          <Link
            href="#"
            className="flex items-center gap-2 font-medium hover:text-blue-700"
          >
            <User size={16} className="fill-black" />
            Become an Interviewer
          </Link>
          <Link href="#" className="hover:text-blue-700">
            Features
          </Link>
          <Link href="#" className="hover:text-blue-700">
            Pricing
          </Link>
          <Link href="#" className="hover:text-blue-700">
            Start a trial
          </Link>
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="#"
              className="px-4 py-1.5 text-center border border-black text-black hover:bg-gray-50 transition"
            >
              Login
            </Link>
            <Link
              href="#"
              className="px-4 py-1.5 text-center bg-black text-white hover:bg-gray-900 transition"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
