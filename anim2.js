const Password = document.querySelectorAll("h1 span");
const btns = document.querySelectorAll(".btn-first");
const btns2 = document.querySelectorAll("#btn-first");
const search = document.querySelectorAll(".password_box");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(titre, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.3)
    .staggerFrom(btns, 1, { opacity: 0, ease: "power2.out" }, 0.3, "-=1")
    .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .from(search, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2");

  TL.play();
});
