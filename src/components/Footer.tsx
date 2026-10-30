import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Harsh Eary</p>
          <p className="mt-1 text-sm text-neutral-500">
            Software Engineer · Applied AI
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`mailto:${contact.email}`}
            aria-label="Email Harsh"
            className="icon-link"
          >
            <Mail aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Harsh on LinkedIn"
            className="icon-link"
          >
            <Linkedin aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Harsh on GitHub"
            className="icon-link"
          >
            <Github aria-hidden="true" className="size-4" />
          </Link>
          <Link href="#top" aria-label="Back to top" className="icon-link ml-2">
            <ArrowUp aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
