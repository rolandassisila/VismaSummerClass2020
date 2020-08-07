document.getElementById('update').style.display = "none";
document.getElementById('delete').style.display = "none";

const editedPostId = new URLSearchParams(window.location.search).get("id");
//function saves data into db.json
let form = document.getElementById('form')
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

form.addEventListener('submit', function (e) {
    //auto submission prevention

    e.preventDefault();

    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let date = document.getElementById('date').value;
    let author = document.getElementById('author').value;
    let postTags = getCheckedTags();

    fetch(database_link, {
            method: "POST",
            body: JSON.stringify({
                title: title,
                content: content,
                date: date,
                author: author,
                postTags: postTags
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        });
    return window.location.replace("/index.html");
});

//to cancel submmission or edit
function cancel() {
    return window.location.replace("/index.html");
}

//to delete the post

async function deletepost() {
    await fetch("/posts/" + editedPostId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    return window.location.replace("/index.html");

};

//to update post
function getUpdatedPost() {
    let post = {
        id: editedPostId,
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        date: document.getElementById("date").value,
        author: document.getElementById("title").value,
        postTags: getCheckedTags()
    }

    return post;
}

function update() {
    let renew = getUpdatedPost();
    if (renew) {
        putFunction(renew);
    }
}

async function putFunction(post) {
    await fetch("/posts/" + editedPostId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(post)
    })
    return window.location.replace("/index.html")
}