// -----------Navbar fixed-----------

$(document).ready(function () {
    var lastScroll = 50;
    var window_height = $(window).height();
    $(window).on('scroll load', function (event) {
      var st = $(this).scrollTop();
      if (st > lastScroll) {
        $('.navbarr').addClass('hide-menu');
      } else if (st < lastScroll) {
        $('.navbarr').removeClass('hide-menu');
      } else if ($(window).scrollTop() < window_height && $(window).scrollTop() > 0) {
        $('.navbarr').addClass('hide-menu');
      }
      lastScroll = st;
    });
  
  });
  
  // -----------Navbar slide------------------
  
  var navSlide = function navSlide() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', function () {
      // Toggle nav
      nav.classList.toggle('nav-active'); // Animate Links
  
      navLinks.forEach(function (link, index) {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.7, "s");
        }
      }); // Burger animation
  
      burger.classList.toggle('toggle'); // search.classList.toggle('active');
    });
  };
  
  navSlide();
  
  
  // -----------Search btn--------------
  
  var searchSlide = function searchSlide() {
    var search = document.querySelector('.search-box');
    var searchIcon = document.querySelector('.search-icon');
    // var searchIcon2 = document.querySelector('.search-icon-2');
    var closeIcon = document.querySelector('.closee');
    searchIcon.addEventListener('click', function () {
      // Toggle search
      search.classList.toggle('active');
    });
    // searchIcon2.addEventListener('click', function () {
    //   // Toggle search
    //   search.classList.toggle('active');
    // });
    closeIcon.addEventListener('click', function () {
      // Toggle search
      search.classList.remove('active');
    });
  };
  
  searchSlide();
  
  // --------Header Slide down-----------------
  $(".mouse").click(function(e){
    $("html, body").animate({ scrollTop:700 }, "slow");
  })
  
  // -----------About slider----------------
  $(document).ready(function() {
    // slick carousel
    $('.about-slider').slick({
      dots: true,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      verticalSwiping: true,
      arrows: false,
      autoplay: true
    });
    
    // -----------Review slider----------------
    $('.review-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true
    });
  });
