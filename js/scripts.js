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

document.querySelectorAll('.stat-number').forEach((stat) => {
    const text = stat.textContent;
    const num = parseInt(text);
    
    if (!isNaN(num)) {
        let n = 0;
        
        function count() {
            if (n < num) {
                n++;
                stat.textContent = n + text.replace(num, '');
                setTimeout(count, 20);
            }
        }
        
        count();
    }
});