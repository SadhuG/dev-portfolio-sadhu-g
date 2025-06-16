import mailSend from "@/assets/icons/mail-send.svg";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClientMenuWrapper from "./client-menu-wrapper";
import { Button } from "./ui/button";

const Navbar = () => {
  const navMenu = [
    { text: "Mission", href: "#mission" },
    { text: "Works", href: "#projects" },
    { text: "About", href: "#about" },
  ];

  return (
    <nav
      id="navbar"
      className="flex h-[72px] items-center-safe justify-center-safe pr-3 pl-5 sm:px-12 lg:px-14 xl:px-16"
      aria-label="Main navigation"
    >
      <div className="flex w-full items-center justify-between">
        <div className="z-60">
          <Link href="/" aria-label="SadhuG - Back to homepage">
            <Image src={logo} alt="" aria-hidden="true" />
            <span className="sr-only">SadhuG</span>
          </Link>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8" role="list">
          {navMenu.map((item, index) => (
            <div key={index} role="listitem">
              <Link
                href={item.href}
                className="transition-all duration-900 hover:underline hover:underline-offset-4"
                aria-label={`Go to ${item.text} section`}
              >
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link
            href={"mailto:hello@sadhug.in"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to hello@sadhug.in"
          >
            <Button size={"tertiary"} variant={"tertiary"}>
              <Image
                src={mailSend}
                alt=""
                aria-hidden="true"
                role="presentation"
                className="h-6 w-6"
              />
              hello@sadhug.in
            </Button>
          </Link>
        </div>

        {/* mobile menu */}
        <ClientMenuWrapper />
      </div>
    </nav>
  );
};

export default Navbar;
