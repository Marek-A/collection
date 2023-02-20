// ========================= sticky navbar =========================

// let header = document.querySelector("header");

// header.classList.toggle("sticky", window.scrollY > 100);

// ========================= toggle icon navbar =========================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onClick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ========================= scroll section active link =========================

// let sections = document.querySelectorAll("section");
// let navlinks = document.querySelectorAll("head nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

  // ========================= remove toggle icon and navbar when x clicked =========================


// ========================= scroll reveal =========================

// ScrollReveal({
//   reset: true,
//   distance: "80px",
//   duration: 2000,
//   delay: 200,
// });

// ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
// ScrollReveal().reveal(".home-img, .portfolio-box, .contact form", {
//   origin: "bottom",
// });
// ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
// ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ========================= typed js =========================

// const typed = new Typed(".multiple - text", {
//   strings: ["Frontend Developer"],
//   typespeed: 125,
//   backSpeed: 150,
//   backdelay: 1500,
//   loop: true,
// });
