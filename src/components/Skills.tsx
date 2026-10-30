import { skillGroups } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="A practical stack for end-to-end delivery."
          description="Technology is a means to an outcome. These are the tools I use to build, evaluate, test, and ship."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.045] sm:p-8"
            >
              <span className="absolute right-6 top-5 font-mono text-5xl font-semibold text-white/[0.035] transition group-hover:text-cyan-300/[0.08]">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400">
                {group.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
