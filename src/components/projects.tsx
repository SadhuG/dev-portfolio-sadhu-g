import Link from "next/link";
import React from "react";
import SharpSparkle from "./raw-icons/sharp-sparkle";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

// image import
import githubLogoOutline from "@/assets/github-outline-logo.svg";
import OmJewellersPage from "@/assets/om-jewellers-header.jpg";
import TatvaPage from "@/assets/tatva-header.jpg";
import WorkNestPage from "@/assets/worknest-header.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  const projectsDisplayed = [
    {
      title: "Tatva Creative",
      color: `#D5DADD`,
      description:
        "Transformed Tatva Digital, a high-end agency, with a brand-led website redesign. Focused on 'First Principles' and a 'Made in India for the World' ethos, delivering a sophisticated digital presence.",
      keyPoints: [
        "Developed unique brand identity and translated it into a premium website aesthetic.",
        "Crafted intuitive UX/UI, detailed wireframes, and conversion-optimized content.",
        "Defined a sophisticated visual language (colors, typography, AI image prompts) for a global audience.",
        "Showcased strategic expertise through bespoke case studies and thought leadership.",
      ],
      image: TatvaPage,
      githubLink: "https://github.com/SadhuG/tatva-creative-studio",
      liveLink: "https://tatva-creative-studio.vercel.app/",
    },
    {
      title: "Om Jewellers",
      color: "#99804C",
      description:
        "Om Jewellers is a premium jewelry brand website celebrating 23 years of timeless craftsmanship, trust, and elegance. The project highlights their diverse collections, customer-centric philosophy, and strong local presence, blending tradition with modern digital engagement.",

      keyPoints: [
        "Designed a brand-focused landing page showcasing 10+ jewelry categories including rings, earrings, and mangalsutras.",
        "Integrated customer engagement features like WhatsApp subscription for exclusive offers.",
        "Optimized layout for responsiveness and accessibility to enhance user experience.",
        "Developed contact and showroom details to drive offline conversions and local trust.",
      ],

      image: OmJewellersPage,
      liveLink: "https://www.omjewellersjdp.com/",
    },
    {
      title: "WorkNest",
      color: `#51e9fc`,
      description:
        "WorkNest is a B2B SaaS platform that helps remote teams automate workflows, streamline collaboration, and scale operations effortlessly — all without technical complexity.",
      keyPoints: [
        "Designed a conversion-optimized landing page targeting HR, Ops, and CTO decision-makers.",
        "Crafted a clear value proposition with benefit-driven copy and modular grid layout.",
        "Built 'How It Works' onboarding section with 3-step flow for clarity.",
        "Highlighted key integrations (Slack, Asana, Google Drive) to build trust and relevance.",
        "Incorporated social proof with testimonials and integration badges to boost conversions.",
      ],
      image: WorkNestPage,
      githubLink: "https://github.com/SadhuG/work-nest-landing-page",
      liveLink: "https://work-nest-landing-page.vercel.app/",
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
              <div className="max-h-[500px] max-w-[600px] overflow-hidden rounded-3xl">
                <Image
                  src={project.image}
                  alt={`Screenshot or preview of ${project.title}`}
                  quality={100}
                  className="h-full w-full max-w-[600px]"
                />
              </div>
            </div>

            <div className="mx-auto max-w-[616px] lg:flex lg:items-center">
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
