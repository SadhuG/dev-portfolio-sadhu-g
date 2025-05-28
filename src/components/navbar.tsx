import mailSend from "@/assets/icons/mail-send.svg";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
	const navMenu = [
		{ text: "Mission", href: "#" },
		{ text: "Works", href: "#" },
		{ text: "About", href: "#" },
	];
	return (
		<nav className="h-[72px]">
			<div className="flex items-center justify-between ">
				<div>
					<Image
						src={logo}
						alt={"logo"}
					/>
				</div>
				<div className="flex items-center gap-8">
					{navMenu.map((item, index) => (
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
			</div>
		</nav>
	);
};

export default Navbar;
