const navToggle = document.querySelector("[data-nav-toggle]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-nav] a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionVideos = document.querySelectorAll("[data-motion-video]");

function syncMotionPreference(event) {
  motionVideos.forEach((video) => {
    if (event.matches) {
      video.pause();
      video.removeAttribute("autoplay");
    } else {
      video.setAttribute("autoplay", "");
      video.play().catch(() => {});
    }
  });
}

syncMotionPreference(reduceMotion);
reduceMotion.addEventListener("change", syncMotionPreference);
