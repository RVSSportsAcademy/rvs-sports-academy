'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white border-b-2 border-gray-300 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/rvs-logo.png" alt="RVS Sports Academy Logo" width={50} height={50} />
        <Link href="/"><h1 className="text-2xl font-bold">RVS Sports Academy</h1></Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="items-center hidden space-x-6 text-lg font-medium lg:flex">
        <Link href="/gallery" className="hover:text-orange-500">Photo Gallery</Link>
        <Link href="/our-players" className="hover:text-orange-500">Our Players</Link>
        <Link href="/our-training" className="hover:text-orange-500">Our Training</Link>
        <Link href="/about" className="hover:text-orange-500">About</Link>
      </nav>

      {/* Contact Us Button */}
      <div className="hidden lg:block">
        <Link href="/contact" className="px-4 py-2 bg-orange-600 text-white font-oswald uppercase rounded-md hover:bg-orange-700">Contact Us</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full py-4 space-y-4 bg-white border-b-2 border-gray-300 shadow-lg top-16 lg:hidden">
          <Link href="/gallery" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Photo Gallery</Link>
          <Link href="/our-players" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Our Players</Link>
          <Link href="/our-training" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>Our Training</Link>
          <Link href="/about" className="hover:text-orange-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="px-4 py-2 bg-orange-600 font-oswald uppercase text-white rounded-md hover:bg-orange-700" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
