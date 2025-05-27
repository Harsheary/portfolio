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
        <Link href={"#about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm mx-10 grid sm:grid-cols-2 gap-10 p-4 grid-cols-1 ">
          
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
              description="Production ready Tailwind css components for your next project"
              />
            </div>
          
           
        </MenuItem>
        
      </Menu>
    </div>
  );
}
