import devImage from "@/assets/dev-portrait.png";
import Image from "next/image";
import React from "react";
import SocialLinks from "./social-links";

const About = () => {
  return (
    <section id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-[1fr_450px] xl:gap-20">
        <div className="h-full">
          <p className="tagline mb-4">About me</p>

          <h2>
            Frontend Developer into{" "}
            <span className="font-accent">everything</span>
          </h2>

          <p className="text-medium-normal mt-6">
            I'm Sudhansh a tinkerer turned builder. Currently building frontend
            (secretly full-stack) experiences that are a treat to use. I enjoy
            turning complex ideas into clean, lovely interfaces making web
            easier to use.
            <br />
            <br />
            Building from scratch or redefining existing products, I focus on
            crafting experiences your users remember, paying attention to
            detail, staying in-sync with modern tools. I believe great design
            and engineering go hand-in-hand .I’m always excited to learn
            something new and solving problems along the way.{" "}
          </p>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="mx-auto flex h-full w-full flex-col gap-1">
          <div className="h-full max-h-[480px] w-full max-w-[450px] flex-1">
            <Image
              src={devImage}
              alt={"developer image"}
              className="h-auto w-full rounded-3xl object-cover"
            />
          </div>

          <div className="px-6">
            <p>Hi, this is me but ghibli</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
