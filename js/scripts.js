function revealBoxes() {
    document.querySelectorAll(".box").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealBoxes);
window.addEventListener("load", revealBoxes);
