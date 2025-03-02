// Initialize particles using local file
particlesJS("particles-js", {
    particles: {
        number: { value: 200 }, // More particles
        size: { value: 0, random: true }, // Different sizes
        move: { 
            speed: 2, 
            direction: "none", 
            out_mode: "bounce" 
        },
        shape: {
            type: ["circle"], // Variety of shapes
        },
        opacity: { value: 0.9, random: true },
        color: {
            value: ["#9c4cd9"], // Colorful particles
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#9c4cd9",
            opacity: 21.6,
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse", // Moves away when hovered
            },
            onClick: {
                enable: true,
                mode: "push", // Clicking adds more particles
            }
        },
        modes: {
            repulse: {
                distance: 120,
                duration: 0.5,
            },
            push: {
                quantity: 5, // Add 5 particles on click
            }
        }
    }
});

// Redirect Sneak Peaks button
document.getElementById("sneak-peaks").addEventListener("click", () => {
    window.location.href = "sneak-peaks.html";
});
