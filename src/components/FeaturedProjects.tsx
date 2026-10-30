import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

type FeaturedProjectsProps = {
  showHeading?: boolean;
};

export default function FeaturedProjects({
  showHeading = true,
}: FeaturedProjectsProps) {
  return (
    <section id="work" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        {showHeading && (
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built around real workflows."
            description="A closer look at how I approach product engineering, machine learning, and interactive web applications."
          />
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="relative block aspect-[16/10] overflow-hidden border-b border-white/10"
                aria-label={`Open ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                  {project.eyebrow}
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="rounded-full border border-white/10 p-2 text-neutral-400 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </div>
                <p className="mt-4 text-sm leading-6 text-neutral-300">
                  {project.description}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {project.detail}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition hover:text-cyan-200"
          >
            View projects page
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
