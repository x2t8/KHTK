document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");
  const closeBtn = document.querySelector(".close-menu");

  function showMenu() {
    menu.classList.remove("animate-out");
    menu.classList.add("show", "animate-in");
    menuIcon.classList.add("hide");
  }

  function hideMenu() {
    menu.classList.remove("animate-in");
    menu.classList.add("animate-out");
    setTimeout(() => {
      menu.classList.remove("show");
    }, 300); // trùng thời gian animation
    menuIcon.classList.remove("hide");
  }

  menuIcon?.addEventListener("click", (e) => {
    e.stopPropagation();
    showMenu();
  });

  closeBtn?.addEventListener("click", hideMenu);

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
      hideMenu();
    }
  });
});
