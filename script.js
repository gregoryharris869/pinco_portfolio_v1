const body = qs("body");
const navbar = qs(".navbar");
const menu = qs(".menu-list");
const menuBtn = qs(".menu-btn");
const cancelBtn = qs(".cancel-btn");

function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
