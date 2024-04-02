"use client";

import useHash from "@/hooks/useHast";
import Link from "next/link";

export default function Links() {
  const hash = useHash();

  return (
    <div className="hidden md:block">
      <Link href="#projects" className="link flex items-center gap-4 mb-3">
        <div
          className={
            " h-[1px] rounded " +
            (hash === "" || hash === "projects"
              ? "w-24 bg-light_text"
              : "w-14 bg-faded_text")
          }
        ></div>
        <span
          className={
            " text-xs uppercase tracking-widest " +
            (hash === "" || hash === "projects"
              ? "text-light_text"
              : "text-faded_text")
          }
        >
          Projects
        </span>
      </Link>
      <Link href="#resume" className="link flex items-center gap-4 mb-3">
        <div
          className={
            " h-[1px] rounded " +
            (hash === "resume" ? "w-24 bg-light_text" : "w-14 bg-faded_text")
          }
        ></div>
        <span
          className={
            " text-xs uppercase tracking-widest " +
            (hash === "resume" ? "text-light_text" : "text-faded_text")
          }
        >
          Resume
        </span>
      </Link>
      <Link href="#skills" className="link flex items-center gap-4">
        <div
          className={
            " h-[1px] rounded " +
            (hash === "skills" ? "w-24 bg-light_text" : "w-14 bg-faded_text")
          }
        ></div>
        <span
          className={
            " text-xs uppercase tracking-widest " +
            (hash === "skills" ? "text-light_text" : "text-faded_text")
          }
        >
          Skills
        </span>
      </Link>
    </div>
  );
}
