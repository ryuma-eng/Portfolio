import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const syncActiveItemToViewport = () => {
        const viewportCenter = window.scrollY + window.innerHeight * 0.45;

        const currentItem = navItems.reduce((current, item) => {
            const section = document.querySelector(item.href);

            if (!section) {
                return current;
            }

            const sectionTop = section.getBoundingClientRect().top + window.scrollY;

            if (viewportCenter >= sectionTop) {
                return item;
            }

            return current;
        }, navItems[0]);

        setActiveItem(currentItem.name);
    };

    useEffect(() => {
        const handleScroll = () => {

            setIsScrolled(window.scrollY > 10);

        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

                if (!visibleEntry) {
                    return;
                }

                const currentItem = navItems.find((item) => item.href === `#${visibleEntry.target.id}`);

                if (currentItem) {
                    setActiveItem(currentItem.name);
                }
            },
            {
                threshold: [0.2, 0.4, 0.6],
                rootMargin: "-18% 0px -60% 0px",
            }
        );

        const sections = navItems
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        sections.forEach((section) => observer.observe(section));

        syncActiveItemToViewport();

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleMenuToggle = () => {
        if (!isMenuOpen) {
            syncActiveItemToViewport();
        }

        setIsMenuOpen((prev) => !prev);
    };

    const linkClassName = (itemName, mobile = false) =>
        cn(
            "relative inline-flex items-center transition-colors duration-300 after:absolute after:left-0 after:bottom-[-0.35rem] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100",
            mobile ? "text-xl font-medium" : "text-sm font-medium tracking-wide",
            activeItem === itemName ? "text-foreground after:scale-x-100" : "text-foreground/70"
        );

    return (
        <nav className={cn(
            "fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#050816]/85 backdrop-blur-xl transition-all duration-300",
            isScrolled ? "py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]" : "py-4"
        )}>

            <div className="container relative flex items-center justify-between md:static md:flex-row">
                <a className="flex items-center text-xl font-bold tracking-tight text-white" href="/">
                    <span className="relative z-10">
                        Code by <span className="text-primary">RJ</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-10 lg:gap-12">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={activeItem === item.name ? "page" : undefined}
                            className={linkClassName(item.name)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button
                    onClick={handleMenuToggle}
                    className="z-50 p-2 text-white md:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn(
                    "fixed inset-0 z-40 flex min-h-screen flex-col items-center justify-center bg-[#050816]/98 backdrop-blur-xl md:hidden",
                    "transition-all duration-300",
                    isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}>

                    <div className="flex w-full flex-col items-center justify-center gap-5 text-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-current={activeItem === item.name ? "page" : undefined}
                                className={linkClassName(item.name, true)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                </div>
          
         
            </div>


          
        </nav>
    )
}