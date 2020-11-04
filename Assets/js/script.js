
// Define today using moment()
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log today's date
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// Render today's date to the page
$('#displayDate').append(today);
