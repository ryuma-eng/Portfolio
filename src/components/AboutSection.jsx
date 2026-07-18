

import { useEffect, useRef, useState } from "react";
import { Award, Download, FolderOpen, Globe } from "lucide-react";
import rjImage from "../assets/rj-profile.png";
import resumePdf from "../assets/DAVID_RICARDO_JOSE_C_RESUME (1).pdf";

const stats = [
    {
        icon: FolderOpen,
        value: "3",
        label: "Total Projects",
        description: "Innovative web solutions crafted",
    },
    {
        icon: Award,
        value: "3",
        label: "Certificates",
        description: "Professional skills validated",
    },
    {
        icon: Globe,
        value: "4",
        label: "Years Of Learning",
        description: "Continuous growth journey",
    },
];

export const AboutSection = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = aboutRef.current;

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
        <section ref={aboutRef} id="about" className="relative flex min-h-[88vh] items-center pb-12 pt-16 lg:min-h-[92vh]">
            <div className="container">
                <div className="max-w-none">
                    <div className={`text-center transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                            About Me
                        </h2>
                        <p className="mt-3 text-sm text-white/65 sm:text-base">
                            Transforming ideas into purposeful digital experiences
                        </p>
                    </div>

                    <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                        <div
                            className="order-2 p-1 text-left sm:p-2 lg:order-1 transition-all duration-700 ease-out"
                            style={{
                                transitionDelay: isVisible ? "140ms" : "0ms",
                                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                                opacity: isVisible ? 1 : 0,
                            }}
                        >
                            <p className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                                Hello, I&apos;m
                                <span className="mt-1 block text-primary">Ricardo Jose David</span>
                            </p>

                            <p
                                className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base transition-all duration-700 ease-out"
                                style={{ transitionDelay: isVisible ? "260ms" : "0ms" }}
                            >
                                I am a motivated IT professional with a
                                strong foundation in web and software
                                development, databases, and basic
                                networking concepts. I am eager to apply
                                my technical skills, learn new technologies,
                                and contribute effectively to real-world
                                projects.
                            </p>

                            <div
                                className="mt-8 flex flex-wrap gap-3 transition-all duration-700 ease-out"
                                style={{
                                    transitionDelay: isVisible ? "380ms" : "0ms",
                                    transform: isVisible ? "translateY(0)" : "translateY(16px)",
                                    opacity: isVisible ? 1 : 0,
                                }}
                            >
                                <a
                                    href={resumePdf}
                                    download="DAVID_RICARDO_JOSE_C_RESUME.pdf"
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(120,104,255,0.35)]"
                                >
                                    <Download className="h-4 w-4" />
                                    Download CV
                                </a>

                                <a
                                    href="#portfolio"
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
                                >
                                    <FolderOpen className="h-4 w-4" />
                                    View Projects
                                </a>
                            </div>
                        </div>

                        <div
                            className="order-1 flex justify-center lg:order-2 transition-all duration-700 ease-out"
                            style={{
                                transitionDelay: isVisible ? "180ms" : "0ms",
                                transform: isVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
                                opacity: isVisible ? 1 : 0,
                            }}
                        >
                            <div className="relative h-66 w-66 overflow-hidden rounded-full border border-white/25 bg-[#0b1027] shadow-[0_0_0_8px_rgba(255,255,255,0.02),0_0_30px_rgba(99,102,241,0.32)] sm:h-74 sm:w-74">
                                <img
                                    src={rjImage}
                                    alt="Ricardo Jose David"
                                    className="absolute inset-0 h-full w-full rounded-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-radial from-white/8 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out"
                        style={{
                            transitionDelay: isVisible ? "520ms" : "0ms",
                            transform: isVisible ? "translateY(0)" : "translateY(18px)",
                            opacity: isVisible ? 1 : 0,
                        }}
                    >
                        {stats.map(({ icon: Icon, value, label, description }, index) => (
                            <article
                                key={label}
                                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_10px_26px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                            >
                                <div
                                    className="transition-all duration-700 ease-out"
                                    style={{
                                        transitionDelay: isVisible ? `${620 + index * 120}ms` : "0ms",
                                        transform: isVisible ? "translateY(0)" : "translateY(18px)",
                                        opacity: isVisible ? 1 : 0,
                                    }}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white/80">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <span className="text-3xl font-black text-white/90">{value}</span>
                                    </div>

                                    <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                                        {label}
                                    </h3>
                                    <p className="mt-2 text-sm text-white/55">{description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}