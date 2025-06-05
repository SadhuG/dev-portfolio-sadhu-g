import mailSend from "@/assets/icons/mail-send.svg";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
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
    >
      <div className="flex w-full items-center justify-between">
        <div className="z-60">
          <Image src={logo} alt={"logo"} />
          <span className="hidden">SadhuG</span>
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navMenu.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Link
            href={"mailto:hello@sadhug.in"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size={"tertiary"} variant={"tertiary"}>
              <Image src={mailSend} alt={"mail send icon"} />
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
