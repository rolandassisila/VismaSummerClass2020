import { Rest } from "./utils/rest.js";
import { POSTS_URL, POST_URL_ID } from "./utils/constants.js"
//function saves data into db.json
let form = document.getElementById("form")

let numOfPosts = [];

function createPost(item) {
    const mainPosts = document.getElementById("mainPosts");
    if (mainPosts) {
        var html = '<div class=\"main-posts\" id=\"postForm\"><img src="assets/images/city-2.jpg" id="editPost-' + item.id + '" alt="#"><div class="main-posts-details"><ul class="tags">';
        item.postTags.forEach((postTag) => {
            html += '<li class="zoom zoom-transition"><a href="#">' + postTag + '</a></li>'
        })
        html += '</ul><div class="latest-posts-topic"><h1>' + item.title + '</h1><h3>' + item.content + '</h3></div><div class="latest-posts-date"><a href="#"><span class="post-date"></span>' + item.date + '</a></div></div></div>';
        mainPosts.innerHTML += html;
    }
}

function showPost(id) {
    return window.location.replace(POST_URL_ID + id);
}

async function loadData() {
    var data = await Rest.getPosts();
    for (var i = 0; i < data.length; i++) {
        createPost(data[i]);
        numOfPosts.push(data[i].id);
    }
    addListeners();
}

function addListeners() {
    for (var i = 0; i < numOfPosts.length; i++) {
        let id = numOfPosts[i];
        document.getElementById("editPost-" + id).addEventListener("click", function (e) {
            return showPost(id);
          });
    }
}


loadData();

