import { Bot, Code2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  const details = [
    {
      icon: MapPin,
      label: "Based in",
      value: "Toronto, Canada",
    },
    {
      icon: Code2,
      label: "I build",
      value: "Full-stack systems",
    },
    {
      icon: Bot,
      label: "Focused on",
      value: "Applied AI",
    },
  ];

  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering useful software, not just demos."
          description="I work across full-stack development and applied AI, turning ambiguous workflows into dependable products that people can actually use."
        />

        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="space-y-6 text-base leading-8 text-neutral-300 sm:text-lg">
            <p>
              I&apos;m Harsh Eary, a Toronto-based software engineer completing an
              Advanced Diploma in Software Engineering — AI at Centennial
              College. My experience spans public-sector AI evaluation,
              engineering document automation, and healthcare data tools.
            </p>
            <p>
              I enjoy the work between a rough idea and a reliable system:
              clarifying the problem, choosing practical technology, testing the
              edge cases, and refining the experience until it feels simple.
            </p>
            <p>
              I&apos;m especially interested in applied AI with measurable quality:
              grounded outputs, human review, useful evaluation, and software
              foundations strong enough to support it.
            </p>
          </div>

          <div className="grid gap-3">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card flex items-center gap-4 rounded-2xl p-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                    {label}
                  </p>
                  <p className="mt-1 font-medium text-neutral-100">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
