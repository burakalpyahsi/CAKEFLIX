const arrowEl = document.querySelectorAll(".arrow");
const movieListEl = document.querySelectorAll(".movie-list");

arrowEl.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageItemNumbEl = movieListEl[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItemNumbEl - (5 + clickCounter) + (5- widthRatio)>= 0) {
      clickCounter++;
      movieListEl[i].style.transform = `translateX(${
        movieListEl[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieListEl[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  
});

/* dark mode */

const ballEl = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

ballEl.addEventListener("click", function () {    
  items.forEach((item) => item.classList.toggle("active"));
});
