const swiper = new Swiper('.classicKitchen-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },
      // keyboard: {
      //   enabled: true,
      //   onlyInViewport: true,
      //   pageUpDown: true,
      // },
      slidesPerView: 2.1,
      spaceBetween: 15,
      loop: true,
      centeredSlides: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2.1,
          spaceBetween: 15
        }
      },
});

const neoSwiper = new Swiper('.NeoClassicKitchen-slider',{
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: true,
    //   pageUpDown: true,
    // },
    slidesPerView: 2.1,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.1,
        spaceBetween: 15
      },
    }
});
const modernSwiper = new Swiper('.ModernKitchen-slider',{
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: true,
    //   pageUpDown: true,
    // },
    slidesPerView: 2.1,
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2.1,
        spaceBetween: 15
      },
    }
});
const getProjectSwiper = new Swiper('.getProject-slider',{
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: true,
    //   pageUpDown: true,
    // },
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});

$(document).ready(function(){
  $("html, body").click(function(){
    $("a.menu__nav-list-links-item").removeClass("activeItem");
  });
  $("a.menu__nav-list-links-item").click(function(){
    var offset = $(".menu__nav-list").innerHeight();
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - offset
    }, { 
      duration: 1000,
      easing: "swing"
    });
    $("a.menu__nav-list-links-item").removeClass("activeItem");
    $(this).addClass("activeItem");
    return false;
  });
});

$(document).ready(function(){
  $("a.btnOrder").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, { 
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});

$(document).ready(function(){
  $("a.rightSide-btn").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, { 
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});

$(document).ready(function(){
  $("a.bannerbox-btn-link").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, { 
      duration: 2000,
      easing: "swing"
    });
    return false;
  });
});

$(document).ready(function() {
  $('body').on('click', '.dropdownCity li span', function(e) {
      var value = $(this).html();
      $("#city").val(value);
  });
  });
  $(document).ready(function() {
    $('body').on('click', '.dropdownCity2 li span', function(e) {
        var value = $(this).html();
        $("#appCity").val(value);
    });
    });