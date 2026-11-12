
import Link from "next/link";
import { Download, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#151719]/80 backdrop-blur-xl">
      <nav className="section-container flex h-20 items-center justify-between">

        <Link href="#home" className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-accent" />
          <span className="font-heading text-xl font-bold">
            Pratham<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="/resume/K_Pratham_Kumar.pdf"
          download
          className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm transition-all hover:border-accent hover:text-accent"
        >
          <Download size={16} />
          Resume
        </a>
      </nav>
    </header>
  );
}
