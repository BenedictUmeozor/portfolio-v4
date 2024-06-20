import { v4 as uuidV4 } from "uuid";

export type Project = {
  id: string;
  title: string;
  description: string;
  liveUrl: string | null;
  codeRepository: string;
  tools: string[];
};

export const featured: Project[] = [
  {
    id: uuidV4(),
    title: "Pendueet",
    description:
      "Pendueet allows users to effortlessly manage their pension funds, investments, and savings in one secure platform, with robust security measures and an intuitive user interface to simplify financial planning and promote a worry-free retirement experience",
    codeRepository: "https://github.com/OnePlug-API/pendueet-frontend",
    liveUrl: "http://pendueet.condueet.co/",
    tools: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS", "Axios"],
  },
  {
    id: uuidV4(),
    title: "EasyMart",
    description:
      "EasyMart offers a seamless shopping experience with a curated range of products. Find your next favorite item effortlessly with our intuitive interface. Start your online shopping journey",
    liveUrl: "https://easymart-wheat.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/EasyMart",
    tools: ["Next.js", "Next-auth", "TypeScript", "Mongoose", "TaiwindCSS"],
  },
  {
    id: uuidV4(),
    title: "Movie Empire",
    description:
      "Discover a vast library of films with Movie Empire, your go-to app for finding the next cinematic adventure. Explore blockbusters and hidden gems at your fingertips. Experience the thrill of discovery with Movie Empire",
    liveUrl: "https://movie-empire.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/Movie-Empire",
    tools: ["Next.js", "Next-auth", "TypeScript", "TailwindCSS"],
  },
  {
    id: uuidV4(),
    title: "Bridge",
    description: "A payment solution app I built with a team in a hackathon",
    liveUrl: "https://bridge-self.vercel.app",
    codeRepository: "https://github.com/BenedictUmeozor/Bridge",
    tools: ["React", "TypeScript", "TailwindCSS", "Axios"],
  },
];

export const projects: Project[] = [
  {
    id: uuidV4(),
    title: "News Updates",
    description:
      "Stay informed effortlessly with our news website! Get the latest headlines and breaking stories from around the world, all at your fingertips. Stay ahead and stay connected with our dynamic platform.",
    liveUrl: "https://news-website-wheat-eight.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/News-Website",
    tools: ["React.js", "TypeScript", "Axios", "TailwindCSS"],
  },
  {
    id: uuidV4(),
    title: "Rest Countries",
    description:
      "Discover the world effortlessly! This web application provides instant, in-depth country insights for curious explorers and global enthusiasts",
    liveUrl: "https://rest-countries-ten-blond.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/Rest-Countries",
    tools: ["React", "Tailwind CSS", "Framer motion"],
  },
  {
    id: uuidV4(),
    title: "ThoughtForum - v1",
    description:
      "An interactive Q&A web application that enables users to ask, answer, like questions, and follow others for a rich knowledge-sharing experience",
    liveUrl: "https://thought-forum.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/ThoughtForum-frontend-",
    tools: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Axios",
      "Material UI",
      "Sass",
    ],
  },
  {
    id: uuidV4(),
    title: "ThoughtForum - v2",
    description:
      "Enhanced Q&A Web App: An interactive platform for asking, answering, and connecting with like-minded learners and experts.",
    liveUrl: "https://thoughtforum-v2.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/thoughtforum-v2",
    tools: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Socket.io",
      "Axios",
      "Material UI",
      "Sass",
    ],
  },
  {
    id: uuidV4(),
    title: "Task manager",
    description:
      "A powerful web application designed to streamline your daily tasks. Create, edit, and delete tasks effortlessly, while organizing them by category for maximum productivity.",
    liveUrl: "https://task-manager-ten-lac.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/Task-Manager",
    tools: ["React", "Tailwind CSS", "Context API", "React Router"],
  },
  {
    id: uuidV4(),
    title: "GetLinked",
    description:
      "A UI challenge by getlinked.ai. The challenge involves designing an intuitive and user-friendly interface, optimizing user interactions, and ensuring a delightful user experience.",
    liveUrl: "https://get-linked-nine.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/getLinked",
    tools: ["React", "React Router", "TypeScript", "SAAS"],
  },
  {
    id: uuidV4(),
    title: "Simple Temperature Converter",
    description:
      "A temperature conversion tool that allows you to seamlessly switch between Fahrenheit, Celsius, and Kelvin. Effortlessly convert temperatures with precision and ease. Built as part of an assignment in a bootcamp",
    liveUrl: "https://simple-temperature-converter-gules.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/Temperature-Converter",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: uuidV4(),
    title: "ThoughtForum (backend)",
    description:
      "The API that powers the interactive Q&A web app, managing user interactions, questions, answers, and notifications for a seamless knowledge-sharing experience.",
    liveUrl: null,
    codeRepository: "https://github.com/BenedictUmeozor/ThoughtForum-backend-",
    tools: ["Node.js", "Express", "Mongoose", "Socket.io"],
  },
  {
    id: uuidV4(),
    title: "Benedict Umeozor",
    description:
      "My portfolio website showcases my creative journey, featuring a diverse range of projects that reflect my skills, passions, and dedication",
    liveUrl: "https://benedictumeozor.vercel.app/",
    codeRepository: "https://github.com/BenedictUmeozor/Portfolio",
    tools: ["Next.js", "TypeScript", "Tailwind"],
  },
];
