import { useEffect, useState } from "react";
import { ArrowLeft, Code2, ExternalLink, GitBranch, Layers, Star } from "lucide-react";
import inventrackImg from "../../assets/portfolio/projects/inventrack.png";
import { StarBackground } from "../StarBackground";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router-dom";

const projectDetails = {
    title: "InvenTrack",
    description: "A web-based Point-of-Sale (POS) and Inventory Management System that streamlines sales transactions, tracks inventory in real time, and provides descriptive analytics to support informed business decisions.",
    image: inventrackImg,
    liveDemo: "https://inven-track.com/login",
    repository: "https://github.com/Hiroe10/InvenTrack.git",
    techStack: ["PHP", "Laravel", "Bootstrap", "HTML", "CSS", "Javascript", "Figma"],
    keyFeatures: [
        "Point-of-Sale (POS) Transactions",
        "Real-Time Inventory Management",
        "Inventory Movement Analysis",
        "Seasonal Trend Insights",
        "Reports Generation",
        "Sales Quota Tracking"
    ]
}

const FADE_DURATION = 300; // ms - keep in sync with the duration-300 class below

export const InvenTrack = () => {
    const { title, description, image, liveDemo, repository, techStack, keyFeatures } = projectDetails;
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);

    // Fade in on mount
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            setIsVisible(true);
        });
        return () => cancelAnimationFrame(frame);
    }, []);

    const handleBack = (e) => {
        e.preventDefault();
        setIsVisible(false); // triggers fade-out

        window.setTimeout(() => {
            navigate("/#portfolio");
        }, FADE_DURATION);
    };

    return (
        <div
            className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-300 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            <StarBackground />

            <NavBar />

            <section className="relative py-16 pt-28">
            <div className="container">
                {/* Back button + breadcrumb */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 
                                    font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 
                                    hover:border-white/30 hover:bg-white/10 hover:text-white">
                            
                            <ArrowLeft className="h-4 w-4" />
                            Back
                    </button>

                    <div className="flex items-center gap-2 text-white/50">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="transition-colors duration-300 hover:text-white/80"
                        >
                            Projects
                        </button>
                        <span>/</span>
                        <span className="text-white/80">{title}</span>
                    </div>
                </div>

                {/* Main grid */}
                <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
                    {/* Left column */}
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                            {title}
                        </h1>
                        <div className="mt-4 h-1 w-16 rounded-full bg-primary" />

                        <p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                            {description}
                        </p>

                        {/* Stat badges */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                    <Code2 className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-lg font-bold leading-none text-white">{techStack.length}</p>
                                    <p className="mt-1 text-xs text-white/55">Total Technologies</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                                    <Layers className="h-4 w-4" />
                                </span>
                                <div>
                                    <p className="text-lg font-bold leading-none text-white">{keyFeatures.length}</p>
                                    <p className="mt-1 text-xs text-white/55">Key Features</p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap gap-3">

                            <a
                            
                                href={liveDemo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(120,104,255,0.35)]">

                                <ExternalLink className="h-4 w-4" />
                                    
                                    Live Demo
                            </a>



                            <a
                                href={repository}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
                            >
                                <GitBranch className="h-4 w-4" />
                                Github
                            </a>
                        </div>

                        {/* Technologies used */}
                        <div className="mt-10">
                            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                                <Code2 className="h-4 w-4" />
                                Technologies Used
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="order-1 flex flex-col gap-6 lg:order-2">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_26px_rgba(0,0,0,0.22)] backdrop-blur-md">
                            <img
                                src={image}
                                alt={title}
                                className="h-56 w-full object-cover sm:h-72"
                            />
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.22)] backdrop-blur-md">
                            <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                                <Star className="h-4 w-4 text-primary" />
                                Key Features
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {keyFeatures.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}