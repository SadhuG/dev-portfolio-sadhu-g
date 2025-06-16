import { ContactLinks } from "@/info/contact-links";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  const socialLinks = Object.values(ContactLinks);

  return (
    <nav aria-label="Social media links">
      <ul className="flex gap-4" role="list">
        {socialLinks.map((item) => (
          <li key={item.name} role="listitem">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 transition-opacity duration-150 hover:opacity-100"
              aria-label={`Visit my ${item.name} profile`}
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                width={24}
                height={24}
              />
              <span className="sr-only">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
