//to fetch data from database
let database_link = "/posts";

loadPost(new URLSearchParams(window.location.search).get("id"));

//to get id
async function getPost(id) {
    let response = await fetch('/posts/' + id);
    let data = await response.json();
    return data;
}

//function to get checked tags
function getCheckedTags() {
    let postTags = document.getElementsByName("postTag");
    let checkedTags = [];
    postTags.forEach((postTag) => {
        if (postTag.checked) {
            checkedTags.push(postTag.value);
        }
    });
    return checkedTags;
}

//loads post upon clicking on image
async function loadPost(postId) {
    if (postId) {
        const post = await getPost(postId)
        const form = document.getElementById("form");

        document.getElementById('update').style.display = "block";
        document.getElementById('delete').style.display = "block";

        form["title"].value = post.title;
        form["content"].value = post.content;
        form["date"].value = post.date;
        form["author"].value = post.author;

        post.postTags.forEach((postTag) => {
            document.getElementById(postTag).checked = true
        });
    }
}

function showPost(id) {
    return window.location.replace("/form.html?id=" + id);
}

//generates a new post with data from db
async function getData() {
    const response = await fetch(database_link);
    const data = await response.json();


    for (item of data) {
        const mainPosts = document.getElementById("mainPosts");
        if (mainPosts) {
            var html = '<div class=\"main-posts\" id=\"postForm\"><img src="/images/city-2.jpg"  onClick="showPost(' + item.id + ')" alt="#"><div class="main-posts-details"><ul class="tags">';
            item.postTags.forEach((postTag) => {
                html += '<li class="zoom zoom-transition post-tags"><a href="#">' + postTag + '</a></li>'
            })
            html += '</ul><div class="latest-posts-topic"><h1>' + item.title + '</h1><h3>' + item.content + '</h3></div><div class="latest-posts-date"><a href="#"><span class="post-date"></span>' + item.date + '</a></div></div></div>';
            mainPosts.innerHTML += html;

            console.log(data);
        }
    }
}
getData();