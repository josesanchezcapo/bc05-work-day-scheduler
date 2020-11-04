
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



});

$('#btn2').click(function () {



});

$('#btn3').click(function () {



});
$('#btn4').click(function () {


});
$('#btn5').click(function () {


});
$('#btn6').click(function () {



});
$('#btn7').click(function () {



});
$('#btn8').click(function () {



});
$('#btn9').click(function () {


});
$('#btn10').click(function () {



});
$('#btn11').click(function () {



});


// Display storage information
