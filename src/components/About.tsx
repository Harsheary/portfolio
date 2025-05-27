import { cn } from "@/lib/utils";
import React from "react";

export default function About() {
  return (
    <div id="about" className="relative top-0 flex sm:h-[70rem] flex-col w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 font-normal text-base md:text-xl text-neutral-500 mx-5 sm:mx-85 h-screen">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-5xl">
          About Me
        </p>
        <p>
          Hey! I&apos;m Harsh Eary, a Toronto-based software developer with a growing
          passion for artificial intelligence. I&apos;m currently studying Software
          Engineering Technology – Artificial Intelligence at Centennial
          College, and I spend most of my time building clean, efficient
          solutions to real-world problems—one line of code at a time.
        </p>
        <br />
        <p>
          I love thinking about the simplest, most straightforward way to solve
          complex challenges. It&apos;s that balance between logic and creativity
          that keeps me hooked. Whether I&apos;m working with Next.js, React, or
          diving into backend logic with Node and SQL, I aim to create tools and
          experiences that feel effortless for the end user.
        </p>
        <br />
        <p>
          What pulled me into AI is its potential to create real impact. The
          idea that software can learn, adapt, and solve problems at scale
          fascinates me—and the more I study it, the more that fascination
          grows.
        </p>
        <br />
        <p>
          Outside of code, I&apos;m probably tending to my plants (yes, I&apos;m that
          person). They keep me grounded and remind me that good things take
          time—whether you&apos;re growing roots or writing scalable software.
        </p>
      <p className="relative z-20 mt-15 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-5xl">
        Experience
      </p>
          <div className="flex flex-col">
            <p>Website Developer Intern</p>
            <div className="flex w-full justify-between">
              <div>@ Physiomed</div>
              <div> Jan 2025 - Apr 2025</div>
            </div>
          </div>
      </div>
    </div>
  );
}
