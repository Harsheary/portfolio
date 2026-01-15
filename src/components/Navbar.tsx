"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-10 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 max-w-xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/#about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm mx-10 grid sm:grid-cols-2 gap-10 p-4 grid-cols-1 cursor-none">
          
            <ProductItem
              title="Mystery Message"
              href="https://mystery-message.in"
              src="./mysteryMessage.png"
              description="Send anonymous messages to friends or strangers"
              />
            <ProductItem
              title="Kahoot Clone | Quiz Master"
              href="https://kahoot-clonee-dll2.onrender.com/"
              src="./Kahoot_clone.png"
              description="A Kahoot-like project built in MERN stack"
              />
            <ProductItem
              title="Traffic Fatality ML Project"
              href="https://github.com/Harsheary/supervised-learning-ksi"
              src="./ML_KSI_project.png"
              description="ML pipeline predicting accident fatality outcomes"
              />
            </div>
          <div className="text-center mt-4">
            <Link href="/projects" className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors">
              View All Projects →
            </Link>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
