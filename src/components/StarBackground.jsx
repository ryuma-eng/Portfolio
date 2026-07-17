import { useEffect, useState } from "react";

export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);// Adjust the number of stars as needed

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1, // Random size between 1 and 3
                opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Random duration between 5s and 10s
            });
        } 
        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: Math.random() * 3 + 1, // Random size between 1 and 3
                delay: Math.random() * 15, // Random delay between 0.5s and 1s
                animationDuration: Math.random() * 3 + 3 // Random duration between 5s and 10s
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`
                }} />
            ))} */}

            {/* {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: `${meteor.size * 50}px`,
                    height: `${meteor.size}px`,
                    left: `${meteor.x}%`,
                    top: `${meteor.y}%`,
                    animationDelay: `${meteor.delay}s`,
                    animationDuration: `${meteor.animationDuration}s`
                }} />
            ))} */}
        </div>
    )
}