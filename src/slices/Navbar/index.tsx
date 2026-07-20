'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/rvs-logo.png"
            alt="RVS Sports Welfare Association"
            width={55}
            height={55}
            priority
          />

          <Link href="/">
            <div className="cursor-pointer leading-tight">
              <h1 className="text-lg font-bold text-gray-900 lg:text-xl">
                RVS Sports Welfare
              </h1>
              <p className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
                Association
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 text-base font-medium lg:flex">
          <Link
            href="/gallery"
            className="transition hover:text-orange-500"
          >
            Photo Gallery
          </Link>

          <Link
            href="/our-players"
            className="transition hover:text-orange-500"
          >
            Our Players
          </Link>

          <Link
            href="/our-training"
            className="transition hover:text-orange-500"
          >
            Our Training
          </Link>

          <Link
            href="/about"
            className="transition hover:text-orange-500"
          >
            About
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-md bg-orange-600 px-5 py-2 font-oswald uppercase text-white transition hover:bg-orange-700"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col py-4">

            <Link
              href="/gallery"
              className="px-6 py-3 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Photo Gallery
            </Link>

            <Link
              href="/our-players"
              className="px-6 py-3 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Our Players
            </Link>

            <Link
              href="/our-training"
              className="px-6 py-3 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Our Training
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div className="px-6 pt-4">
              <Link
                href="/contact"
                className="block rounded-md bg-orange-600 py-2 text-center font-oswald uppercase text-white transition hover:bg-orange-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;