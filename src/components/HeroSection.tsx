import Link from "next/link";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/moving-border";
import { Github, Linkedin } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
function HeroSection() {
  return (
    <div className="h-auto min-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto  md:py-0">
      <WavyBackground className="max-w-4xl mx-auto sm:pb-40 relative">
        <div className="p-4 relative md:mt-70 z-10 w-full text-center">
          <h1 className="md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Hi! I am <strong>Harsh</strong>, and I write code
          </h1>
          <p className="mt-4 font-normal text-base md:text-2xl text-neutral-300 max-w-lg mx-auto">
            Connect to build apps that pair <FlipWords words = {['clean', 'reliable', 'efficient']} /> <br />code with quietly
            elegant design
          </p>
          <div className="mt-4 w-full flex flex-col items-center gap-4">
            
            <Link href='./HarshEary_resume.pdf'> 
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:cursor-pointer">
                Download Resume
            </Button>
            </Link>
            <div className="flex gap-5">
                <Link target='_blank' href='https://github.com/Harsheary'> <Github/></Link> 
                <Link target="_blank" href='https://www.linkedin.com/in/harsh-eary/'> <Linkedin /></Link> 
                </div>       
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}

export default HeroSection;
