import React from "react";
import CtaWrapper from "./cta-wrapper";

const Hero = () => {
	return (
		<section className="h-full flex items-center">
			<div>
				<div className="w-[65%] mb-8">
					<h1>
						I create websites that work with <br />
						<span className="font-accent">Design that Speaks</span>
					</h1>
					<p className="text-[26px] leading-[160%] mt-6">
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
