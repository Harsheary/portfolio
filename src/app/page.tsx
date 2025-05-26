import Image from "next/image";
import {NavbarDemo} from '@/components/Navbar'
import HeroSection from "@/components/HeroSection";
import About  from "@/components/About";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <HeroSection />
      <About />
    </main>
  );
}
