import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContent } from "./ProjectContent";
import { getProjectBySlug } from "../../data/projectsData";

const FADE_DURATION = 300;

export const ProjectModal = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const project = getProjectBySlug(slug);

    useEffect(() => {
        if (!project) return;
        const frame = requestAnimationFrame(() => setIsVisible(true));
        document.body.style.overflow = "hidden";
        return () => {
            cancelAnimationFrame(frame);
            document.body.style.overflow = "";
        };
    }, [project]);

    const handleClose = () => {
        setIsVisible(false);
        window.setTimeout(() => navigate(-1), FADE_DURATION);
    };

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!project) return null;

    return (
        // Solid background renders instantly (no opacity animation here) —
        // this immediately hides the page underneath, preventing ghosting/overlap.
        <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-background text-foreground">


            {/* Only the content fades/slides in, on top of the already-opaque background */}
            <div
                className={`transition-all duration-300 ease-out ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
            >
                <ProjectContent project={project} onBack={handleClose} variant="page" />
            </div>
        </div>
    );
};