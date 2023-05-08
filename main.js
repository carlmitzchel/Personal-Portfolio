const mainContainer = document.getElementById("main-container");
let prevScrollPos = mainContainer.scrollTop;

mainContainer.addEventListener("scroll", () => {
  const currentScrollPos = mainContainer.scrollTop;
  const scrollDiff = currentScrollPos - prevScrollPos;
  window.scrollBy(0, scrollDiff);
  prevScrollPos = currentScrollPos;
});

const imgHide = document.querySelector(".img-hide");
const imgHover = document.querySelector(".img-hover");

imgHide.addEventListener("mouseover", () => {
  // Make the img-hide element disappear
  imgHide.style.display = "none";

  // Make the img-hover element visible
  imgHover.style.display = "block";

  // Add a calm animation to the img-hover element
  imgHover.style.animation = "calm 1s ease-in-out forwards";

  // Set a timeout to change back the image after the animation ends
  setTimeout(() => {
    // Add a smooth animation when the img-hover element is going back to the old image
    imgHover.style.animation = "smooth-back 0.5s ease-in-out forwards";

    // Set a timeout to change the image back to the old one after the animation ends
    setTimeout(() => {
      imgHide.style.display = "block";
      imgHover.style.display = "none";
      imgHover.style.opacity = "1";
    }, 500);
  }, 2000);
});

// Define the animation styles using CSS styles
const styles = `
  @keyframes calm {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.2) rotate(45deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes smooth-back {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

// Add the animation styles to the document head
const styleSheet = document.createElement("style");
styleSheet.innerHTML = styles;
document.head.appendChild(styleSheet);
