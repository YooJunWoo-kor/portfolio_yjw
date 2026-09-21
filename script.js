const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav a");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
  });
});

const sections = document.querySelectorAll("main section[id]");
const hasInPageNav = [...links].some((link) => link.getAttribute("href")?.startsWith("#"));

if (hasInPageNav && sections.length) {
  const setActive = () => {
    const y = window.scrollY + 120;
    let current = "home";

    sections.forEach((section) => {
      if (section.offsetTop <= y) {
        current = section.id;
      }
    });

    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
}
