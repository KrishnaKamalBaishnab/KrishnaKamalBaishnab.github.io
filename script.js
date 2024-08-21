function toggleMenu() {
  const menu = document.querySelector(".menu-links"); //targeting the whole menu-links div
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
