import absStar from "@/assets/abstract-star.png";
import Image from "next/image";
import React from "react";
import CtaWrapper from "./cta-wrapper";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-label="Contact Me"
      className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-20"
    >
      <div>
        <p className="tagline mb-4" aria-hidden="true">
          connect
        </p>
        <h2>
          Have a Vision?{" "}
          <span className="font-accent">Let's make it happen</span>
        </h2>
        <p className="text-large-light mt-4">
          Big or small, every great idea starts with a conversation.
        </p>
        <div className="mt-8">
          <CtaWrapper />
        </div>
        <p className="text-large-semibold mt-8" role="status">
          Available for fulltime roles and freelance projects
        </p>
      </div>
      <div className="flex h-full max-h-[515px] w-full max-w-[515px] items-center justify-center sm:mx-auto xl:mx-0">
        <div className="animate-[spin_20s_linear_infinite]" aria-hidden="true">
          <Image
            src={absStar}
            alt=""
            className="h-[235px] max-h-[373px] w-[220px] max-w-[350px] rounded-3xl object-cover sm:h-full sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
