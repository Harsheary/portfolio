"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { contact } from "@/lib/portfolio-data";

export function NavbarDemo() {
  return <Navbar />;
}

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/75 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl"
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/#top"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
            aria-label="Harsh Eary home"
          >
            <span className="flex size-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 font-mono text-sm font-semibold text-cyan-200">
              HE
            </span>
            <span className="hidden text-sm font-medium text-white sm:block">
              Harsh Eary
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2 text-sm text-neutral-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white md:flex"
          >
            <FileText aria-hidden="true" className="size-4" />
            Resume
          </Link>

          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-neutral-200 md:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 py-3 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 rounded-xl bg-cyan-300 px-3 py-3 text-sm font-medium text-neutral-950"
            >
              <FileText aria-hidden="true" className="size-4" />
              View resume
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
