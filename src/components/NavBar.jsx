import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    const syncActiveItemToViewport = () => {
        if (!isHome) return;

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
        if (!isHome) return;

        let frame;
        const handleScrollSpy = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(syncActiveItemToViewport);
        };

        window.addEventListener("scroll", handleScrollSpy, { passive: true });
        window.addEventListener("resize", handleScrollSpy);
        syncActiveItemToViewport();

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", handleScrollSpy);
            window.removeEventListener("resize", handleScrollSpy);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHome]);

    useEffect(() => {
        if (!isHome || !location.hash) return;

        const id = location.hash.slice(1);
        let frame;

        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setActiveItem(navItems.find((item) => item.href === location.hash)?.name ?? "Home");
            } else {
                frame = requestAnimationFrame(tryScroll);
            }
        };

        frame = requestAnimationFrame(tryScroll);
        return () => cancelAnimationFrame(frame);
    }, [isHome, location.hash]);

    const handleMenuToggle = () => {
        if (!isMenuOpen) {
            syncActiveItemToViewport();
        }

        setIsMenuOpen((prev) => !prev);
    };

    const handleNavClick = (event, item) => {
        event.preventDefault();
        setIsMenuOpen(false);

        if (isHome) {
            const section = document.querySelector(item.href);
            section?.scrollIntoView({ behavior: "smooth" });
            setActiveItem(item.name);
        } else {
            navigate(`/${item.href}`);
        }
    };

    const linkClassName = (itemName, mobile = false) =>
        cn(
            "relative inline-flex items-center transition-colors duration-300 after:absolute after:left-0 after:bottom-[-0.35rem] after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100",
            mobile ? "text-xl font-medium" : "text-sm font-medium tracking-wide",
            activeItem === itemName ? "text-foreground after:scale-x-100" : "text-foreground/70"
        );

    return (
        <nav className={cn(
            "fixed inset-x-0 top-0 z-[60] border-b border-white/5 bg-[#050816]/85 backdrop-blur-xl transition-all duration-300",
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
                            href={`/${item.href}`}
                            onClick={(event) => handleNavClick(event, item)}
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
                                href={`/${item.href}`}
                                onClick={(event) => handleNavClick(event, item)}
                                aria-current={activeItem === item.name ? "page" : undefined}
                                className={linkClassName(item.name, true)}
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