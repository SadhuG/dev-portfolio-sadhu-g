import devImage from "@/assets/dev-portrait.png";
import Image from "next/image";
import React from "react";
import SocialLinks from "./social-links";

const About = () => {
	return (
		<section>
			<div className="flex">
				<div>
					<p className="tagline mb-4">About me</p>
					<h2>
						Frontend Developer into{" "}
						<span className="font-accent">everything</span>
					</h2>
					<p className="text-xl leading-[160%] mt-6">
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
				<div className="w-full max-w-[450px] h-full max-h-[480px]">
					<Image
						src={devImage}
						alt={"developer image"}
						className="w-full h-auto rounded-3xl object-cover"
					/>
					<div className="flex p-6">
						<p>Hi, this is me but ghibli</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
