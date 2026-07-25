import {
  ArrowUpRight,
  Mail,
} from "lucide-react";



import { useEffect, useRef, useState } from "react";

import { 
  Laptop, 
  Database, 
  Globe, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Smartphone 
} from 'lucide-react';

const BrandGithub = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.48v-1.68c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.42 9.42 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.92-2.34 4.78-4.57 5.04.36.32.68.95.68 1.92v2.85c0 .26.18.57.69.47A10.13 10.13 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const BrandLinkedIn = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

const BrandInstagram = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.3.06 2.18.27 2.69.45.65.25 1.11.55 1.6 1.04.49.49.79.95 1.04 1.6.18.51.39 1.39.45 2.69.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.3-.27 2.18-.45 2.69-.25.65-.55 1.11-1.04 1.6-.49.49-.95.79-1.6 1.04-.51.18-1.39.39-2.69.45-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.3-.06-2.18-.27-2.69-.45-.65-.25-1.11-.55-1.6-1.04-.49-.49-.79-.95-1.04-1.6-.18-.51-.39-1.39-.45-2.69C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.3.27-2.18.45-2.69.25-.65.55-1.11 1.04-1.6.49-.49.95-.79 1.6-1.04.51-.18 1.39-.39 2.69-.45C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.77.07-1.15.05-1.77.24-2.18.4-.55.21-.94.46-1.35.87-.41.41-.66.8-.87 1.35-.16.41-.35 1.03-.4 2.18C2.21 9.48 2.2 9.85 2.2 12s.01 2.52.07 4.77c.05 1.15.24 1.77.4 2.18.21.55.46.94.87 1.35.41.41.8.66 1.35.87.41.16 1.03.35 2.18.4 1.25.06 1.62.07 4.77.07s3.52-.01 4.77-.07c1.15-.05 1.77-.24 2.18-.4.55-.21.94-.46 1.35-.87.41-.41.66-.8.87-1.35.16-.41.35-1.03.4-2.18.06-1.25.07-1.62.07-4.77s-.01-3.52-.07-4.77c-.05-1.15-.24-1.77-.4-2.18a3.7 3.7 0 0 0-.87-1.35 3.7 3.7 0 0 0-1.35-.87c-.41-.16-1.03-.35-2.18-.4-1.25-.06-1.62-.07-4.77-.07Zm0 3.65a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3Zm0 1.8a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Zm6.52-2.01a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
  </svg>
);

/* --- small inline icon primitives, drawn in a 24x24 box so they can be
   dropped into the illustration svg at any center point / scale --- */
const IconGear = ({ cx, cy, size, className, spinDuration }) => {
  const s = size / 24;
  return (
    <g
      className={className}
      style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: spinDuration }}
    >
      <g transform={`translate(${cx} ${cy}) scale(${s}) translate(-12 -12)`}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
        />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </g>
    </g>
  );
};

const IconMonitor = ({ cx, cy, size, className }) => {
  const s = size / 24;
  return (
    <g className={className} transform={`translate(${cx} ${cy}) scale(${s}) translate(-12 -12)`}>
      <rect x="2" y="3" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="8" x2="16" y1="21" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" x2="12" y1="17" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
};

const IconCloud = ({ cx, cy, size, className }) => {
  const s = size / 24;
  return (
    <g className={className} transform={`translate(${cx} ${cy}) scale(${s}) translate(-12 -12)`}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
      />
    </g>
  );
};

export const HeroSection = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = heroRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

    return (
    <section ref={heroRef} id="hero" className="relative min-h-[88vh] flex items-center pt-20 pb-10 lg:min-h-[92vh]">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`max-w-2xl text-left transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1
              className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem] xl:leading-[0.95]"
              style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
            >
              <span className="block text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.14)]">
                Full Stack
              </span>
              <span className="text-primary">
                Developer
              </span>
            </h1>

            <p
              className="mt-5 text-xl font-medium text-white/85 sm:text-2xl transition-all duration-700 ease-out"
              style={{ transitionDelay: isVisible ? "240ms" : "0ms" }}
            >
              Information Technology Professional
            </p>

            <p
              className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base transition-all duration-700 ease-out"
              style={{ transitionDelay: isVisible ? "360ms" : "0ms" }}
            >
              Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions
            </p>

            <div
              className="mt-6 flex flex-wrap gap-3 transition-all duration-700 ease-out"
              style={{
                transitionDelay: isVisible ? "480ms" : "0ms",
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {["React", "JavaScript", "Laravel", "Tailwind", "WordPress"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/75 shadow-[0_10px_24px_rgba(11,15,35,0.25)] backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out"
              style={{
                transitionDelay: isVisible ? "600ms" : "0ms",
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#080b1f] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#080b1f] px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div
              className="mt-8 flex items-center gap-4 transition-all duration-700 ease-out"
              style={{
                transitionDelay: isVisible ? "720ms" : "0ms",
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                opacity: isVisible ? 1 : 0,
              }}
            >
              {[
                { icon: BrandGithub, label: "GitHub", href: "https://github.com/ryuma-eng" },
                { icon: BrandLinkedIn, label: "LinkedIn", href: "https://www.linkedin.com/in/ricardo-jose-david-6484b3416" },
                { icon: BrandInstagram, label: "Instagram", href: "https://www.instagram.com/rj_daviddd" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white hover:shadow-[0_0_24px_rgba(103,93,255,0.22)]"
                >
                  <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
                  
                </a>
              ))}
            </div>
          </div>

          {/* Illustration: one viewBox-scaled SVG, so spacing holds at any
              container width instead of drifting/overlapping like fixed-px divs did */}
          <div
            className={`relative w-80 h-80 flex items-center justify-center justify-self-center transition-all duration-1000 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            {/* Floating Inner Wrapper (Starts floating after entrance) */}
            <div className="relative w-full h-full flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[spin_30s_linear_infinite]" />
              
              {/* Inner Decorative Ring */}
              <div className="absolute inset-8 rounded-full border border-dashed border-purple-500/30 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Central Node */}
              <div className="relative z-10 p-5 rounded-2xl bg-purple-950/40 border border-purple-500/50 backdrop-blur-md">
                <Laptop className="w-12 h-12 text-purple-400" />
              </div>

              {/* Floating Satellite Nodes */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-slate-900/80 border border-indigo-500/40">
                <Database className="w-6 h-6 text-indigo-400" />
              </div>

              <div className="absolute top-1/4 right-2 p-3 rounded-xl bg-slate-900/80 border border-purple-500/40">
                <Cloud className="w-6 h-6 text-purple-400" />
              </div>

              <div className="absolute bottom-1/4 right-2 p-3 rounded-xl bg-slate-900/80 border border-indigo-500/40">
                <Cpu className="w-6 h-6 text-indigo-400" />
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-slate-900/80 border border-purple-500/40">
                <Smartphone className="w-6 h-6 text-purple-400" />
              </div>

              <div className="absolute bottom-1/4 left-2 p-3 rounded-xl bg-slate-900/80 border border-indigo-500/40">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>

              <div className="absolute top-1/4 left-2 p-3 rounded-xl bg-slate-900/80 border border-purple-500/40">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>
              
        </div>
      </div>
    </section>
  );
};