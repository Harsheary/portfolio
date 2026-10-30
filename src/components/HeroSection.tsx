import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "./ui/moving-border";
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
import { contact } from "@/lib/portfolio-data";

function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black">
      <WavyBackground
        speed="slow"
        blur={12}
        waveOpacity={0.28}
        containerClassName="min-h-screen"
        className="mx-auto flex w-full max-w-6xl items-center px-6 pt-28"
      >
        <div className="relative z-10 max-w-4xl py-20">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
              <span className="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
              Open to software engineering opportunities
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
              <MapPin aria-hidden="true" className="size-3.5" />
              Toronto, Canada
            </span>
          </div>

          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Software Engineer · Applied AI
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.98]">
            I turn complex workflows into{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              dependable software.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-neutral-300 sm:text-xl">
            I&apos;m Harsh, a Toronto-based developer building{" "}
            <FlipWords
              words={["full-stack products", "applied AI tools", "reliable APIs"]}
              className="font-medium text-white"
            />{" "}
            with thoughtful interfaces and solid engineering underneath.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              as="a"
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              borderRadius="0.9rem"
              containerClassName="mt-0 h-12 w-full sm:w-44"
              className="gap-2 border-cyan-300/20 bg-neutral-950 text-white"
            >
              View resume
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Button>
            <Link href="#contact" className="secondary-button h-12">
              Let&apos;s connect
            </Link>
            <div className="ml-0 flex items-center gap-2 sm:ml-2">
              <Link
                target="_blank"
                rel="noreferrer"
                href={contact.github}
                className="icon-link"
                aria-label="GitHub"
              >
                <Github aria-hidden="true" className="size-4" />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={contact.linkedin}
                className="icon-link"
                aria-label="LinkedIn"
              >
                <Linkedin aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="#about"
          aria-label="Scroll to about"
          className="absolute bottom-8 left-6 hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500 transition hover:text-neutral-200 sm:flex"
        >
          Scroll to explore
          <ArrowDown aria-hidden="true" className="size-3.5 animate-bounce" />
        </Link>
      </WavyBackground>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}

export default HeroSection;
