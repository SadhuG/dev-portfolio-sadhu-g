import mailSend from "@/assets/icons/mail-send.svg";
import { CircleArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
	const footerMenu = [
		{ text: "Mission", href: "#" },
		{ text: "Works", href: "#" },
		{ text: "About", href: "#" },
	];
	return (
		<footer>
			<div className="flex justify-between">
				<div>
					<span>© Sudhansh Singh 2025.</span>
				</div>
				<div className="flex flex-col ">
					{footerMenu.map((item, index) => (
						<Link
							key={index}
							href={item.href}
						>
							{item.text}
						</Link>
					))}
				</div>
				<div>
					<Button
						size={"tertiary"}
						variant={"tertiary"}
					>
						<Image
							src={mailSend}
							alt={"mail send icon"}
						/>
						hello@sadhug.in
					</Button>
				</div>
				<div>
					<Button
						variant={"outline"}
						size={"sm"}
					>
						Back to top
						<CircleArrowUp />
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
