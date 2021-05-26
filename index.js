const toggleNav = () => {
  const navIcon = document.querySelector(".nav-res");
  const nav = document.querySelector(".navigation");

  navIcon.addEventListener("click", () => {
    nav.classList.add("active");
  });
};
