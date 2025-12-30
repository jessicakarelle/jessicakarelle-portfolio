/*=== First part ====*/
function makeElementVisible(entries) {
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    }
}
var observerOptions = { threshold: 0.1 };
var observer = new IntersectionObserver(makeElementVisible, observerOptions);
var boxes = document.querySelectorAll(".box");
for (var j = 0; j < boxes.length; j++) {
    observer.observe(boxes[j]);
}

/*=== Second part ====*/
function applyParallax() {
    var scrolled = window.pageYOffset;
    var hero = document.querySelector(".hero-section .container");

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = "translateY(" + scrolled * 0.3 + "px)";
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
}
window.addEventListener("scroll", applyParallax);

/*=== Third part ====*/
function animateNumber(element) {
    var targetAttribute = element.getAttribute("data-target");
    if (!targetAttribute) {
        return;
    }
    var number = parseInt(targetAttribute);
    var text = element.textContent;
    var symbol = text.replace(/[0-9]/g, "");
    var count = 0;
    var intervalId = setInterval(function () {
        if (count < number) {
            count++;
            element.textContent = count + symbol;
        } else {
            clearInterval(intervalId);
        }
    }, 20);
}
function startStatsAnimation(entries) {
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
            entry.target.classList.add("animated");
            animateNumber(entry.target);
        }
    }
}
var statsObserver = new IntersectionObserver(startStatsAnimation, { threshold: 0.5 });
var stats = document.querySelectorAll(".stat-number");
for (var k = 0; k < stats.length; k++) {
    statsObserver.observe(stats[k]);
}
