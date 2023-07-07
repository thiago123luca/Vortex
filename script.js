var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});



  



  var swiperAnuncios = new Swiper(".anuncios-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    
    breakpoints: {
      590: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      888: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
    
  });

  
  document.querySelector('#img-1').onclick = () =>{
    document.querySelector('#img-1').classList.toggle('active');

  }

  document.querySelector('#img-2').onclick = () =>{
    document.querySelector('#img-2').classList.toggle('active');
  }
  
  document.querySelector('#img-3').onclick = () =>{
    document.querySelector('#img-3').classList.toggle('active');
  }

  document.querySelector('#img-4').onclick = () =>{
    document.querySelector('#img-4').classList.toggle('active');
  }

  document.querySelector('#img-5').onclick = () =>{
    document.querySelector('#img-5').classList.toggle('active');
  }

  document.querySelector('#img-6').onclick = () =>{
    document.querySelector('#img-6').classList.toggle('active');
  }
 