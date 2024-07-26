import { ArrowUpRight } from "react-feather";

export default function Experience() {
  return (
    <section>
      <div className="flex max-md:flex-col max-md:gap-1 items-baseline justify-between mb-8">
        <div className="flex-1 text-xs text-faded_text">2023 - PRESENT</div>
        <div className="flex-[3]">
          <h5 className=" text-light_green mb-2">
            Frontend developer -{" "}
            <a
              href="https://www.signalhire.com/companies/condueet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Condueet{" "}
              <ArrowUpRight className="w-4 text-light_green self-end" />
            </a>
          </h5>
          <p className="text-faded_text text-[0.85rem]">
            I contribute to a dynamic team, creating innovative web apps. With
            expertise in <span className="text-light_green">react</span>,
            I&apos;m involved in all stages, from idea to deployment.
            Collaborating closely with cross-functional teams, I translate
            client needs into scalable, user-centric solutions.
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:gap-1 items-baseline justify-between mb-8">
        <div className="flex-1 text-xs text-faded_text">2023 - PRESENT</div>
        <div className="flex-[3]">
          <h5 className=" text-light_green mb-2">
            Instructor -{" "}
            <a
              href="https://earlybrite.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Earlybrite{" "}
              <ArrowUpRight className="w-4 text-light_green self-end" />
            </a>
          </h5>
          <p className="text-faded_text text-[0.85rem]">
            I collaborate with fellow educators to teach students in schools.
            Together, we impart knowledge and skills in{" "}
            <span className="text-light_green">web development</span>, ensuring
            students receive a comprehensive learning experience.
          </p>
        </div>
      </div>
      <div className="flex max-md:flex-col max-md:gap-1 items-baseline justify-between ">
        <div className="flex-1 text-xs text-faded_text">2022 - 2023</div>
        <div className="flex-[3]">
          <h5 className=" text-light_green mb-2">
            Instructor - Smarthub Academy
          </h5>
          <p className="text-faded_text text-[0.85rem]">
            I worked together with other teachers to teach students about{" "}
            <span className="text-light_green">web development</span> in
            schools. We shared knowledge and skills to give the students a
            complete learning experience.
          </p>
        </div>
      </div>
    </section>
  );
}
