window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      gsap.to("#to-top", 0.2, {
        x: 0,
      });
    } else {
      gsap.to("#to-top", 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// scroll-toTop(gsap ScrollToPlugin)
const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});
