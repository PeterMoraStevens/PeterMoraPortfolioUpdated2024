"use client";
import Navbar from "@/components/ui/navbar";
import landingHalfMoons from "@/assets/Brutalist 53.svg";
import landingFlower from "@/assets/Brutalist 86.svg";
import landingSquare from "@/assets/Frame-99.svg";
import { AuroraBackground } from "../components/ui/wavybackground";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Project_cards from "@/components/ui/project-cards";
import quizify from "@/assets/Screenshot 2024-03-28 at 5.23.41 PM.png";
import Cliff from "@/assets/cliff.jpg";
import Dumplings from "@/assets/dumplings.jpg";
import Minecraft from "@/assets/minecraft.jpg";
import OrangeChicken from "@/assets/orangechicken.jpg";
import PathPhoto from "@/assets/path.jpg";
import PathPhoto2 from "@/assets/path2.jpg";
import SalmonTacos from "@/assets/salmontacos.jpg";
import Sunset from "@/assets/sunset.jpg";
import Waterfall from "@/assets/waterfall.jpg";
import Waterfall2 from "@/assets/waterfall2.jpg";
import X from "@/assets/Brutalist 74.svg";
import Circle from "@/assets/Brutalist 59.svg";
import MultX from "@/assets/Brutalist 62.png";
import Portrait from "../public/file.png";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "SWE Intern @ Uber summer 2024",
    description:
      "Completed 8 months at Uber during 2023 school year, passed conversion interview and joining Summer 2024.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7130061719950807042/",
  },
  {
    title: "Leetcode consoeur",
    description: "Solved 540+ leetcode questions.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://leetcode.com/PeterMoraStevens/",
  },
  {
    title: "Co-Creator of Flipable",
    description: "The Free Flashcard and AI study tool open to anyone!",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://flipable.tech/",
  },
  {
    title: "Researched under Songhyun Hong",
    description:
      "worked to learn machine learning tooling in PyTorch to prepare for research into Quantization ",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://sanghyun-hong.com/students.html",
  },
  {
    title: "Officer of ACM club",
    description: "Leads community efforts of ACM",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://acm.oregonstate.edu/",
  },
  {
    title: "Worked at Intel",
    description:
      "Over the summer before my first year in University, I worked at Intel in their Aloha FAB leading a team of 6 ensuring optimal safety and efficiency",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://www.linkedin.com/in/peter-mora-stevens/",
  },
];

export default function Home() {
  return (
    <div className="bg-[#dfe5f2] dark:bg-zinc-900 text-slate-950 dark:text-neutral-200">
      <Navbar />
      <AuroraBackground
        children={
          <>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="flex flex-col gap-4 items-center justify-center px-4"
            >
              <div className="flex items-center justify-between font-Space_Grotesk">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hey, I'm Peter Mora-Stevens! | I am a Third year @ OSU",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Hey, I'm Peter Mora-Stevens! | SWE Intern @ Uber Summer 2024",
                    1000,
                    "Hey, I'm Peter Mora-Stevens! | I am a Software Developer",
                    1000,
                    "Hey, I'm Peter Mora-Stevens! | I am a Cook",
                    1000,
                    "Hey, I'm Peter Mora-Stevens! | I am a Photographer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={25}
                  className="text-xl lg:text-5xl dark:text-white text-center w-[150px] md:w-[300px] lg:w-[600px]"
                  repeat={Infinity}
                />
                <img
                  src={Portrait.src}
                  className="ml-4 rounded-xl w-[150px] md:w-[200px] lg:w-[400px] z-50"
                ></img>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bottom-[40px] absolute flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bottom-0 absolute"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                  fill="currentColor"
                  className="dark:text-[#dfe5f2] text-zinc-900"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </motion.div>
            </motion.div>
          </>
        }
      />
      <Separator className="my-[15px] mt-[35px]" />
      <Separator className="mb-[150px]" />
      <div className="min-h-[30rem] flex flex-col gap-4 items-center justify-center">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0.0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
          }}
          alt="flower icon"
          src={X.src}
          width={75}
          className="absolute lg:right-[125px] right-[40px] mb-4 top-[775px]"
        />
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="text-3xl lg:text-5xl mb-[15px] text-center font-Space_Grotesk"
        >
          I love creating projects which help others
        </motion.h2>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="text-2xl lg:text-3xl mb-[25px] font-Space_Grotesk"
        >
          Such as...
        </motion.div>
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0.0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
          }}
          alt="flower icon"
          src={Circle.src}
          width={100}
          className="absolute lg:left-[150px] left-[25px] top-[1000px]"
        />
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="grid lg:grid-cols-3 gap-8 my-24"
        >
          <Project_cards
            title="Flipable"
            img={quizify.src}
            link="https://flipable.tech/"
            date="2023"
            desc="Flipable is a project created by 3 other students (Taz Larson, Mack Lieu and Danielle Chang) and I in our CS 290 (intro to web development) course. Our tech stack included React, Node, Express and MongoDB. Our goal with quizify was to create a free, open to all, and accessable study platform with assistance from AI."
          />
        </motion.div>
        <Separator className="my-[15px] mt-[35px]" />
        <Separator className="mb-[150px]" />
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <div className="text-5xl font-semibold mb-[25px] text-center font-Space_Grotesk">
            When I'm not coding...
          </div>
          <div className="text-5xl font-semibold mb-[25px] text-center font-Space_Grotesk">
            I take some photos
          </div>
          <div className="grid lg:grid-cols-3 gap-8 my-12 mx-auto fon">
            <img
              src={Sunset.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
            <img
              src={Cliff.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
            <img
              src={PathPhoto2.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
            <img
              src={Waterfall.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
            <img
              src={Waterfall2.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
          </div>

          <div className="text-5xl font-semibold mb-[25px] text-center pt-8">
            ...and I chef it up
          </div>
          <div className="grid lg:grid-cols-3 gap-8 my-12 mx-auto">
            <img
              src={SalmonTacos.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
            <img
              src={Dumplings.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
            <img
              src={OrangeChicken.src}
              alt="Picture of a sunset taken in montana"
              width={400}
              className="rounded-lg border-[#dfe5f2] border-2"
            />
          </div>
        </motion.div>
        <Separator className="my-[15px] mt-[35px]" />
        <Separator className="mb-[150px]" />
      </div>
      <div className="flex flex-col justify-center self-center mx-auto items-center">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.45,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="text-5xl text-center"
        >
          My Experience
          <div className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-16 font-Space_Grotesk">
            <BentoGrid>
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  className={item.className}
                  icon={item.icon}
                  link={item.link}
                />
              ))}
            </BentoGrid>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
