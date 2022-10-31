// Git menu by id
let menu = document.getElementById("menu");
let navigationMenu = document.getElementById("navMenu");

function menuToggle() {
  if (navigationMenu.style.display == "none") {
    navigationMenu.style.display = "flex";
    navigationMenu.style.right = "0";
    menu.src = "./assets/images/icon-menu-close.svg";
  } else {
    navigationMenu.style.display = "none";
    menu.src = "./assets/images/icon-menu.svg";
  }
}
