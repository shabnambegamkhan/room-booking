

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

}

window.onscroll = ()=>{
    navbar.classList.remove('active')
}

document.querySelectorAll('.contect .row .faq .box h3').forEach(faqbox =>{
faqbox.onclick = () =>{
   faqbox.classList.toggle('active')
}
});



//////////////////////////////////////////////

// Initialize the Swiper with the updated class name
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500, // Delay between transitions (in ms)
    disableOnInteraction: false, // Continue autoplay after interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev", 
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      // For custom progress display, if needed
      const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");

      if (progressCircle) {
        progressCircle.style.setProperty("--progress", 1 - progress);
      }
      if (progressContent) {
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
  },
});



var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Enable pagination dots to be clickable
  },
  mousewheel: true,
  keyboard: true,
});



var swiper = new Swiper(".review-slider", {
  loop:true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





// const progressCircle = document.querySelector(".autoplay-progress svg");
//  const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".gallery", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});