"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { contact } from "@/lib/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 px-6 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-cyan-400/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 size-80 rounded-full bg-indigo-500/15 blur-[110px]" />
          <div className="dot-grid absolute inset-0 opacity-30" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something useful."
                description="Have a software engineering role, an applied AI problem, or a product idea worth exploring? Send me a note and tell me what you’re working on."
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`mailto:${contact.email}?subject=Let%27s%20work%20together`}
                  className="primary-button"
                >
                  <Mail aria-hidden="true" className="size-4" />
                  Email me
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="secondary-button"
                  aria-live="polite"
                >
                  {copied ? (
                    <Check aria-hidden="true" className="size-4 text-emerald-300" />
                  ) : (
                    <Copy aria-hidden="true" className="size-4" />
                  )}
                  {copied ? "Email copied" : "Copy email"}
                </button>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-neutral-300">
                <MapPin aria-hidden="true" className="size-4 text-cyan-300" />
                {contact.location}
              </div>
              <Link
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="flex items-center gap-3">
                  <Linkedin aria-hidden="true" className="size-4 text-cyan-300" />
                  LinkedIn
                </span>
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="flex items-center gap-3">
                  <Github aria-hidden="true" className="size-4 text-cyan-300" />
                  GitHub
                </span>
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
