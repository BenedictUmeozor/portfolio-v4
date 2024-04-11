import html from "@/assets/html-1.svg";
import css from "@/assets/css-3.svg";
import javascript from "@/assets/logo-javascript.svg";
import typescript from "@/assets/typescript.svg";
import php from "@/assets/php-1.svg";
import next from "@/assets/nextjs-2.svg";
import laravel from "@/assets/laravel-2.svg";
import express from "@/assets/express-109.svg";
import tailwind from "@/assets/tailwind-css-2.svg";
import react from "@/assets/react-2.svg";
import mongodb from "@/assets/mongodb-icon-1.svg";
import redux from "@/assets/redux.svg";
import framer from "@/assets/framer-motion.svg";
import axios from "@/assets/axios.svg";
import mysql from "@/assets/mysql-6.svg";
import firebase from "@/assets/firebase-1.svg";
import postgresql from "@/assets/postgresql.svg";
import node from "@/assets/nodejs.svg";
import apache from "@/assets/apache-13.svg";
import git from "@/assets/git-icon.svg";
import vercel from "@/assets/vercel.svg";
import sass from "@/assets/sass-1.svg";
import vue from "@/assets/vue-9.svg";
import mongoose from "@/assets/mongoose-1.svg";
import prisma from "@/assets/prisma-3.svg";

interface Stack {
  title: string;
  image: string;
  link: string;
}

export const languageStack: Stack[] = [
  {
    title: "HTML",
    image: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "CSS",
    image: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    image: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    image: typescript,
    link: "https://www.typescriptlang.org/docs",
  },
  {
    title: "PHP",
    image: php,
    link: "https://www.php.net/docs.php",
  },
];

export const FrameworkStack: Stack[] = [
  {
    title: "Next.js",
    image: next,
    link: "https://nextjs.org/docs",
  },
  {
    title: "TailwindCSS",
    image: tailwind,
    link: "https://v2.tailwindcss.com/docs",
  },
  {
    title: "Laravel",
    image: laravel,
    link: "https://laravel.com/docs/11.x/documentation",
  },
  {
    title: "Express.js",
    image: express,
    link: "https://expressjs.com/",
  },
  {
    title: "Vue.js",
    image: vue,
    link: "https://vuejs.org/guide/introduction.html",
  },
];

export const LibraryStack: Stack[] = [
  {
    title: "React",
    image: react,
    link: "https://react.dev/",
  },
  {
    title: "Redux",
    image: redux,
    link: "https://redux.js.org/",
  },
  {
    title: "Framer motion",
    image: framer,
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Axios",
    image: axios,
    link: "https://axios-http.com/docs/intro",
  },
  {
    title: "Mongoose",
    image: mongoose,
    link: "https://mongoosejs.com/docs/",
  },
  {
    title: "Prisma",
    image: prisma,
    link: "https://www.prisma.io/docs",
  },
];

export const DatabaseStack: Stack[] = [
  {
    title: "MongoDB",
    image: mongodb,
    link: "https://www.mongodb.com/docs/",
  },
  {
    title: "MySQL",
    image: mysql,
    link: "https://dev.mysql.com/doc/",
  },
  {
    title: "Firebase",
    image: firebase,
    link: "https://firebase.google.com/docs",
  },
  {
    title: "Postgresql",
    image: postgresql,
    link: "https://www.postgresql.org/docs/",
  },
];

export const EnvironmentStack: Stack[] = [
  {
    title: "Node.js",
    image: node,
    link: "https://nodejs.org/en/docs",
  },
  {
    title: "Apache",
    image: apache,
    link: "https://httpd.apache.org/docs/",
  },
];

export const FamiliarWithStack: Stack[] = [
  {
    title: "Git",
    image: git,
    link: "https://git-scm.com/doc",
  },
  {
    title: "Vercel",
    image: vercel,
    link: "https://vercel.com/docs",
  },
  {
    title: "Sass",
    image: sass,
    link: "https://sass-lang.com/documentation/",
  },
];
