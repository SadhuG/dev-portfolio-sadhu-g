import mailSend from "@/assets/icons/mail-send.svg";
import { Email } from "@/info/contact-links";
import { CircleArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./social-links";
import { Button } from "./ui/button";

const Footer = () => {
  const footerMenu = [
    { text: "Mission", href: "#mission" },
    { text: "Works", href: "#projects" },
    { text: "About", href: "#about" },
  ];

  return (
    <footer
      className="px-5 py-12 sm:p-16 lg:px-16 lg:py-20"
      aria-label="Footer"
    >
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="order-last lg:order-none">
          <p className="text-lg">© Sudhansh Singh 2025.</p>
        </div>
        <nav
          className="flex flex-col items-center lg:w-28 lg:items-end xl:w-56"
          aria-label="Footer navigation"
        >
          {footerMenu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-base/[160%] font-semibold"
              aria-label={`Go to ${item.text} section`}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <div className="space-y-2">
          <div>
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
                  className="h-6 w-6"
                />
                {Email}
              </Button>
            </Link>
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            <SocialLinks />
          </div>
        </div>
        <div>
          <Link href={"#navbar"} aria-label="Scroll back to top of page">
            <Button variant={"outlineSecondary"} size={"sm"}>
              Back to top
              <CircleArrowUp aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
