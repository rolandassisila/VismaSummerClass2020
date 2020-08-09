export function getCheckedTags() {
    let postTags = document.getElementsByName("postTag");
    let checkedTags = [];
    postTags.forEach((postTag) => {
        if (postTag.checked) {
            checkedTags.push(postTag.value);
        }
    });
    return checkedTags;
}