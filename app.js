const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const controlLinks = document.querySelectorAll(".controls a");
const heading = document.querySelector(".head");

let i = 0,
  j = 1,
  intervalId;

// Set the initial heading to the alt attribute of the first control image
heading.textContent = controlLinks[0].querySelector("img").alt;

controlLinks.forEach((control) => {
  control.addEventListener("click", () => {
    clearInterval(intervalId);
    carousel.style.rotate = `-${
      (i - j + Number(control.dataset.index)) * 90
    }deg`;

    document.querySelector(".slide.active").classList.remove("active");
    const activeSlide = document.querySelector(
      `.slide:nth-child(${control.dataset.index})`
    );
    activeSlide.classList.add("active");

    document.querySelector("a.active").classList.remove("active");
    control.classList.add("active");

    // Update the h1 text based on the alt attribute of the control image
    heading.textContent = control.querySelector("img").alt;
  });
});
