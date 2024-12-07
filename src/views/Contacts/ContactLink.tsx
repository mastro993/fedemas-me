import { ContactItem } from "./types";

type ContactLinkProps = {
  contact: ContactItem;
};

const ContactLink = ({ contact }: ContactLinkProps) => {
  console.log(`bg-[${contact.color}]`);
  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      className={`
        px-4 py-2
        font-semibold text-white
        inline-flex items-center space-x-2
        rounded-md
        hover:shadow-xl hover:scale-105
        duration-500 transform transition
      `}
      style={{ backgroundColor: contact.color }}
    >
      <contact.icon />
      <span>{contact.label}</span>
    </a>
  );
};

export default ContactLink;
