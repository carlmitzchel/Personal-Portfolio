const mainContainer = document.getElementById("main-container");
let prevScrollPos = mainContainer.scrollTop;

mainContainer.addEventListener("scroll", () => {
  const currentScrollPos = mainContainer.scrollTop;
  const scrollDiff = currentScrollPos - prevScrollPos;
  window.scrollBy(0, scrollDiff);
  prevScrollPos = currentScrollPos;
});
