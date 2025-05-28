import githubLogo from "@/assets/icons/github-logo.svg";
import linkedinLogo from "@/assets/icons/linkedIn-logo.svg";
import xLogo from "@/assets/icons/x-logo.svg";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
	const socialLinks = [
		{ text: "X (twitter)", icon: xLogo, href: "#" },
		{ text: "Linkedin", icon: linkedinLogo, href: "#" },
		{ text: "GitHub", icon: githubLogo, href: "#" },
	];
	return (
		<div className="flex gap-4">
			{socialLinks.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className="opacity-80 hover:opacity-100 transition-opacity duration-150 "
				>
					<Image
						src={item.icon}
						alt={item.text}
					/>
					<span className="hidden">{item.text}</span>
				</Link>
			))}
		</div>
	);
};

export default SocialLinks;
