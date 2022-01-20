// Resources
/*
// --------------------------------------------------------------------
// for the yoda developers out there
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting
// --------------------------------------------------------------------
*/
const sections = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];

const options = {
  threshold: 0.7, // when 70% of a section is passed then change the color of the transition
};

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) {
  entries.forEach(function (entry) {
    // console.log(entry);
    const className = entry.target.className; // grabs the target (about, home, etc. )
    const activeLink = document.querySelector(`[data-page="${className}"`);
    const elementIndex = entry.target.getAttribute("data-index");
    const coordinates = activeLink.getBoundingClientRect();
    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };

    if (entry.isIntersecting) {
      trans.style.setProperty("height", `${directions.height}px`);
      trans.style.setProperty("width", `${directions.width}px`);
      trans.style.setProperty("top", `${directions.top}px`);
      trans.style.setProperty("left", `${directions.left}px`);
      trans.style.backgroundColor = gradients[elementIndex];
    }
  });
}

sections.forEach(function (section) {
  observer.observe(section);
});
