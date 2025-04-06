"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-96px)] flex items-center justify-center dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r dark:from-slate-200 dark:to-slate-400 from-slate-700 to-slate-900">
          DreamWorks
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 h-6 sm:h-8">
          <Typewriter
            words={[
              "Turning Dreams into Digital Reality",
              "Creating Innovative Solutions",
              "Building the Future",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
