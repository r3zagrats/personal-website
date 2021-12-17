const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navToggle = $(".nav-toggle");
const main = $(".main");
const skillBars = $$(".skill__bar");
const skillPercent = $$(".skill__percent");

const skillBarArray = [...skillBars];
const skillPercentArray = [...skillPercent];

for (const i in skillBarArray) {
  skillBarArray[i].style.width = skillPercentArray[i].innerText;
}

navToggle.onclick = function () {
  var navToggleIcon = $(".nav-toggle-icon");
  var navToggleIconActived = $(".nav-toggle-icon-actived");
  navToggleIcon.classList.toggle("display-none");
  navToggleIconActived.classList.toggle("display-none");
  main.classList.toggle("nav-active");
  document.addEventListener("scroll", function () {
    main.classList.remove("nav-active");
    navToggleIcon.classList.remove("display-none");
    navToggleIconActived.classList.add("display-none");
  });
};
