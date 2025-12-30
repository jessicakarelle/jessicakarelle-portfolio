
            // Intersection Observer pour les animations
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                        }
                    });
                },
                { threshold: 0.1 }
            );

            document.querySelectorAll(".box").forEach((el) => {
                observer.observe(el);
            });

