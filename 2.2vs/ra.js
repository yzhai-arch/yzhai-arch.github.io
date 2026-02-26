const enter = document.querySelector(".enter");
const enter1 = document.querySelector(".enter1");

enter.addEventListener("mouseenter", () => {
  enter1.style.backgroundImage = 'url("enter2.PNG")';
});

enter.addEventListener("mouseleave", () => {
  enter1.style.backgroundImage = 'url("enter1.PNG")';
});
enter.addEventListener("click", () => {
  enter.style.display = "none";
  enter1.style.display = "none";
});