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
			<div className="w-[65%] mx-auto text-center ">
				<p className="tagline mb-4">Mission</p>
				<h2>
					Crafting Experiences that feel{" "}
					<span className="font-accent">effortless to use </span>
				</h2>
				<p className="text-xl leading-[160%] mt-6">
					Making the web more beautiful, one website at a time.{" "}
				</p>
			</div>
			<div className="mt-14 flex justify-between">
				{missionCards.map((card, index) => (
					<Card
						key={index}
						className="max-w-96 p-8 w-full gap-8"
					>
						<CardTitle>
							<h4>{card.title}</h4>
						</CardTitle>
						<CardContent>
							<ul>
								{card.points.map((point, index) => (
									<li key={index}>
										<div className="inline-flex gap-4">
											<Image
												src={card.icon}
												alt={"list icon"}
											/>
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
