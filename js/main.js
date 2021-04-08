$(document).ready(function(){

    $('.language_select').click(function(){
        $(this).toggleClass('open');
        })
        
        $('.language_select li').click(function(){
              $('.language_select li').removeClass('active');
              $(this).toggleClass('active');
        })


        $('.currency_select').click(function(){
            $(this).toggleClass('open');
            })
            
            $('.currency_select li').click(function(){
                  $('.currency_select li').removeClass('active');
                  $(this).toggleClass('active');
            })

});