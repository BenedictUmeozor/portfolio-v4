import Technology from "./Technology";
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
import { ElementInView } from "@/utils/Element";

export default function Technologies() {
  return (
    <ElementInView className="pt-20" hash="skills">
      <h2 className="text-xs text-faded_text tracking-wider uppercase mb-8">
        technologies
      </h2>

      <Technology
        title="Languages"
        images={[html, css, javascript, typescript, php]}
      />
      <Technology
        title="Frameworks"
        images={[next, tailwind, laravel, express]}
      />
      <Technology title="Libraries" images={[react, redux, framer, axios]} />
      <Technology
        title="Databases"
        images={[mongodb, mysql, firebase, postgresql]}
      />
      <Technology title="Environments" images={[node, apache]} />
      <Technology title="Familiar with" images={[git, vercel, sass]} />
    </ElementInView>
  );
}
