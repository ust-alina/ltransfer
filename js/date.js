$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['январь','февраль','март','апрель','май','июнь','июль','фвгуст','сентябрь','октябрь','ноябрь','декабрь'],
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

$("#page_datepicker").datepicker({
    minDate: 0,
});
$("#page_datepicker_return").datepicker({
    minDate: 0,
});


/*------РЕЙС В ОДНУ СТОРОНУ-------*/

  var startDate = $('#seach_datepicker').val();
  var formatStartDate = moment(startDate,'DD.MM.YYYY').format("D MMM YYYY, dddd"); 
  $('.poisk_marshrutov_date').val(formatStartDate);

  $("#seach_datepicker").datepicker({
	onSelect: function(date){
        $('#vyvod_marshrutov_calendar').datepaginator('setSelectedDate', date);
		var formatStartDate1 = moment(date,'DD.MM.YYYY').format("D MMM YYYY, dddd"); 
		$('.poisk_marshrutov_date').val(formatStartDate1);
	}

	
});
var chosenDate = $('#seach_datepicker').val();



var options = {
	
    //selectedDateFormat: 'dd.mm.yy',
	showCalendar: false,
	//setSelectedDate: chosenDate,
	showOffDays: false,
	injectStyle: false,
	itemWidth: 155,
	startDate: moment(new Date(2000, 1, 1)),
    endDate: moment(new Date(2100, 1, 1)),
	selectedDateFormat: 'DD.MM.YYYY',
    selectedDate: chosenDate,
	highlightToday: false,
	textSelected: 'dd, D MMM',
	text:  'dd, D MMM',
    onSelectedDateChanged: function (event, date) {
        var dateSelected = moment(date).format('DD.MM.YYYY');
		$('#seach_datepicker').val(dateSelected);
		var formatStartDate2 = moment(date,'DD.MM.YYYY').format("D MMM YYYY, dddd"); 
		$('.poisk_marshrutov_date').val(formatStartDate2);
    },
	
  }



$('#vyvod_marshrutov_calendar').datepaginator(options);


/*-----ОБРАТНО------*/


$("#seach_datepicker_return").datepicker({
  onSelect: function(date){
	  $('#vyvod_marshrutov_calendar_obratno').datepaginator('setSelectedDate', date);
  }

});


var options2 = {
  
  //selectedDateFormat: 'dd.mm.yy',
  showCalendar: false,
  //setSelectedDate: chosenDate,
  showOffDays: false,
  injectStyle: false,
  itemWidth: 155,
  startDate: moment(new Date(2000, 1, 1)),
  endDate: moment(new Date(2100, 1, 1)),
  selectedDateFormat: 'DD.MM.YYYY',
  selectedDate: chosenDate,
  highlightToday: false,
  textSelected: 'dd, D MMM',
  text:  'dd, D MMM',
  onSelectedDateChanged: function (event, date) {
	  var dateSelected = moment(date).format('DD.MM.YYYY');
	  $('#seach_datepicker_return').val(dateSelected);
  },
  
}


$('#vyvod_marshrutov_calendar_obratno').datepaginator(options2);


});


