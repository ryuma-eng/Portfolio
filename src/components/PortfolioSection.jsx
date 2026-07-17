

import { useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, Code2, ExternalLink, FolderOpen, Layers3, Sparkles } from "lucide-react";
import {
    SiBootstrap,
    SiGit,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiPhp,
    SiPostman,
    SiPython,
    SiReact,
    SiWordpress,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaJava, FaJsSquare, FaPhp, FaReact } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import cert1 from "../assets/portfolio/certificates/1.png";
import cert2 from "../assets/portfolio/certificates/2.png";
import cert3 from "../assets/portfolio/certificates/3.png";
import inventrackImg from "../assets/portfolio/projects/inventrack.png";
import skincipherImg from "../assets/portfolio/projects/skincipher.png";
import mitigationMenImg from "../assets/portfolio/projects/mitigationmen.png";

const tabs = [
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "certificates", label: "Certificates", icon: BadgeCheck },
    { id: "tech", label: "Tech Stack", icon: Layers3 },
];

const projects = [
    {
        title: "InvenTrack",
        description: "A web-based Point-of-Sale (POS) and Inventory Management System that streamlines sales transactions, tracks inventory in real time, and provides descriptive analytics to support informed business decisions.",
        tags: ["PHP", "Laravel", "Web App"],
        image: inventrackImg,
    },
    {
        title: "SkinCipher",
        description: "A web-based e-commerce platform that enables customers to browse, purchase, and explore skincare products through a seamless, user-friendly shopping experience.",
        tags: ["PHP", "JavaScript", "E-commerce"],
        image: skincipherImg,
    },
    {
        title: "Mitigation Men",
        description: "A web-based platform that showcases the professional mitigation and restoration services, helping clients learn about the company,request assistance, and connect with the team.",
        tags: ["Business Website", "Service Platform", "Restoration Services"],
        image: mitigationMenImg,
    },
    // {
    //     title: "6 Mary's Hotel Management System",
    //     description: "A desktop-based hotel management system that streamlines room reservations, guest check-ins and check-outs, billing, and booking management to improve daily hotel operations.",
    //     tags: ["Productivity", "CRUD", "Desktop App"],
    //     image: inventrackImg,
    // }
];

const certificates = [
    {
        title: "Installing and Configuring Computer Systems",
        issuer: "TESDA Philippines",
        image: cert1,
    },
    {
        title: "Introduction to CSS",
        issuer: "TESDA Philippines",
        image: cert2,
    },
    {
        title: "Setting Up Computer Networks",
        issuer: "TESDA Philippines",
        image: cert3,
    }
];

const techStacks = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C++", icon: TbBrandCpp, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
];

const PortfolioSection = () => {
    const portfolioRef = useRef(null);
    const tabSwapTimeoutRef = useRef(null);
    const [activeTab, setActiveTab] = useState("projects");
    const [displayTab, setDisplayTab] = useState("projects");
    const [isPanelVisible, setIsPanelVisible] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = portfolioRef.current;

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
            { threshold: 0.18 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        return () => {
            if (tabSwapTimeoutRef.current) {
                window.clearTimeout(tabSwapTimeoutRef.current);
            }
        };
    }, []);

    const handleTabChange = (tabId) => {
        if (tabId === displayTab) {
            return;
        }

        setIsPanelVisible(false);

        if (tabSwapTimeoutRef.current) {
            window.clearTimeout(tabSwapTimeoutRef.current);
        }

        tabSwapTimeoutRef.current = window.setTimeout(() => {
            setDisplayTab(tabId);
            setActiveTab(tabId);
            setIsPanelVisible(true);
        }, 180);
    };

    const renderPanel = (tabId) => {
        if (tabId === "projects") {
            return (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1027] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                            style={{ transitionDelay: isVisible ? `${index * 90}ms` : "0ms" }}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-5 text-left">
                                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-white/65">{project.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
                                    >
                                        Live Demo
                                        <ExternalLink className="h-4 w-4" />
                                    </a>

                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                                    >
                                        Details
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div> */}

                                <div className="mt-auto flex justify-end pt-5">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                                    >
                                        Details
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            );
        }

        if (tabId === "certificates") {
            return (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {certificates.map((certificate, index) => (
                        <article
                            key={certificate.title}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1027] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                            style={{ transitionDelay: isVisible ? `${index * 90}ms` : "0ms" }}
                        >
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#11162f]">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-4 text-left">
                                <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                                <p className="mt-1 text-sm text-white/60">{certificate.issuer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6">
                {techStacks.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                    <div
                        key={tech.name}
                        className="group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0b1027] p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#11162f]"
                        style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
                    >
                        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                            <Icon className="h-7 w-7" style={{ color: tech.color }} aria-hidden="true" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-[0.08em] text-white/80">
                            {tech.name}
                        </span>
                    </div>
                );
                })}
            </div>
        );
    };

    return (
        <section
            ref={portfolioRef}
            id="portfolio"
            className="relative px-6 py-24 sm:py-28"
        >
            <div className="container relative mx-auto max-w-screen-2xl">
                <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
                    <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        Portfolio Showcase
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
                        Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                <div className={`mt-10 rounded-[2rem] border border-white/10 bg-[#0b1027] p-3 backdrop-blur-md transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <div className="grid gap-3 md:grid-cols-3">
                        {tabs.map(({ id, label, icon: Icon }) => {
                            const isActive = activeTab === id;

                            return (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => handleTabChange(id)}
                                    className={`flex items-center justify-center gap-3 rounded-[1.2rem] px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-white/65 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div
                    className={`mt-10 transition-all duration-500 ease-out ${
                        isVisible && isPanelVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                >
                    <div key={displayTab} className="transition-all duration-500 ease-out">
                        {renderPanel(displayTab)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;