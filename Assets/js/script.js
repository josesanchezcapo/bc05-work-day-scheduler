
// Define object time
var timeblock = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']


// Define today using moment()
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log today's date
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// Render today's date to the page
$('#displayDate').append(today);

// Set time blocks state

var currentTime = moment().format('h:mm a');

for (var i = 0; i < timeblock.length; i++) {

    var currentHour = $('#' + timeblock[i]).data('value');
    var nextHour = $('#' + timeblock[i + 1]).data('value');

    if (currentTime > currentHour) {

        $('#' + timeblock[i]).removeClass('col').addClass('col past');
    }
    if (currentTime < currentHour) {
        $('#' + timeblock[i]).removeClass('col').addClass('col future');
    }
    if (currentTime === currentHour || currentTime < nextHour) {
        $('#' + timeblock[i]).removeClass('col').addClass('col present');
    }

}

