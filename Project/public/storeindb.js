//to fetch data from database
let database_link = "/posts";

loadPost(new URLSearchParams(window.location.search).get("id"));

//to get id
async function getPost(id) {
    let response = await fetch('/posts/' + id);
    let data = await response.json();
    return data;
}

async function loadPost(postId) {
    if (postId) {
        const post = await getPost(postId)
        const form = document.getElementById("form");
        
        form["title"].value = post.title;
        form["tags"].value = post.tags;
        form["content"].value = post.content;
        form["date"].value = post.date;
        form["author"].value = post.author;
        
    }
}

async function getData() {
    const response = await fetch(database_link);
    const data = await response.json();
    
    
   for (item of data) {
        const mainPosts = document.getElementById("mainPosts");
       if (mainPosts) {
           
        var html = 
            '<div class=\"main-posts\" id=\"postForm\"><img src="/images/city-2.jpg"  onClick="showPost('+item.id+')" alt="#"><div class="main-posts-details"><ul class="tags"><li class="zoom zoom-transition"><a href="#">Lorem</a></li><li class="zoom zoom-transition"><a href="#">Lorem</a></li><li class="zoom zoom-transition"><a href="#">Lorem</a></li></ul><div class="latest-posts-topic"><h1>'+item.title+'</h1><h3>'+item.content+'</h3></div><div class="latest-posts-date"><a href="#"><span class="post-date"></span>'+item.date+'</a></div></div></div>';
       mainPosts.innerHTML += html;
       }
    }
    
    console.log(data);
}

getData();

//function saves data into db.json

let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    //auto submission prevention
    
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let date = document.getElementById('date').value;
    let tags = document.getElementById('tags').value;
    let author = document.getElementById('author').value;
    
    fetch(database_link, {
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
    });
    return window.location.replace("/index.html");
});


function showPost(id) {
   return window.location.replace("/form.html?id=" + id);
}
