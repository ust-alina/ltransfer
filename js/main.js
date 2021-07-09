$(document).ready(function(){

      /*----Выбор языка-----*/

    $('.language_select_block').click(function(){
        $('.language_select').toggleClass('open');
        $(this).toggleClass('open');
        })
        
        $('.language_select li').click(function(){
              $('.language_select li').removeClass('active');
              $(this).toggleClass('active');
        })
      
        /*----Выбор валюты-----*/

        $('.currency_select_block').click(function(){
            $(this).toggleClass('open');
            $('.currency_select').toggleClass('open');
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

      
            /*-----Включение Даты обратной поездки поиск маршрута------*/
      $('#seach_return').click(function(){
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
            $('#seach_return').prop('checked', false);

      });

      if ($(".marshrut_obratno").length){
            $('#seach_return').prop('checked', true);
            $('.search_hide_field').addClass('show');
            $('.checked_field').addClass('hide');
      }

  /*-----Смена местами Поеду из Поеду В------*/

      $('.button_swap').click(function () {
            var v1 = $('#from').val(),
                v2 = $('#to').val();
            $('#from').val(v2);
            $('#to').val(v1);
        });


         /*-----Смена местами Поеду из Поеду В СТРАНИЦА ПОИСКА МАРШРУТОВ------*/

      $('.button_swap').click(function () {
            var v1 = $('#seach_from').val(),
                v2 = $('#seach_to').val();
            $('#seach_from').val(v2);
            $('#seach_to').val(v1);
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
   
       /*-----Форма странца маршрутов------*/
      
      /*-----Включение Даты обратной поездки------*/
$('#page_return').click(function(){
      if ($(this).is(':checked')){
            $('.page_search_hide_field').addClass('show');
            $('.page_checked_field').addClass('hide');
      } else {
            $('.page_search_hide_field').removeClass('show');
            $('.page_checked_field').removeClass('hide');
      }
      });

      $('.page_close_return_date').click(function(){
            $('.page_search_hide_field').removeClass('show');
            $('.page_checked_field').removeClass('hide');
            $('#page_return').prop('checked', false);

      });

      /*--МЕНЮ АККОРДИОН НА ИНФОРМАЦИОННОЙ СТРАНИЦЕ--*/

      $('.toggle_menu_title').on('click', function() {
		$('.toggle_menu_title').not(this).removeClass('toggle_menu_active')
		  .not(this).next().removeClass('toggle_menu_active');
		$(this).toggleClass('toggle_menu_active');
		$(this).next().toggleClass('toggle_menu_active');
	});

       /*--МЕНЮ САЙДБАРА В МОБИЛЬНОЙ ВЕРСИИ--*/

       $('.sidebar-menu-switch').on('click', function() {
		$(this).toggleClass('open');
		$('.sidebar_menu').toggleClass('open');
	});

      /*--ФИКСИРОВАНИЕ МЕНЮ САЙДБАРА В МОБИЛЬНОЙ ВЕРСИИ--*/
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.sidebar').addClass("fixed");
		} else {
			$('.sidebar').removeClass("fixed");
		}
	});


      /*----ВКлючение кнопки оформить страница маршрута---*/

      $('#select_price-1').click(function(){
            if ($(this).is(':checked')){
                  $('.dva-varianta .poisk_marshrutov_button').css("display", "flex");
                  $('#select_price-2').removeAttr("checked");


            } else {
                  $('.dva-varianta .poisk_marshrutov_button').css("display", "none");
            }
      });

      $('#select_price-2').click(function(){
            if ($(this).is(':checked')){
                  $('.dva-varianta .poisk_marshrutov_button').css("display", "flex");
                  $('#select_price-1').removeAttr("checked");


            } else {
                  $('.dva-varianta .poisk_marshrutov_button').css("display", "none");
            }
      });

      var adultPrice = $('#adult_price').val();
      var childPrice = $('#child_price').val();
      var babyPrice = $('#baby_price').val();
      $('.adult_price').text(adultPrice);

      var result = 50;
      $('#calc_result').val(result);
      $('.result_text').text(result);
      var adultPriceNum = parseInt(adultPrice);
      var childPriceNum = parseInt(childPrice);
      var babyPriceNum = parseInt(babyPrice);
    

       function calcResult() {
            
            var adultCount = $('.oformlenie_form_fields_adult .field').length;
            var childCount = $('.oformlenie_form_fields_child .field').length;
            var babyCount = $('.oformlenie_form_fields_baby .field').length;
            result = (adultCount * adultPriceNum) + (childCount * childPriceNum) + (babyCount * babyPriceNum);
            $('#calc_result').val(result);
            $('.result_text').text(result);
        }




      //Оформление заказа счетчик взрослый

      function catalogItemCounterAdult(field){
			
            var fieldCount = function(el) {
        
                var 
                    // Мин. значение
                    min = el.data('min') || false,
        
                    // Макс. значение
                    max = el.data('max') || false, 
        
                    // Кнопка уменьшения кол-ва
                    dec = el.prev('.dec'), 
        
                    // Кнопка увеличения кол-ва
                    inc = el.next('.inc');
        
                function init(el) {
                    if(!el.attr('disabled')){
                        dec.on('click', decrement);
                        inc.on('click', increment);
                    }
        
                    // Уменьшим значение
                    function decrement() {
                        var value = parseInt(el[0].value);
                        value--;
        
                        if(value >= min) {
                            el[0].value = value;
                            $('.oformlenie_form_fields_adult .oformlenie_form_field_price:last-child').remove();
                            calcResult();
                        } 
                    };
        
                    // Увеличим значение
                    function increment() {
                        var value = parseInt(el[0].value);
                            
                        value++;
        
                        if(!max || value <= max) {
                            el[0].value = value++;
                            var number = value - 1;
                            $('.oformlenie_form_fields_adult').append('<div class="oformlenie_form_field_price"><div class="oformlenie_form_field"><label>Ф.И.О. Взрослого пассажира:* </label><input class="field" name="name_adult-' + number +'"><div class="error">Заполните обязательное поле</div></div><span class="form_price">Цена: <span class="adult_price">' + adultPrice + '</span> BYN</span></div>');
                            calcResult();
                        }
                    };
                    
                }
        
                el.each(function() {
                    init($(this));
                });
            };
        
            $(field).each(function(){
                fieldCount($(this));
            });
      }
        
        catalogItemCounterAdult('.adult_value');
      

        //Оформление заказа счетчик ребенок

      function catalogItemCounterChild(field){
			
            var fieldCount = function(el) {
        
                var 
                    // Мин. значение
                    min = el.data('min') || false,
        
                    // Макс. значение
                    max = el.data('max') || false, 
        
                    // Кнопка уменьшения кол-ва
                    dec = el.prev('.dec'), 
        
                    // Кнопка увеличения кол-ва
                    inc = el.next('.inc');
        
                function init(el) {
                    if(!el.attr('disabled')){
                        dec.on('click', decrement);
                        inc.on('click', increment);
                    }
        
                    // Уменьшим значение
                    function decrement() {
                        var value = parseInt(el[0].value);
                        value--;
        
                        if(value >= min) {
                            el[0].value = value;
                            $('.oformlenie_form_fields_child .oformlenie_form_field_price:last-child').remove();
                            calcResult();
                        } 
                    };
        
                    // Увеличим значение
                    function increment() {
                        var value = parseInt(el[0].value);
                            
                        value++;
        
                        if(!max || value <= max) {
                            el[0].value = value++;
                            var number = value - 1;
                            $('.oformlenie_form_fields_child').append('<div class="oformlenie_form_field_price"><div class="oformlenie_form_field"><label>Ф.И.О. Пассажира от 2 до 12 лет:*</label><input type="text" class="field" name="name_young-'+ number +'"><div class="error">Заполните обязательное поле</div></div><span class="form_price">Цена: <span class="child_price">' + childPrice + '</span> BYN</span></div>');
                            calcResult();
                        }
                    };
                    
                }
        
                el.each(function() {
                    init($(this));
                });
            };
        
            $(field).each(function(){
                fieldCount($(this));
            });
      }
        
        catalogItemCounterChild('.child_value');


             //Оформление заказа счетчик младенец

             function catalogItemCounterBaby(field){
			
                  var fieldCount = function(el) {
              
                      var 
                          // Мин. значение
                          min = el.data('min') || false,
              
                          // Макс. значение
                          max = el.data('max') || false, 
              
                          // Кнопка уменьшения кол-ва
                          dec = el.prev('.dec'), 
              
                          // Кнопка увеличения кол-ва
                          inc = el.next('.inc');
              
                      function init(el) {
                          if(!el.attr('disabled')){
                              dec.on('click', decrement);
                              inc.on('click', increment);
                          }
              
                          // Уменьшим значение
                          function decrement() {
                              var value = parseInt(el[0].value);
                              value--;
              
                              if(value >= min) {
                                  el[0].value = value;
                                  $('.oformlenie_form_fields_baby .oformlenie_form_field_price:last-child').remove();
                                  calcResult();
                              } 
                          };
              
                          // Увеличим значение
                          function increment() {
                              var value = parseInt(el[0].value);
                                  
                              value++;
              
                              if(!max || value <= max) {
                                  el[0].value = value++;
                                  var number = value - 1;
                                  $('.oformlenie_form_fields_baby').append('<div class="oformlenie_form_field_price"><div class="oformlenie_form_field"><label>Ф.И.О. Пассажира до 2 лет:* </label><input type="text" class="field" name="name_baby-'+ number +'"><div class="error">Заполните обязательное поле</div></div><span class="form_price">Цена: <span class="baby_price">' + babyPrice + '</span> BYN</span></div>');
                                  calcResult();
                              }
                          };
                          
                      }
              
                      el.each(function() {
                          init($(this));
                      });
                  };
              
                  $(field).each(function(){
                      fieldCount($(this));
                  });
            }
              
              catalogItemCounterBaby('.baby_value');
           

             

            
        
                

      


});


function windowSize3(){
	if ($(window).width() <'550'){
	$( ".header_navbar ul" ).append( $(".header_phones") );
		
	}
}
$(window).on('load resize',windowSize3);