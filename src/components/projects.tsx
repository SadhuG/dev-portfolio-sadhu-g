import githubLogoOutline from "@/assets/icons/github-outline-logo.svg";
import pen from "@/assets/icons/pen.svg";
import placeholderImage from "@/assets/placeholder-image.png";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import SharpSparkle from "./raw-icons/sharp-sparkle";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tag, TagContent, TagIcon, TagName } from "./ui/tag";

const Projects = () => {
  const projectsDisplayed = [
    {
      title: "Project name ",
      color: `#FF6868`,
      description:
        "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It’s built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
      keyPoints: [
        "Brand Design Kit",
        "Web & Mobile Design",
        "Frontend Development",
        "Full Stack Development",
      ],
      image: placeholderImage,
      githubLink: "#",
      liveLink: "#",
      skills: [
        { icon: pen, name: "Tag1" },
        { icon: pen, name: "Tag2" },
        { icon: pen, name: "Tag3" },
      ],
      techStack: [
        { icon: pen, name: "Tag1" },
        { icon: pen, name: "Tag2" },
        { icon: pen, name: "Tag3" },
        { icon: pen, name: "Tag4" },
        { icon: pen, name: "Tag5" },
      ],
    },
  ];

  return (
    <section>
      <div className="mx-auto w-full max-w-5xl lg:text-center">
        <p className="tagline mb-3 sm:mb-4">Curated Projects</p>
        <h2>
          Built for the <span className="font-accent">spotlight</span>
        </h2>
      </div>

      <div className="mt-12 space-y-14 sm:mt-20 sm:space-y-16">
        {projectsDisplayed.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col gap-4 text-lg sm:gap-12 xl:flex-row xl:gap-14 2xl:gap-16"
          >
            <div className="group bg-card h-full max-h-[500px] w-full max-w-[600px] rounded-4xl border p-2 max-xl:mx-auto">
              <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-3xl bg-red-300 px-6 pt-10 sm:px-10 sm:pt-20">
                <Image
                  src={project.image}
                  alt={"project demo image"}
                  className="h-full max-h-[400px] w-full max-w-[500px] transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="lg:flex lg:items-center">
              <div className="lg:flex lg:gap-2">
                <div className="hidden h-full w-5 py-[22px] lg:flex">
                  <div
                    className="h-1 w-5 rounded-full"
                    style={{ backgroundColor: project.color }}
                  ></div>
                </div>
                <div>
                  <CardHeader className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <CardTitle>
                      <h3>{project.title}</h3>
                    </CardTitle>

                    <CardAction className="flex flex-row-reverse gap-4 sm:flex-row">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Button variant={"tertiary"} size={"icon"}>
                          <Image
                            src={githubLogoOutline}
                            alt="GitHub Logo"
                            width={24}
                            height={24}
                            className="group-hover:opacity-80"
                          />
                          <span className="hidden">github</span>
                        </Button>
                      </Link>
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant={"outlineSecondary"} className="gap-3">
                          Check it out
                          <div className="size-4">
                            <ArrowUpRight className="text-foreground" />
                          </div>
                        </Button>
                      </Link>
                    </CardAction>
                  </CardHeader>

                  <CardContent className="text-regular-normal mt-3 w-full">
                    <p>{project.description}</p>
                    <ul className="mt-3 space-y-2">
                      {project.keyPoints.map((point, index) => (
                        <li key={index}>
                          <div className="inline-flex gap-4">
                            <SharpSparkle style={{ color: project.color }} />
                            <span>{point}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="mt-4 flex-col items-start gap-2">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <Tag key={index}>
                          <TagContent>
                            <TagIcon className="hidden sm:block">
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={24}
                                height={24}
                              />
                            </TagIcon>
                            <TagName>{skill.name}</TagName>
                          </TagContent>
                        </Tag>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Tag key={index}>
                          <TagContent>
                            <TagIcon className="hidden sm:block">
                              <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={24}
                                height={24}
                              />
                            </TagIcon>
                            <TagName>{tech.name}</TagName>
                          </TagContent>
                        </Tag>
                      ))}
                    </div>
                  </CardFooter>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
