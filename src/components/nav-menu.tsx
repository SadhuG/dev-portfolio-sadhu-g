"use client";

import mailSend from "@/assets/icons/mail-send.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const navMenu = [
  { text: "Mission", href: "#" },
  { text: "Works", href: "#" },
  { text: "About", href: "#" },
  { text: "Contact", href: "#" },
];

const NavMenu = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`fixed inset-0 z-40 h-screen transform ${
        isOpen ? "w-screen -translate-x-0" : "translate-x-full"
      } bg-background transition-transform duration-500 ease-out`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4 px-5 py-16">
        <div className="flex h-full w-full items-center justify-end">
          <ul className="flex flex-col items-end gap-4">
            {navMenu.map((item, index) => (
              <Link key={index} href={item.href}>
                <li className="text-4xl font-medium">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col items-end">
          <span className="text-large-light">Let’s Chat!</span>
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
      </div>
    </div>
  );
};

export default NavMenu;
