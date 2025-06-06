import githubLogo from "@/assets/icons/github-logo.svg";
import linkedinLogo from "@/assets/icons/linkedIn-logo.svg";
import xLogo from "@/assets/icons/x-logo.svg";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  const socialLinks = [
    { text: "X (twitter)", icon: xLogo, href: "https://x.com/iamsudhug" },
    {
      text: "Linkedin",
      icon: linkedinLogo,
      href: "https://www.linkedin.com/in/sudhu-g/",
    },
    { text: "GitHub", icon: githubLogo, href: "https://github.com/SadhuG" },
  ];
  return (
    <div aria-label="Social media links">
      <ul className="flex gap-4" role="list">
        {socialLinks.map((item, index) => (
          <li key={index} role="listitem">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity duration-150 hover:opacity-100"
              aria-label={`Visit my ${item.text} profile`}
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
              />
              <span className="sr-only">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
