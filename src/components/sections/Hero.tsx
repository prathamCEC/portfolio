
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Send,
} from "lucide-react";
import { SiGithub }from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="section-container grid w-full items-center gap-12 py-16 lg:grid-cols-2">

        {/* Introduction */}
        <div className="relative z-10">

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Hey, I'm Pratham
          </span>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            Pratham
            <span className="block text-accent">Kumar.</span>
          </h1>

          <p className="mt-6 text-base font-medium leading-relaxed text-white/80 sm:text-lg">
            Backend Developer
            <span className="mx-2 text-accent">|</span>
            AI/ML Enthusiast
            <span className="mx-2 text-accent">|</span>
            Technology Explorer
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
            A Computer Science undergraduate passionate about
            building real-world products, exploring AI, and turning
            ideas into impactful solutions.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-4">

            <Link
              href="#projects"
              className="flex items-center gap-3 rounded-lg bg-accent px-6 py-3.5 font-semibold text-[#151719] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(217,130,69,0.25)]"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="/resume/resume.pdf"
              download
              className="flex items-center gap-3 rounded-lg border border-white/25 px-6 py-3.5 font-medium transition-all hover:border-accent hover:text-accent"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-5">

            <a
              href="https://github.com/prathamCEC"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/70 transition-colors hover:text-accent"
            >
              <SiGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/k-pratham-kumar-8a0a462a4/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-accent"
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href="mailto:prathampoojary777@gmail.com"
              aria-label="Email"
              className="text-white/70 transition-colors hover:text-accent"
            >
              <Send size={23} />
            </a>

          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <HeroVisual />
        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.2em] text-white/50 transition-colors hover:text-accent md:flex"
      >
        SCROLL TO EXPLORE
        <span className="text-lg text-accent">↓</span>
      </a>

    </section>
  );
}
