import { ElementInView } from "@/utils/Element";
import { featured, projects } from "./data";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  return (
    <ElementInView hash="projects" className="pt-[15%]">
      <div>
        <h2 className="text-xs text-faded_text tracking-wider uppercase mb-6 md:mb-4 max-md:font-bold">
          featured
        </h2>
        <div>
          {featured.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="mt-10 md:mt-6">
        <h2 className="text-xs text-faded_text tracking-wider uppercase mb-6 md:mb-4 max-md:font-bold">
          others
        </h2>
        <div>
          {projects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </ElementInView>
  );
}
