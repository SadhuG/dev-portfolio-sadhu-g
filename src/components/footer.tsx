import mailSend from "@/assets/icons/mail-send.svg";
import { CircleArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./social-links";
import { Button } from "./ui/button";

const Footer = () => {
  const footerMenu = [
    { text: "Mission", href: "#" },
    { text: "Works", href: "#" },
    { text: "About", href: "#" },
  ];

  return (
    <footer className="px-5 py-12 sm:p-16 lg:px-16 lg:py-20">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="order-last lg:order-none">
          <span className="text-lg">© Sudhansh Singh 2025.</span>
        </div>
        <div className="flex flex-col items-center lg:w-28 lg:items-end xl:w-56">
          {footerMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-base/[160%] font-semibold"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          <div>
            <Link href={"mailto:hello@sadhug.in"} target="_blank">
              <Button size={"tertiary"} variant={"tertiary"}>
                <Image src={mailSend} alt={"mail send icon"} />
                hello@sadhug.in
              </Button>
            </Link>
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            <SocialLinks />
          </div>
        </div>
        <div>
          <Button variant={"outlineSecondary"} size={"sm"}>
            Back to top
            <CircleArrowUp />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
