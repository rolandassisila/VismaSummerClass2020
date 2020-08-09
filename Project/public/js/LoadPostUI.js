import { Rest } from "./utils/rest.js";

const editedPostId = new URLSearchParams(window.location.search).get("id");

document.getElementById('update').style.display = "none";
document.getElementById('delete').style.display = "none";


form.addEventListener('submit', function (e) {
    //auto submission prevention

    e.preventDefault();

    let post = getPost(null);
    Rest.createPost(post);
    return redirectToHomepage();
});


loadPost(editedPostId);

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
        const post = await Rest.getPost(postId)
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

//to update post
function getPost(id) {
    let post = {
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        date: document.getElementById("date").value,
        author: document.getElementById("title").value,
        postTags: getCheckedTags()
    }
    if (id) {
        post.id = id;
    }
    return post;
}
document.getElementById("update").addEventListener("click", function (e) {
    return update();
});
function update() {
    let updatedPost = getPost(editedPostId);
    if (updatedPost) {
        Rest.updatePost(updatedPost);
    }
    return redirectToHomepage();
}

//to cancel submmission or edit

document.getElementById("cancel").addEventListener("click", function (e) {
    return redirectToHomepage();
  });

document.getElementById("delete").addEventListener("click", function (e) {
    Rest.deletePost(editedPostId);
    return redirectToHomepage();
  });

function redirectToHomepage() {
    return window.location.replace("/index.html");
}