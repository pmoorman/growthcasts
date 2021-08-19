document.addEventListener("DOMContentLoaded", function () {
  const config = {
    // How much of the element needs to be in viewport to trigger intersection (between 0 and 1)
    root: null,
    rootMargin: "-40% 0px -40% 0px",
    threshold: 0,
  };

  // Create new Intersection Observer
  const observer = new IntersectionObserver(handler, config);

  function handler(entries, observer) {
    for (entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    }
  }

  // Selecting multiple elements to observe
  const elements = document.querySelectorAll(".active-in-view");
  // Adding observer on each element
  elements.forEach((element) => {
    observer.observe(element);
  });
});
