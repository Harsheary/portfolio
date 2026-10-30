import type { Metadata } from "next";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack and machine-learning projects by software engineer Harsh Eary.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: "Projects | Harsh Eary",
    description:
      "Selected full-stack and machine-learning projects by software engineer Harsh Eary.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-black pt-32">
        <div className="mx-auto max-w-6xl px-6 pb-4 pt-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Project archive
          </p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Products, experiments, and engineering case studies.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Work spanning full-stack product development, real-time interaction,
            and machine-learning delivery.
          </p>
        </div>
        <FeaturedProjects showHeading={false} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
