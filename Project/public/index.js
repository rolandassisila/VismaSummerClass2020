//date function
n =  new Date();
y = n.getFullYear();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
m = months[n.getMonth()];

d = n.getDate();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
w = days[n.getDay()];

document.getElementById("date").innerHTML = w + " " + d + " " + m + " " + y;

//to fetch data from database
const database_link = "/posts";
async function getData() {
    const response = await fetch(database_link);
    const data = await response.json();
    console.log(data);
}

getData();




let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    //auto submission prevention
    
    e.preventDefault();
    
    let title = document.getElementById('title');
    let content = document.getElementById('content');
    let date = document.getElementById('date');
    let tags = document.getElementById('tags');
    let author = document.getElementById('author');
    
    fetch('/posts', {
        method: "POST",
        body: JSON.stringify({
            title: title,
            content: content,
            tags: tags,
            date: date,
            author: author
        }),
        headers: {
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
})
