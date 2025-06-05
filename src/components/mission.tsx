import cubeTransparent from "@/assets/icons/cube-transparent.svg";
import pen from "@/assets/icons/pen.svg";
import sparkleSharp from "@/assets/icons/sparkel-sharp.svg";
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

const Mission = () => {
  const missionCards = [
    {
      title: "What I Create",
      icon: sparkleSharp,
      points: [
        "Brand Design Kit",
        "Web & Mobile Design",
        "Frontend Development",
        "Full Stack Development",
      ],
    },
    {
      title: "How I Create",
      icon: pen,
      points: ["Figma", "Custom Code", "Framer", "Webflow"],
    },
    {
      title: "What I Delivers",
      icon: cubeTransparent,
      points: [
        "Experience that Users Love",
        "Products aligned to your goals",
        "Design easy to scale",
        "Code easy to manage",
      ],
    },
  ];

  return (
    <section>
      <div className="mx-auto w-full max-w-5xl lg:text-center">
        <p className="tagline mb-3 sm:mb-4">Mission</p>
        <h2>
          Crafting Experiences that feel
          <br />
          <span className="font-accent">effortless to use </span>
        </h2>
        <p className="text-medium-normal mt-4 sm:mt-6">
          Making the web more beautiful, one website at a time.{" "}
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:mt-14 sm:gap-8 lg:flex-row lg:flex-wrap lg:justify-around lg:gap-12 xl:flex-nowrap xl:justify-between">
        {missionCards.map((card, index) => (
          <Card
            key={index}
            className="w-full max-w-96 gap-4 p-4 sm:gap-8 sm:p-8"
          >
            <CardTitle>
              <h3>{card.title}</h3>
            </CardTitle>
            <CardContent>
              <ul className="space-y-2 sm:space-y-4">
                {card.points.map((point, index) => (
                  <li key={index}>
                    <div className="text-regular-normal inline-flex gap-4">
                      <Image src={card.icon} alt={"list icon"} />
                      {point}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Mission;
