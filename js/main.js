$(document).ready(function(){

      /*----Выбор языка-----*/

    $('.language_select').click(function(){
        $(this).toggleClass('open');
        $('.language_select_block').toggleClass('open');
        })
        
        $('.language_select li').click(function(){
              $('.language_select li').removeClass('active');
              $(this).toggleClass('active');
        })
      
        /*----Выбор валюты-----*/

        $('.currency_select').click(function(){
            $(this).toggleClass('open');
            $('.currency_select_block').toggleClass('open');
            })
            
            $('.currency_select li').click(function(){
                  $('.currency_select li').removeClass('active');
                  $(this).toggleClass('active');
            })

            /*----Работа мобильного меню-----*/

            $('.menu-burger__header').click(function() {
                  $('.menu-burger__header').toggleClass('open-menu');
                  $('.header_menu').toggleClass('open-menu');
                  $('body').toggleClass('fixed-page');
            });


            /*-----Включение Даты обратной поездки------*/
$('#return').click(function(){
      if ($(this).is(':checked')){
            $('.search_hide_field').addClass('show');
            $('.checked_field').addClass('hide');
      } else {
            $('.search_hide_field').removeClass('show');
            $('.checked_field').removeClass('hide');
      }
      });

      $('.close_return_date').click(function(){
            $('.search_hide_field').removeClass('show');
            $('.checked_field').removeClass('hide');
            $('#return').prop('checked', false);

      });

 
      
           

});

 /*-----Слайдер популярные маршруты в мобильной версии------*/
 $(window).on('load resize', function() {
 if ($(window).width() <= '480'){
      $('.popular_slider').slick({
            dots: false,
            slidesToShow: 1,
            speed: 1000,
            infinite: false,
            variableWidth: true
      });
      }  else {
      $(".popular_slider").slick("unslick");
      }

      
      

});


function windowSize3(){
	if ($(window).width() <'550'){
	$( ".header_navbar ul" ).append( $(".phones") );
		
	}
}
$(window).on('load resize',windowSize3);