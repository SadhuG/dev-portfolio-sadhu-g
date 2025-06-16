import mailSend from "@/assets/icons/mail-send.svg";
import xLogo from "@/assets/icons/x-logo.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyMailButton from "./copy-mail-button";
import SocialLinks from "./social-links";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const CtaWrapper = () => {
  const contactInfo = [
    {
      name: "Email",
      icon: mailSend,
      link: "mailto:hello@sadhug.in",
      contactInfo: "hello@sadhug.in",
      text: "Send me an email directly",
      bg: "bg-linear-to-r from-[#DB94EB]/50 to-[#000000]",
    },
    {
      name: "X (Twitter)",
      icon: xLogo,
      link: "https://x.com/iamsudhug",
      contactInfo: "@iamsudhug",
      text: "Let's have a conversation",
      bg: "bg-linear-to-r from-[#A1C3FA]/50 to-[#000000]",
    },
  ];

  return (
    <Drawer>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
        <div>
          <DrawerTrigger asChild>
            <Button
              variant={"outline"}
              className="group relative gap-3 overflow-hidden"
              aria-label="Open contact options drawer"
            >
              <span className="group-hover:text-background relative z-10 transition-colors duration-500 ease-in-out">
                Lets build together
              </span>
              <div className="bg-foreground relative z-10 size-4 rounded-full">
                <ArrowUpRight className="text-background" aria-hidden="true" />
              </div>
              <div
                className="bg-foreground absolute top-1/2 right-6 size-4 -translate-y-1/2 rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[15]"
                aria-hidden="true"
              ></div>
            </Button>
          </DrawerTrigger>
        </div>

        <div>
          <CopyMailButton />
        </div>
      </div>

      <DrawerContent className="mx-auto w-full max-w-2xl border-none px-8 pb-12">
        <div
          className="mx-auto flex w-full flex-col items-center justify-center gap-6"
          role="dialog"
          aria-label="Contact options"
        >
          <DrawerHeader className="items-center gap-2">
            <DrawerTitle>
              <h2 className="text-xl leading-[120%] font-medium tracking-[1px] sm:text-[32px]">
                Let's build Amazing
              </h2>
            </DrawerTitle>

            <SocialLinks />
          </DrawerHeader>

          <div
            className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row"
            role="list"
          >
            {/* contact */}
            {contactInfo.map((item, index) => (
              <div key={index} className="w-full" role="listitem">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  aria-label={`${item.name}: ${item.text}`}
                >
                  <div className="flex w-full flex-col overflow-hidden rounded-3xl border border-[#cccccc]">
                    <div
                      className={`flex items-center gap-2 px-6 ${item.bg} pt-6 pb-4`}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                      <p className="text-medium-medium">{item.name}</p>
                    </div>
                    <div
                      className="h-[1px] w-full bg-[#cccccc]"
                      role="presentation"
                    ></div>
                    <div className="flex flex-col gap-2 px-6 pt-4 pb-6">
                      <p className="text-regular-medium">{item.contactInfo}</p>
                      <p className="text-small-light">{item.text}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default CtaWrapper;
