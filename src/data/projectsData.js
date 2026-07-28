import inventrackImg from "../assets/portfolio/projects/inventrack.png";
import skincipherImg from "../assets/portfolio/projects/skincipher.png";
import mitigationMenImg from "../assets/portfolio/projects/mitigationmen.png";

export const projectsData = {
    inventrack: {
        slug: "inventrack",
        title: "InvenTrack",
        description: "A web-based Point-of-Sale (POS) and Inventory Management System that streamlines sales transactions, manages real-time inventory updates, and provides analytical insights to support better business decisions. The system enables efficient product management, stock monitoring, item movement analysis, seasonal sales tracking, printable receipts, and performance reports to improve inventory planning and overall operational efficiency.",
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
            "Sales Quota Tracking",
        ],
    },
    skincipher: {
        slug: "skincipher",
        title: "SkinCipher",
        description: "A web-based e-commerce platform that provides customers with a seamless shopping experience by allowing them to browse, explore, and purchase skincare products online. The system offers convenient product discovery, secure transactions, and an organized product management process to improve customer engagement and enhance the overall online shopping experience.",
        image: skincipherImg,
        liveDemo: "", 
        repository: "https://github.com/ryuma-eng/SkinCipher.git", 
        techStack: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"], 
        keyFeatures: [
            "Product Catalog",
            "Order Management",
            "Responsive Design"

        ],
    },
    mitigationmen: {
        slug: "mitigationmen",
        title: "Mitigation Men",
        description: "A web-based platform that showcases professional mitigation and restoration services, allowing clients to explore the company's expertise, learn about available services, request assistance, and easily connect with the team. The platform provides service information, project showcases, and convenient communication channels to improve customer engagement and streamline service inquiries.",
        image: mitigationMenImg,
        liveDemo: "https://mitigationmen.com/", 
        repository: "", 
        techStack: ["Wordpress", "Spectra", "Astra"], 
        keyFeatures: [
            "Service Showcase",
            "Company Profile",
            "Service Request Form",
            "Responsive Design"
        ],
    },
};

export const getProjectBySlug = (slug) => projectsData[slug] ?? null;