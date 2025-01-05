
/* Timeline */
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}

/* Loading bar delay */
document.addEventListener("DOMContentLoaded", function () {
  // Set the delay in milliseconds (e.g., 5000ms = 5 seconds)
  const delay = 5000;

  // Show the loader after the delay
  setTimeout(() => {
      document.querySelector(".loader").style.display = "block";
  }, delay);
});
