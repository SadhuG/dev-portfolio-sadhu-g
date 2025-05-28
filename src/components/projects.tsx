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
			<div className="w-[65%] mx-auto text-center ">
				<p className="tagline mb-4">Curated Projects</p>
				<h2>
					Built for the <span className="font-accent">spotlight</span>
				</h2>
			</div>

			<div className="w-full mt-20">
				{projectsDisplayed.map((project, index) => (
					<Card
						key={index}
						className="flex flex-row text-lg gap-16"
					>
						<div className="w-full group max-w-[600px] h-full bg-card max-h-[500px] aspect-square p-2 border rounded-4xl">
							<div className="w-full h-full flex bg-red-300 rounded-3xl justify-center items-end overflow-hidden">
								<Image
									src={project.image}
									alt={"project demo image"}
									className="group-hover:scale-105 transition-transform duration-300 ease-in-out max-w-[500px] max-h-[400px] "
								/>
							</div>
						</div>
						<div className="flex  items-center">
							<div className="flex gap-2">
								<div className="flex w-5 h-full py-[22px]">
									<div
										className="w-5 h-1 rounded-full"
										style={{ backgroundColor: project.color }}
									></div>
								</div>
								<div>
									<CardHeader>
										<CardTitle>
											<h3>{project.title}</h3>
										</CardTitle>

										<CardAction className="flex gap-4">
											<Link
												href={project.githubLink}
												className="group"
											>
												<Button
													variant={"tertiary"}
													size={"icon"}
												>
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
											<Link href={project.liveLink}>
												<Button
													variant={"outlineSecondary"}
													className="gap-3"
												>
													Check it out
													<div className="size-4">
														<ArrowUpRight className="text-foreground" />
													</div>
												</Button>
											</Link>
										</CardAction>
									</CardHeader>
									<CardContent>
										<p>{project.description}</p>
										<ul>
											{project.keyPoints.map((point, index) => (
												<li key={index}>
													<div className="inline-flex">
														<SharpSparkle style={{ color: project.color }} />
														<span>{point}</span>
													</div>
												</li>
											))}
										</ul>
									</CardContent>
									<CardFooter className="flex-col items-start gap-2 mt-4">
										<div className="flex gap-2">
											{project.skills.map((skill, index) => (
												<Tag key={index}>
													<TagContent>
														<TagIcon>
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
										<div className="flex gap-2">
											{project.techStack.map((tech, index) => (
												<Tag key={index}>
													<TagContent>
														<TagIcon>
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
