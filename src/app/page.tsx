import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import { contact } from "@/lib/portfolio-data";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Eary",
    url: contact.website,
    email: `mailto:${contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    jobTitle: "Software Engineer",
    sameAs: [contact.github, contact.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "Applied Artificial Intelligence",
      "RAG Evaluation",
      "ASP.NET Core",
      "React",
    ],
  };

  return (
    <>
      <main>
        <HeroSection />
        <About />
        <Experience />
        <FeaturedProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
