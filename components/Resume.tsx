import { ElementInView } from "@/utils/Element";
import Experience from "./Experience";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

export default function Resume() {
  return (
    <ElementInView hash="resume" className="pt-20">
      <h2 className="text-xs text-faded_text tracking-wider uppercase mb-4 max-md:font-bold">
        experience
      </h2>
      <div>
        <Experience />
      </div>
      <Link href="/resume.pdf" className="inline-flex mt-4 text-light_green gap-2 underline">
        View full resume <ArrowUpRight className="w-4" />
      </Link>
    </ElementInView>
  );
}
