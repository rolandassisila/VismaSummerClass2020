
 export class Rest {
    static deletePost(id) {
        fetch("/posts/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        return window.location.replace("/index.html");
    };


    //to get id
    static async getPost(id) {
        let response = await fetch('/posts/' + id);
        let data = response.json();
        return data;
    }

    static async updatePost(post) {
        await fetch("/posts/" + post.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        })
    }

    //generates a new post with data from db
    static async getPosts() {
        const response = await fetch('/posts');
        const posts = await response.json();
        return posts;
    }

    static createPost(post) {
        fetch(POSTS, {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    content: post.content,
                    date: post.date,
                    author: post.author,
                    postTags: post.postTags
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
    }

 }
 