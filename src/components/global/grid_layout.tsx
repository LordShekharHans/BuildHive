'use client';
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Globe } from "../magicui/globe";
import { motion } from "motion/react";


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const GlobeBox = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-400  ">
    <div className="overflow-hidden relative w-full h-full">

      <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <h1 className="bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold">Growth</h1>

        <Globe className="pointer-events-none absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
      </div>
    </div>
  </div>
);
const Beambox = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <div className="overflow-hidden relative w-full h-full">

       <Image src="/assets/business.jpg" layout="fill" objectFit="cover" className="rounded-xl" alt="Business" />
       {/* <Image src="/assets/businees.jpg" layout="fill" objectFit="cover" className="rounded-xl"  /> */}
      </div>
    </div>
  // </div>
);
const Innovationbox = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <div className="overflow-hidden relative w-full h-full">

       <Image src="/assets/innovation.jpg" layout="fill" objectFit="cover" className="rounded-xl" alt="Business" />
       {/* <Image src="/assets/businees.jpg" layout="fill" objectFit="cover" className="rounded-xl"  /> */}
      </div>
    </div>
  // </div>
);

const Communicationbox = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <div className="overflow-hidden relative w-full h-full">

       <Image src="/assets/communication.png" layout="fill" objectFit="cover" className="rounded-xl" alt="Business" />
       {/* <Image src="/assets/businees.jpg" layout="fill" objectFit="cover" className="rounded-xl"  /> */}
      </div>
    </div>
  // </div>
);
const SkeletonSix = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <div className="overflow-hidden relative w-full h-full">

       <Image src="/assets/preview.png" layout="fill" objectFit="cover" className="rounded-xl" alt="Business" />
       {/* <Image src="/assets/businees.jpg" layout="fill" objectFit="cover" className="rounded-xl"  /> */}
      </div>
    </div>
  // </div>
);
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <div className="overflow-hidden relative w-full h-full">

       <Image src="/assets/customization.png" layout="fill" objectFit="cover" className="rounded-xl" alt="Business" />
       {/* <Image src="/assets/businees.jpg" layout="fill" objectFit="cover" className="rounded-xl"  /> */}
      </div>
    </div>
  // </div>
);
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
 
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Empowering businesses with next-gen website and funnel-building tools.",
    header: <Innovationbox />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Evolution",
    description: "Transform your workflows with automation, payments, and analytics.",
    header: <Beambox />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Customization",
    description: "Design, optimize, and launch stunning websites and funnels.",
    header: <SkeletonThree />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Seamless Communication",
    description:
      "Collaborate, manage projects, and streamline operations in real-time.",
    header: <Communicationbox />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Growth",
    description: "Elevate your business with intuitive tools, role-based access, and seamless integrations.",
    header: <GlobeBox />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <SkeletonFive />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Performance",
    description: "Gain insights, track conversions, and optimize your business.",
    header: <SkeletonSix />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
