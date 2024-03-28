import Links from "./Links";

export default function Introduction() {
  return (
    <>
      <div>
        <h1 className=" text-light_text text-3xl md:text-5xl mb-3 font-bold">
          Benedict Umeozor
        </h1>
        <h3 className="text-light_text text-xl md:text-2xl font-semibold mb-4">
          Frontend Engineer
        </h3>
        <p className="text-faded_text mb-16">
          I&apos;m a frontend developer passionate about crafting immersive
          interactive experiences with modern web technologies.
        </p>
        <Links />
      </div>
    </>
  );
}
