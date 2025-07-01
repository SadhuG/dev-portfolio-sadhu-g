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

// image import
import Development from "@/assets/icons/development.svg";
import Figma from "@/assets/icons/figma.svg";
import Formspree from "@/assets/icons/formspree.png";
import Framer from "@/assets/icons/framer_dark.svg";
import githubLogoOutline from "@/assets/icons/github-outline-logo.svg";
import NextJs from "@/assets/icons/nextjs_icon_dark.svg";
import Pen from "@/assets/icons/pen.svg";
import PencilRuler from "@/assets/icons/pencil-ruler.svg";
import ThreeJs from "@/assets/icons/threejs-dark.svg";
import TypeScript from "@/assets/icons/typescript.svg";
import Vercel from "@/assets/icons/vercel_dark.svg";
import Zod from "@/assets/icons/zod.svg";
import octorealPage from "@/assets/octoreal-landing-page.png";
import devPortfolio from "@/assets/sadhug-dev-portfolio.png";
import vdsPage from "@/assets/vds-landing-page.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projectsDisplayed = [
    {
      title: "Octoreal",
      color: `#e200ff`,
      description:
        "Octoreal is a bold design and development agency crafting high-performance, visually striking websites that captivate users, reflect brands, and drive real business results.",
      keyPoints: [
        "Designed and built a high-impact landing page for a creative agency.",
        "Developed a clear brand story with custom visuals and bold typography.",
        "Implemented a interactive header background using three.js.",
      ],
      image: octorealPage,
      githubLink: null,
      liveLink: "https://octoreal.com/",
      skills: [
        { icon: PencilRuler, name: "Design" },
        { icon: Development, name: "Development" },
      ],
      techStack: [
        { icon: Figma, name: "Figma" },
        { icon: NextJs, name: "Next.js" },
        { icon: TypeScript, name: "Typescript" },
        { icon: ThreeJs, name: "Three.js" },
        { icon: Zod, name: "Zod" },
        { icon: Formspree, name: "Formspree" },
      ],
    },
    {
      title: "Vanshita Design Studio",
      color: `#00d5be`,
      description:
        "Vanshita Design Studio is a boutique interior design brand with a refined, minimalist landing page showcasing curated projects, services, and a personalized client inquiry experience.",
      keyPoints: [
        "Elegant, modern website for a luxury interior design studio.",
        "Developed using Framer it's built on no-code platform for easy updates.",
        "Clean and minimal design that showcases projects, services, and brand personality clearly.",
      ],
      image: vdsPage,
      githubLink: null,
      liveLink: "https://vds.framer.website/",
      skills: [
        { icon: Pen, name: "Branding" },
        { icon: PencilRuler, name: "Design" },
        { icon: Development, name: "Development" },
      ],
      techStack: [
        { icon: Figma, name: "Figma" },
        { icon: Framer, name: "Framer" },
      ],
    },
    {
      title: "Developer Portfolio",
      color: `#51e9fc`,
      description:
        "Frontend developer crafting sleek, user-focused websites with modern tech. My landing page blends design and code to showcase projects, attract clients, and build trust instantly.",
      keyPoints: [
        "Clean, modern design that reflects professionalism and trust.",
        "Mobile-friendly layout that works perfectly on all devices.",
        "Showcases my best work to help you decide fast.",
        "Built to convert — guiding visitors to contact or hire easily.",
      ],
      image: devPortfolio,
      githubLink: "#",
      liveLink: "#",
      skills: [
        { icon: Pen, name: "Branding" },
        { icon: PencilRuler, name: "Design" },
        { icon: Development, name: "Development" },
      ],
      techStack: [
        { icon: Figma, name: "Figma" },
        { icon: NextJs, name: "Next.js" },
        { icon: TypeScript, name: "Typescript" },
        { icon: Vercel, name: "Vercel" },
      ],
    },
  ];

  return (
    <section id="projects" aria-label="Projects">
      <div className="mx-auto w-full max-w-5xl lg:text-center">
        <p className="tagline mb-3 sm:mb-4" aria-hidden="true">
          Curated Projects
        </p>
        <h2>
          Built for the <span className="font-accent">spotlight</span>
        </h2>
      </div>

      <div
        className="mt-12 space-y-14 sm:mt-20 sm:space-y-16"
        role="list"
        aria-label="Project list"
      >
        {projectsDisplayed.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col gap-4 text-lg sm:gap-12 xl:flex-row xl:gap-14 2xl:gap-16"
            role="listitem"
          >
            <div className="bg-card h-full max-h-[500px] w-full max-w-[600px] rounded-4xl border p-2 max-xl:mx-auto">
              <div className="flex h-full max-h-[234px] w-full items-end justify-center overflow-hidden rounded-3xl bg-linear-to-b from-gray-300 to-white px-6 pt-10 sm:max-h-[464px] sm:px-10 sm:pt-20 md:max-h-[484px]">
                <div className="mt-10 max-h-[400px] max-w-[500px] overflow-hidden rounded-t-xl sm:mt-20">
                  <Image
                    src={project.image}
                    alt={`Screenshot or preview of ${project.title}`}
                    className="h-full w-full max-w-[500px]"
                  />
                </div>
              </div>
            </div>
            <div className="lg:flex lg:items-center">
              <div className="lg:flex lg:gap-2">
                <div
                  className="hidden h-full w-5 py-[22px] lg:flex"
                  aria-hidden="true"
                >
                  <div
                    className="h-1 w-5 rounded-full"
                    style={{ backgroundColor: project.color }}
                    role="presentation"
                  ></div>
                </div>
                <div>
                  <CardHeader className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <CardTitle>
                      <h3>{project.title}</h3>
                    </CardTitle>

                    <CardAction className="flex flex-row-reverse gap-4 sm:flex-row">
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <Button variant={"tertiary"} size={"icon"}>
                            <Image
                              src={githubLogoOutline}
                              alt=""
                              width={24}
                              height={24}
                              className="group-hover:opacity-80"
                              aria-hidden="true"
                            />
                            <span className="sr-only">GitHub</span>
                          </Button>
                        </Link>
                      )}

                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <Button variant={"outlineSecondary"} className="gap-3">
                          Check it out
                          <div className="size-4">
                            <ArrowUpRight
                              className="text-foreground"
                              aria-hidden="true"
                            />
                          </div>
                        </Button>
                      </Link>
                    </CardAction>
                  </CardHeader>

                  <CardContent className="text-regular-normal mt-3 w-full">
                    <p>{project.description}</p>
                    <ul
                      className="mt-3 space-y-2"
                      aria-label={`Key features of ${project.title}`}
                    >
                      {project.keyPoints.map((point, index) => (
                        <li key={index}>
                          <div className="inline-flex gap-4">
                            <div className="size-6">
                              <SharpSparkle
                                width={24}
                                height={24}
                                style={{ color: project.color }}
                                aria-hidden="true"
                              />
                            </div>

                            <span>{point}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="mt-4 flex-col items-start gap-2">
                    <div
                      className="flex flex-wrap gap-2"
                      role="group"
                      aria-label="Skills used"
                    >
                      {project.skills.map((skill, index) => (
                        <Tag key={index}>
                          <TagContent>
                            <TagIcon className="hidden size-6 sm:block">
                              <Image
                                src={skill.icon}
                                alt=""
                                width={24}
                                height={24}
                                aria-hidden="true"
                              />
                            </TagIcon>
                            <TagName>{skill.name}</TagName>
                          </TagContent>
                        </Tag>
                      ))}
                    </div>
                    <div
                      className="flex flex-wrap gap-2"
                      role="group"
                      aria-label="Technologies used"
                    >
                      {project.techStack.map((tech, index) => (
                        <Tag key={index}>
                          <TagContent>
                            <TagIcon className="hidden size-6 h-6 items-center justify-center sm:flex">
                              <Image
                                src={tech.icon}
                                alt=""
                                width={24}
                                height={24}
                                aria-hidden="true"
                                className="max-h-6 max-w-6"
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
