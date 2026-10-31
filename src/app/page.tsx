import Navbar from "@/component/Atom/Navbar";
import AboutStudio from "@/component/Molecule/AboutStudio";
import Contact from "@/component/Molecule/Contact";
import EngagementModels from "@/component/Molecule/EngagementModels";
import Hero from "@/component/Molecule/Hero";
import HowWeWork from "@/component/Molecule/HowWeWork";
import Partnership from "@/component/Molecule/Partnership";
import Philosophy from "@/component/Molecule/Philosophy";
import SelectedWork from "@/component/Molecule/SelectedWork";
import Services from "@/component/Molecule/WhatWeDo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <SelectedWork />
        <Partnership />
        <HowWeWork />
        <EngagementModels />
        <AboutStudio />
        <Contact />
      </main>
    </>
  );
}
