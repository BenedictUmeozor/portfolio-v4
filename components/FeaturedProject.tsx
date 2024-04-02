import { ArrowUpRight, Link } from "react-feather";
import type { Project } from "./data";

type Props = {
  project: Project;
};
export default function FeaturedProject({ project }: Props) {
  return (
    <div
      style={{ background: "rgb(255, 255, 255, 0.05)" }}
      className="flex flex-col gap-3 mb-6 md:mb-5 p-4 px-6 rounded-sm  transition-all duration-200 ease-linear md:hover:scale-110 shadow-white"
    >
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-light_text font-bold flex items-center gap-2"
        >
          {project.title}{" "}
          <ArrowUpRight className="w-4 text-faded_text self-end" />
        </a>
      ) : (
        <h3 className="text-xl text-light_text font-bold"> {project.title}</h3>
      )}
      <p className="text-faded_text text-[0.9rem]">{project.description}</p>
      <a
        href={project.codeRepository}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light_text flex items-center gap-2"
      >
        <Link className="w-4 text-light_text text-[0.8rem]" /> Github
      </a>
      <div className="flex items-center gap-2 flex-wrap">
        {project.tools.map((tool) => (
          <p
            key={tool}
            style={{ background: "rgb(45, 212, 191, 0.1)" }}
            className="text-[0.7rem] text-light_green flex items-center justify-center  p-1 px-2 rounded-2xl"
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
