import { AtSign, Facebook, GitHub, Linkedin, Twitter } from "react-feather";

export default function Socials() {
  return (
    <div className="flex items-center gap-4 text-faded_text">
      <a
        href="https://www.linkedin.com/in/benedict-umeozor-014b70228/"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
        className="transition-all duration-200 ease-linear hover:scale-110"
      >
        <Linkedin className="w-8" />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="transition-all duration-200 ease-linear hover:scale-110"
      >
        <Facebook className="w-8" />
      </a>
      <a
        href="https://github.com/BenedictUmeozor"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        className="transition-all duration-200 ease-linear hover:scale-110"
      >
        <GitHub className="w-8" />
      </a>
      <a
        href="mailto:benedictumeozor@gmail.com"
        title="Email"
        className="transition-all duration-200 ease-linear hover:scale-110"
      >
        <AtSign className="w-8" />
      </a>
      <a
        href="https://www.twitter.com/dev_benedict"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        className="transition-all duration-200 ease-linear hover:scale-110"
      >
        <Twitter className="w-8" />
      </a>
    </div>
  );
}
