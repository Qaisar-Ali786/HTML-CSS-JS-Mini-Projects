/*=========================================
INITIALIZE AOS
=========================================*/

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

/*=========================================
TYPING ANIMATION
=========================================*/

new Typed("#typing", {
  strings: [
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Software Engineering Student",
  ],
  typeSpeed: 70,
  backSpeed: 45,
  backDelay: 1800,
  loop: true,
});

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = '<i class="ri-close-line"></i>';
  } else {
    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
  });
});

/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progressHeight = (window.pageYOffset / totalHeight) * 100;

  progress.style.width = progressHeight + "%";
});

/*=========================================
SCROLL TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*=========================================
NAVBAR SCROLL EFFECT
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "rgba(15,23,42,.95)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    header.style.background = "rgba(15,23,42,.7)";
    header.style.boxShadow = "none";
  }
});

/*=========================================
ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/*=========================================
SKILL BAR ANIMATION
=========================================*/

const bars = document.querySelectorAll(".bar span");

const animateBars = () => {
  bars.forEach((bar) => {
    const width = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
};

const skillSection = document.querySelector("#skills");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateBars();
    }
  });
});

observer.observe(skillSection);

/*=========================================
HERO IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;

  const y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform = `translate(${x}px,${y}px)`;
});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    const x = e.clientX - this.offsetLeft;

    const y = e.clientY - this.offsetTop;

    ripple.style.left = x + "px";

    ripple.style.top = y + "px";

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

/*=========================================
FADE ELEMENTS ON LOAD
=========================================*/

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

/*=========================================
CURRENT YEAR IN FOOTER
=========================================*/

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Qaisar Ali | Frontend Developer`;

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log(
  "%cPortfolio by Qaisar Ali 🚀",
  "color:#3b82f6;font-size:20px;font-weight:bold;",
);
