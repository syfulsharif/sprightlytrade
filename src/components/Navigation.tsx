import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-neutral-950/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between lg:justify-center relative">
        
        {/* Left Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-12 absolute left-6 md:left-12">
          {navLinks.slice(0, 2).map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <a href="#home" className="text-2xl font-display font-medium tracking-tight text-white z-10">
          Sprightly Trade International
        </a>

        {/* Right Nav (Desktop) */}
        <div className="hidden lg:flex items-center gap-12 absolute right-6 md:right-12">
          {navLinks.slice(2, 4).map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white p-2">
          <div className="w-5 h-0.5 bg-white mb-1.5" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>
    </nav>
  );
}
