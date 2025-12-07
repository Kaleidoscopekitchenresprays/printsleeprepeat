/* ============================================
   Print Sleep Repeat - JavaScript Core
   ============================================ */

// Smooth scrolling for internal page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Placeholder for future features (gallery expansion, effects, etc.)
console.log("Print Sleep Repeat site loaded.");
