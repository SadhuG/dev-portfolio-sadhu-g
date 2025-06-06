import React from "react";
import CtaWrapper from "./cta-wrapper";

const Hero = () => {
  return (
    <section className="flex h-full items-center" aria-label="Introduction">
      <div>
        <div className="mb-8 w-full max-w-3xl">
          <h1 className="text-[40px] leading-[110%] font-medium tracking-[1px] sm:text-[84px]">
            I create websites that work with
            <br />
            <span className="font-accent">Design that Speaks</span>
          </h1>
          <p className="text-large-normal mt-6">
            <span className="mr-6" role="text">
              Hello! I&apos;m Sudhansh
            </span>
            <span role="text">a frontend dev.</span>
          </p>
        </div>
        <CtaWrapper />
      </div>
    </section>
  );
};

export default Hero;
