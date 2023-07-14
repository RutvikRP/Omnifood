///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

console.log("Hello World");
///////////////////////////////////////////////////////////
// SET CURRENT YEAR IN COPYRIGHT
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

console.log(currentYear);
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORKING
const headerEl = document.querySelector(".navigation-bar");
const btnNavEl = document.querySelector(".btn-mobile-nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    const href = link.getAttribute("href");
    // console.log(href);
    // SCROLL BACK TO UP
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    if (href !== "#" && href.startsWith("#")) e.preventDefault();
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // MOBILE NAVIGATION OFF
    if (link.classList.contains("navigation-bars-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// NAVIGATIONBAR STICKY
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (enteries) {
    const ent = enteries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
//////////////////////////////////////////////////////////
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
