import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* <ThemeToggle/> */}

        <StarBackground/>

        <NavBar/>

        <main>
            <HeroSection/>
            <AboutSection/>
            <PortfolioSection/>
            <ContactSection/>
          
        </main>

    </div>
}