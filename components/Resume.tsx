import { ElementInView } from "@/utils/Element";
import Experience from "./Experience";

export default function Resume() {
  return (
    <ElementInView hash="resume" className="pt-20">
      <h2 className="text-xs text-faded_text tracking-wider uppercase mb-4 max-md:font-bold">
        experience
      </h2>
      <div>
        <Experience />
      </div>
    </ElementInView>
  );
}
