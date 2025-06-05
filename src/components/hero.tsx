import React from "react";
import CtaWrapper from "./cta-wrapper";

const Hero = () => {
  return (
    <section className="flex h-full items-center">
      <div>
        <div className="mb-8 w-full max-w-3xl">
          <h1>
            I create websites that work with <br />
            <span className="font-accent">Design that Speaks</span>
          </h1>
          <p className="text-large-normal mt-6">
            <span className="mr-6">Hello! I’m Sudhansh</span>
            <span>a frontend dev.</span>
          </p>
        </div>
        <CtaWrapper />
      </div>
    </section>
  );
};

export default Hero;
