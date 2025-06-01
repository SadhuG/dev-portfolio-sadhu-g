import absStar from "@/assets/abstract-star.png";
import Image from "next/image";
import React from "react";
import CtaWrapper from "./cta-wrapper";

const Contact = () => {
	return (
		<section>
			<div className="flex justify-between">
				<div>
					<p className="tagline mb-4">connect</p>
					<h2>
						Have a Vision?
						<br />
						<span className="font-accent">Let’s make it happen</span>
					</h2>
					<p className="text-[26px] font-light leading-[160%] mt-6">
						Big or small, every great idea starts with a conversation.
					</p>
					<div className="mt-8">
						<CtaWrapper />
					</div>
					<p className="text-[26px] font-semibold leading-[160%] mt-6">
						Available for fulltime roles and freelance projects{" "}
					</p>
				</div>
				<div className="w-full max-w-[515px] h-full max-h-[515px] flex items-center justify-center">
					<Image
						src={absStar}
						alt={"abstract star image"}
						className="w-full h-full max-w-[350px] max-h-[373px] rounded-3xl object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Contact;
