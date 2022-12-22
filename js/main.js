$(function() {
   var html = '';
   for (var i = 0; i < 3; i++) {
      for (var j = 1; j < 8; j++) {
         html += '<li class="banner__item"><img class="banner__icon" src="images/icons/swiper_icon0' + j + '.png" alt=""></li>';
      }
   }
   $('.banner__list').append(html);

   $('.help__btn').click(function () {
      if ($(this).hasClass('open')) {
         $('.help__btn').removeClass('open');
         $('.help__txt').removeClass('on');
         $('.help__desc').stop().slideUp();
      } else {
         $('.help__btn').removeClass('open');
         $('.help__txt').removeClass('on');
         $('.help__desc').stop().slideUp();
         $(this).addClass('open');
         $(this).prev().find('.help__txt').stop().addClass('on');
         $(this).parents('.help__tit').next().stop().slideDown();
      }
   });
});