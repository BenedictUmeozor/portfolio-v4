import Container from "@/components/Container";
import Introduction from "@/components/Introduction";

import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Socials from "@/components/Socials";
import Technologies from "@/components/Technologies";

export default function Page() {
  return (
    <main className="max-h-screen max-w-[1800px] mx-auto">
      <Container className="md:h-screen md:grid grid-cols-2">
        <section className="md:h-screen py-[10%] px-4 md:py-[15%] md:pl-[15%] md:pr-[5%] md:flex flex-col justify-between">
          <Introduction />
          <Socials />
        </section>
        <section className="px-4 md:h-screen md:overflow-y-scroll pb-[15%] md:pl-[5%] md:pr-[15%]">
          <Projects />
          <Resume />
          <Technologies />
          <footer className="mt-12">
            <p className="text-xs text-faded_text max-md:text-center">
              Inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark_green"
              >
                Brittany Chiang
              </a>
            </p>
          </footer>
        </section>
      </Container>
    </main>
  );
}
