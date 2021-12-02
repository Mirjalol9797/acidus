// slider client block

$('.client_slider').slick({
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  accessibility:false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 601,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
//slider end

//slider customer block
$('.customer__slider').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  accessibility:false
});
// slider end

// animation
AOS.init({
  disable: 'phone',
  offset: 100,
  anchorPlacement: 'top-center'
});

// animation end



