"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/data";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import { RemoveScroll } from "react-remove-scroll";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 bg-primaryClr w-full py-5 text-white z-40">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={95}
            height={50}
            priority
          />
        </Link>

        {/* Mobile Menu */}
        <RemoveScroll enabled={isOpen}>
          <nav
            className={`lg:hidden fixed top-0 left-0 bg-white h-screen w-full text-black flex justify-center flex-col  items-center  transition-transform ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {/* List */}
            <ul className="space-y-7 text-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`text-xl font-semibold link ${
                      pathname === item.href ? "after:!w-full" : ""
                    }`}
                    onClick={handleClick}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Btn */}
            <Link
              href={"/contact"}
              className="primary-btn mt-10 text-lg"
              onClick={handleClick}
            >
              Contact
            </Link>
          </nav>
        </RemoveScroll>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {/* List */}
          <ul className="flex gap-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`uppercase font-semibold link after:!bg-secondaryClr hover:text-secondaryClr ${
                  pathname === item.href
                    ? "after:!w-full text-secondaryClr"
                    : ""
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Btn */}
          <Link href={"/contact"} className="primary-btn">
            Contact
          </Link>
        </nav>
        {/* Menu Btn */}
        <button
          className="lg:hidden relative top-0 right-0 bg-secondaryClr rounded-full text-black h-12 w-12 flex items-center justify-center active:bg-secondaryClr/90 p-1.5"
          onClick={handleClick}
        >
          {isOpen ? <RiCloseFill size={30} /> : <RiMenuFill size={30} />}
        </button>
      </div>
    </header>
  );
}
