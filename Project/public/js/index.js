//date function
n =  new Date();
y = n.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
m = months[n.getMonth()];

d = n.getDate();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
w = days[n.getDay()];

document.getElementById("date").innerHTML = w + " " + d + " " + m + " " + y;






