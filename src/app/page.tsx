import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import React from "react";

const home = () => {
  return (
    <div className="mx-auto max-w-[1536px]">
      <header className="relative h-dvh w-full">
        <Navbar />
        <div className="h-[calc(100vh-72px)]">
          <Hero />
        </div>
      </header>
      <Mission />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default home;
