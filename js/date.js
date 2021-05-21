$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вс','пн','вт','ср','чт','пт','сб'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(document).ready(function(){
$("#datepicker").datepicker({
    minDate: 0,
});

$("#datepicker_return").datepicker({
    minDate: 0,
});
$("#seach_datepicker_return").datepicker({
    minDate: 0,
});
$("#page_datepicker").datepicker({
    minDate: 0,
});
$("#page_datepicker_return").datepicker({
    minDate: 0,
});


$("#seach_datepicker").datepicker({
    minDate: 0,
	onSelect: function(date){
		$('#vyvod_marshrutov_calendar_value').val(date);
	}
});

var chosenDate = $('#seach_datepicker').val();
$('#vyvod_marshrutov_calendar_value').val(chosenDate);


  $('#vyvod_marshrutov_calendar').datepicker({
	monthNames: ['янв','фев','мрт','апр','май','июн',
	'июл','авг','сен','окт','нбр','дек'],
    numberOfMonths: 1,
	showOtherMonths: true,
	defaultDate: chosenDate,
	altField: "#txt1",
	altFormat: "D, d M",
    //minDate: 0,
    onSelect: function(date){
		$('#vyvod_marshrutov_calendar_value').val(date);
		$('#seach_datepicker').val(date);
	}
  });
  

  var chosenDate3 = $("#seach_datepicker").datepicker('getDate');
  $('#vyvod_marshrutov_calendar').datepicker('setDate', chosenDate3);



  
});

