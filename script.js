const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

  const isOpen = menu.classList.toggle("open");

  menuBtn.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("open");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});
const processSection = document.querySelector(".process");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        // تشغيل الأنيميشن مرة واحدة فقط
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

if (processSection) {
  observer.observe(processSection);
}