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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black pb-20"></div>
      <div className="relative z-20 font-normal text-base md:text-xl text-neutral-500 mx-5 sm:mx-85 h-screen">
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-5xl">
          About Me
        </p>
        <p>
          Hey! I&apos;m Harsh Eary, a Toronto-based software developer studying AI at 
          Centennial College. I spend my days building things that (hopefully) make 
          life a little easier; whether that&apos;s automating engineering workflows with 
          AI or helping people send anonymous messages to their crushes.
        </p>
        <br />
        <p>
          I&apos;m the kind of person who actually enjoys debugging at 2 AM (don&apos;t judge). 
          There&apos;s something oddly satisfying about turning messy problems into clean 
          solutions. Give me React, .NET, or some Python ML pipelines, and I&apos;m in my 
          element - building, breaking, and rebuilding until it just *works*.
        </p>
        <br />
        <p>
          What really gets me excited? AI that does real stuff. Not just buzzwords, 
          but actual tools that empower us, predict outcomes, or automate the 
          boring bits so humans can focus on the interesting parts. The intersection 
          of code and intelligence is where I live.
        </p>
        <br />
        <p>
          When I&apos;m not staring at VSCode, you&apos;ll find me either tending to my 
          ever-growing plant collection (yes, I talk to them) or pretending I&apos;m 
          not procrastinating by reorganizing my Docker containers. Balance is key, 
          right?
        </p>
      <p className="relative z-20 mt-15 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-5xl">
        Experience
      </p>
          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col">
              <p>Software Developer Intern</p>
              <div className="flex w-full justify-between">
                <div>@ Tetra Tech</div>
                <div>Sep 2025 - Dec 2025</div>
              </div>
            </div>
            <div className="flex flex-col">
              <p>Website Developer Intern</p>
              <div className="flex w-full justify-between">
                <div>@ Physiomed</div>
                <div>Jan 2025 - Apr 2025</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
