$(document).ready(function(){

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