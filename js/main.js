// navbar-shrink////////////////////////////////////////////
// window.addEventListener("scroll", function () {
//   shrink();
// });

// let navbar = document.querySelector("header");

// function shrink() {
//   if (scrollY > 100) {
//     navbar.classList.add("navbar-shrink");
//   } else {
//     navbar.classList.remove("navbar-shrink");
//   }
// }
/// dark//////////////////////////////////////////////////
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
//backtop/////////////////////////////////////////////////
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
//responsive navbar//////////////////////////////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
