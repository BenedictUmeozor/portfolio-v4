import Image from "next/image";

type Props = {
  title: string;
  images: { title: string; image: string; link: string }[];
};

export default function Technology({ images, title }: Props) {
  return (
    <div className="flex max-md:flex-col max-md:gap-2 items-start gap-4 justify-between mb-8 md:mb-4">
      <div className="flex-1">
        <p className="text-faded_text text-[0.8rem] uppercase">{title}</p>
      </div>
      <div className="flex-[3] grid grid-cols-5 md:grid-cols-4 gap-3">
        {images.map((image) => (
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferer"
            style={{ background: "rgb(255, 255, 255, 0.05)" }}
            key={image.title}
            className="flex items-center justify-center w-16 h-16 rounded-sm cursor-pointer transition-all duration-200 ease-linear hover:scale-105"
            title={image.title}
          >
            <Image
              src={image.image}
              alt={image.title}
              height={100}
              width={100}
              className="w-8"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
