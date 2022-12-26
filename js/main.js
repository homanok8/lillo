$(function() {
   var html = '';
   var html2 = '';
   for (var i = 0; i < 3; i++) {
      for (var j = 1; j < 9; j++) {
         html += '<li class="banner__item"><img class="banner__icon" src="images/icons/swiper_icon0' + j + '.png" alt=""></li>';
      }
   }
   for (var i = 0; i < 3; i++) {
      for (var j = 1; j < 9; j++) {
         html2 += '<li class="banner__item"><img class="banner__icon" src="images/icons/swiper_icon0' + j + '.png" alt=""></li>';
      }
   }
   $('.banner__list--left').append(html);
   $('.banner__list--right').append(html2);

   $('.help__tit').click(function () {
      if ($(this).find('.help__btn').hasClass('open')) {
         $('.help__btn').removeClass('open');
         $('.help__txt').removeClass('on');
         $('.help__desc').stop().slideUp();
      } else {
         $('.help__btn').removeClass('open');
         $('.help__txt').removeClass('on');
         $('.help__desc').stop().slideUp();
         $(this).find('.help__btn').addClass('open');
         $(this).find('.help__txt').stop().addClass('on');
         $(this).next().stop().slideDown();
      }
   });

   $('.inquiry__btn').click(function (e) {
      e.preventDefault();
      $('.popup').stop().fadeIn();
      $('body').css({ 'overflow': 'hidden' });
   });
   $('.popup__close').click(function () {
      $('.popup').stop().fadeOut();
      $('body').css({ 'overflow': 'unset' });
   });
   $('.popup').click(function () {
      $('.popup').stop().fadeOut();
      $('body').css({ 'overflow': 'unset' });
   });
   $('.produce__inner').click(function (e) {
      e.stopPropagation();
   });

   $('.play__link').click(function (e) {
      e.preventDefault();
      $('.popup2').stop().fadeIn();
      $('body').css({ 'overflow': 'hidden' });
   });
   $('.detail__close').click(function () {
      $('.popup2').stop().fadeOut();
      $('body').css({ 'overflow': 'unset' });
   });
   $('.popup2').click(function () {
      $('.popup2').stop().fadeOut();
      $('body').css({ 'overflow': 'unset' });
   });
   $('.detail__inner').click(function (e) {
      e.stopPropagation();
   });
});

function readURL(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
         document.getElementById('uploadIcon').src = e.target.result;
         $('#uploadIcon').addClass('upload');
      };
      reader.readAsDataURL(input.files[0]);
   } else {
      document.getElementById('uploadIcon').src = "";
      $('#uploadIcon').removeClass('upload');
   }
}
function readSplashURL(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
         document.getElementById('splashImgFile').src = e.target.result;
         $('#splashImgFile').addClass('upload');
      };
      reader.readAsDataURL(input.files[0]);
   } else {
      document.getElementById('splashImgFile').src = "";
      $('#splashImgFile').removeClass('upload');
   }
}