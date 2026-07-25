import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ProjectContent } from "./ProjectContent";
import { getProjectBySlug } from "../../data/projectsData";
import { NotFound } from "../../pages/NotFound";

const FADE_DURATION = 300;

export const ProjectPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const project = getProjectBySlug(slug);

    useEffect(() => {
        if (!project) return;
        const frame = requestAnimationFrame(() => setIsVisible(true));
        return () => cancelAnimationFrame(frame);
    }, [project]);

    if (!project) return <NotFound />;

    const handleBack = () => {
        setIsVisible(false);
        window.setTimeout(() => navigate("/#portfolio"), FADE_DURATION);
    };

    return (
        <div
            className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-300 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >

            <ProjectContent project={project} onBack={handleBack} variant="page" />
        </div>
    );
};