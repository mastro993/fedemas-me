import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiStackOverflowFill,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Section } from "../../components/Section";
import ContactLink from "./ContactLink";
import { ContactItem } from "./types";

const contactItems: ReadonlyArray<ContactItem> = [
  { label: "GitHub", color: "#333", href: "https://github.com/mastro993", icon: RiGithubFill },
  { label: "LinkedIn", color: "#0077b5", href: "https://www.linkedin.com/in/fedemas/", icon: RiLinkedinFill },
  {
    label: "StackOverflow",
    color: "#f48024",
    href: "https://stackoverflow.com/users/5372892/federico-mastrini?tab=profile",
    icon: RiStackOverflowFill,
  },
  { label: "Telegram", color: "#0088cc", href: "https://t.me/ehzeta", icon: RiTelegramFill },
  { label: "Facebook", color: "#1877f2", href: "https://www.facebook.com/fedemas993/", icon: RiFacebookFill },
  { label: "Twitter", color: "#1da1f2", href: "https://twitter.com/0xfedemas", icon: RiTwitterFill },
  { label: "Instagram", color: "#c13584", href: "https://www.instagram.com/0xfedemas__/", icon: RiInstagramFill },
];

const Contacts = () => {
  return (
    <Section title="Connect with me" subtitle="You're really curious, aren't you? 👀">
      <div className="flex mt-8 flex-wrap md:gap-4 gap-2">
        {contactItems.map((contact) => (
          <ContactLink key={contact.label} contact={contact} />
        ))}
      </div>
    </Section>
  );
};

export { Contacts };
