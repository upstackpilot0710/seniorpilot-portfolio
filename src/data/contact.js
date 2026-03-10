import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactData = {
  phone: "+1 412-555-0123",
  email: "zacharyliscsak29@gmail.com",
  address: "Pittsburgh , Pennsylvania , USA",
  links: [
    {
      url: "https://github.com/ZacharyLiscsack",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/in/zachary-liscsack-123456789/",
      icon: FaLinkedin,
    },
    {
      url: "https://discordapp.com/users/zacharyliscsack#1234",
      icon: FaDiscord,
    },
    {
      url: "https://www.instagram.com/zacharyliscsack/",
      icon: FaInstagram,
    },
    {
      url: "https://twitter.com/zacharyliscsack",
      icon: FaXTwitter,
    },
  ],
};

export default ContactData;
