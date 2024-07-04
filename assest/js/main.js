// window.onscroll = function() {myFunction()};
        
// var header = document.getElementById("navbar_id");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
$(window).scroll(function() {
  if($(this).scrollTop() > 80){
    $('header').addClass("sticky");
  } else {
    $('header').removeClass("sticky");
  }
});

    // Mobile Menu Sidebarl
$(".mobmenu_action").click(function(){
    $(".menu").addClass("show");
});
$(".mobmenu_action").click(function(){
  $(".main-btn").addClass("show");
});
$(".menu .close_btn").click(function(){
    $(".menu").removeClass("show");
    $(".main-btn").removeClass("show");
});


//slide our-product
var swiper = new Swiper(".our_slide", {
  slidesPerView: 1,
  spaceBetween: 35,
  loop:false,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: ".our_next",
    prevEl: ".our_prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      767: {
        slidesPerView:2,
      },
      1199:{
        slidesPerView:3,
      },
  },
});
//slide client-testimonial
  var swiper = new Swiper(".client_slide", {
    slidesPerView: 0,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'false',
    grabCursor: 'false',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".client_next",
        prevEl: ".client_prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
       768:{
        slidesPerView:2,
       },
        950: {
            slidesPerView: 2,
        },
    },
});

//software
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: false
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

//*** Back To Top ***//
$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    $('.scroll-top').addClass('show');
  } else {
    $('.scroll-top').removeClass('show');
  } 
});
$(document).ready(function(){
  $(document).on("click",'.scroll-top',function(){    
    $('html, body').animate({scrollTop:0}, '400');
  });
});