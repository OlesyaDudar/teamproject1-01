const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1.4,
  spaceBetween: 25,
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
