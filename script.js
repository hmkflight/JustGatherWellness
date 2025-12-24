function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1.2",
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
      keyboard: true,
      loop:true,
      speed: 800
});


var menu = document.querySelector(".ri-menu-line");
var close = document.querySelector(".ri-close-line");
var navbar = document.querySelector(".subnav");

menu.addEventListener("click",function(){
  navbar.style.top="0%";
})

close.addEventListener("click",function(){
  navbar.style.top="-109%";
})


var Store = document.querySelector("#Store");
var hovermenu = document.querySelector(".nav3");

Store.addEventListener("mousemove",function(){
  hovermenu.style.top="5%";
})

Store.addEventListener("mouseleave",function(){
  hovermenu.style.top="-100%";
})


// ==========================================
// PREMIUM CINEMATIC ANIMATIONS
// ==========================================

// Smooth cinematic easing
const cinematicEase = "power2.out";
const slowEase = "power1.inOut";

// 1. HERO SECTION - Initial Load Animation
gsap.from(".hero .hero-section-p h2", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: cinematicEase,
  delay: 0.3
});

gsap.from(".hero .hero-section-p h3", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: cinematicEase,
  delay: 0.5
});

gsap.from(".hero .hero-section-p .links", {
  y: 30,
  opacity: 0,
  duration: 1.2,
  ease: cinematicEase,
  delay: 0.7
});

// 2. NAV GLASS EFFECT ON SCROLL
ScrollTrigger.create({
  trigger: "body",
  start: "100px top",
  scroller: "body",
  onEnter: () => {
    gsap.to("nav", {
      background: "rgba(249, 247, 244, 0.98)",
      duration: 0.6,
      ease: slowEase
    });
  },
  onLeaveBack: () => {
    gsap.to("nav", {
      background: "rgba(249, 247, 244, 0.92)",
      duration: 0.6,
      ease: slowEase
    });
  }
});

// 3. HERO SECTIONS - Parallax Reveal
gsap.utils.toArray([".hero-section2", ".hero-section3"]).forEach((section) => {
  gsap.from(section.querySelector(".hero-section-p"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 30%",
      scroller: "body",
      scrub: false
    },
    y: 80,
    opacity: 0,
    duration: 1.4,
    ease: cinematicEase
  });
});

// 4. CARD SECTIONS - Stagger Reveal (Section 4, 5, 6)
gsap.utils.toArray([".hero-section4"]).forEach((section) => {
  const cards = section.querySelectorAll(".hero-section3");

  gsap.from(cards, {
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      scroller: "body",
      scrub: false
    },
    y: 100,
    opacity: 0,
    duration: 1.3,
    stagger: 0.2,
    ease: cinematicEase
  });
});

// 5. SLIDER SECTION - Gentle Fade In
gsap.from(".slider", {
  scrollTrigger: {
    trigger: ".slider",
    start: "top 80%",
    scroller: "body",
    scrub: false
  },
  opacity: 0,
  y: 60,
  duration: 1.5,
  ease: cinematicEase
});

// 6. FOOTER - Subtle Reveal
gsap.from(".minimal-footer", {
  scrollTrigger: {
    trigger: ".minimal-footer",
    start: "top 90%",
    scroller: "body",
    scrub: false
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: cinematicEase
});

// 7. LINKS HOVER - Smooth Scale (Premium Touch)
document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("mouseenter", function() {
    gsap.to(this, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", function() {
    gsap.to(this, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
