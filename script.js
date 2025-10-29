"use strict";

const fadeIns = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  }
);

fadeIns.forEach((el) => appearOnScroll.observe(el));

// ACCORDION
const questions = document.querySelectorAll(".faq-question");
questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("active");
  });
});

// SETTING THE CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYearEL = new Date().getFullYear();
console.log(currentYearEL);

// TO ADD THE ACTIVE LINK ON EACH ELEMENT
const headerLinks = document.querySelectorAll(".header__link");
headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerLinks.forEach((I) => I.classList.remove("active"));
    link.classList.add("active");
  });
});

// TO MAKE THE NAV BUTTON TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const btnNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".header__link");

  // Toggle nav
  btnNav.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });

  // Close nav when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
    });
  });

  // Optional: close when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
    }
  });
});

// SCROLL TO TOP
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});
console.log("button clicked");

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// FORM SUBMISSION
document.getElementById("emailform").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch("/", {
    method: "POST",
    body: data,
  })
    .then(() => {
      form.style.display = "none";

      document.getElementById("successMessage").style.display = "block";
    })
    .catch((error) => {
      alert("opps! something went wrong.");
      console.log(error);
    });
});
