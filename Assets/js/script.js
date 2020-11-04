
// Define object time
var position = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']


// Define today using moment()
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log today's date
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// Render today's date to the page
$('#displayDate').append(today);

// Set time blocks state

var currentTime = moment().format('h:mm a');

for (var i = 0; i < position.length; i++) {

    var currentHour = $('#' + position[i]).data('value');
    var nextHour = $('#' + position[i + 1]).data('value');

    if (currentTime > currentHour) {

        $('#' + position[i]).removeClass('col').addClass('col past');
    }
    if (currentTime < currentHour) {
        $('#' + position[i]).removeClass('col').addClass('col future');
    }
    if (currentTime === currentHour || currentTime < nextHour) {
        $('#' + position[i]).removeClass('col').addClass('col present');
    }



}


// Buttons actions

$('#btn1').click(function () {

    var timeBlock1 = $('#1').val();

    localStorage.setItem('timeBlock1', timeBlock1);

});

$('#btn2').click(function () {

    var timeBlock2 = $('#2').val();

    localStorage.setItem('timeBlock2', timeBlock2);

});

$('#btn3').click(function () {

    var timeBlock3 = $('#3').val();

    localStorage.setItem('timeBlock3', timeBlock3);

});

$('#btn4').click(function () {

    var timeBlock4 = $('#4').val();

    localStorage.setItem('timeBlock4', timeBlock4);

});

$('#btn5').click(function () {

    var timeBlock5 = $('#5').val();

    localStorage.setItem('timeBlock5', timeBlock5);

});

$('#btn6').click(function () {

    var timeBlock6 = $('#6').val();

    localStorage.setItem('timeBlock6', timeBlock6);

});

$('#btn7').click(function () {

    var timeBlock7 = $('#7').val();

    localStorage.setItem('timeBlock7', timeBlock7);

});

$('#btn8').click(function () {

    var timeBlock8 = $('#8').val();

    localStorage.setItem('timeBlock8', timeBlock8);

});

$('#btn9').click(function () {

    var timeBlock9 = $('#9').val();

    localStorage.setItem('timeBlock9', timeBlock9);

});

$('#btn10').click(function () {

    var timeBlock10 = $('#10').val();

    localStorage.setItem('timeBlock10', timeBlock10);

});

$('#btn11').click(function () {

    var timeBlock11 = $('#11').val();

    localStorage.setItem('timeBlock11', timeBlock11);

});

// Get storage information and Render information on the page

for (var i = 0; i < 12; i++) {

    $('#' + i).val(localStorage.getItem('timeBlock' + i, 'tp' + i));

}

