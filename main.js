const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var navToggle = $('.nav-toggle');
var main = $('.main');
var skillBars = $$('.skill__bar');
var skillPercent = $$('.skill__percent');

for (var i in skillBars) {
    skillBars[i].style.width = skillPercent[i].innerText;
}

navToggle.onclick = function () {
    var navToggleIcon = $('.nav-toggle-icon');
    var navToggleIconActived = $('.nav-toggle-icon-actived');
    navToggleIcon.classList.toggle('display-none');
    navToggleIconActived.classList.toggle('display-none');
    main.classList.toggle('nav-active')
    document.addEventListener('scroll', function () {
        main.classList.remove('nav-active');
        navToggleIcon.classList.remove('display-none');
        navToggleIconActived.classList.add('display-none');
    });
}
