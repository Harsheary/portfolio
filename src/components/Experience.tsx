import { BriefcaseBusiness, MapPin } from "lucide-react";
import { experiences } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="From applied AI to production software."
          description="A track record of owning implementation details, evaluating quality, and working with teams to move technical projects forward."
        />

        <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-4 sm:pl-12">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[2.72rem] top-1 flex size-6 items-center justify-center rounded-full border border-cyan-300/30 bg-neutral-950 sm:-left-[3.72rem]">
                <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
              </span>

              <div className="glass-card rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm text-cyan-300">
                      <BriefcaseBusiness aria-hidden="true" className="size-4" />
                      <span>{experience.company}</span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {experience.role}
                    </h3>
                  </div>
                  <div className="shrink-0 text-sm text-neutral-400 sm:text-right">
                    <p>{experience.dates}</p>
                    <p className="mt-1 flex items-center gap-1.5 sm:justify-end">
                      <MapPin aria-hidden="true" className="size-3.5" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-neutral-300">
                  {experience.summary}
                </p>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-neutral-400">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {index === 0 && (
                <span className="absolute -top-3 right-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200 sm:right-8">
                  Latest
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
