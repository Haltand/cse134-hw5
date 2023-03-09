let blog_data = [
    {
        'title': 'Test title 1',
        'date': 'Test date 1',
        'summary': 'Test summary 1'
    },
    {
        'title': 'Test title 2',
        'date': 'Test date 2',
        'summary': 'Test summary 2'
    },
    {
        'title': 'Test title 3',
        'date': 'Test date 3',
        'summary': 'Test summary 3'
    },
];

let blog_list_bullets = document.getElementById("blog_posts");
var current_post;

blog_data.forEach((item) => {

    let entry = document.createElement("li");
    entry.appendChild(document.createTextNode(`Title: ${item.title} - Date: ${item.date} - Summary: ${item.summary}`));

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = 'Delete';
    entry.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deletePost);


    let editBtn = document.createElement("button");
    editBtn.innerHTML = 'Edit';
    entry.appendChild(editBtn);
    editBtn.addEventListener("click", editPost);


    blog_list_bullets.appendChild(entry);
})

function deletePost() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function clearInputs() {
    document.getElementById('add_title').value = '';
    document.getElementById('add_date').value = '';
    document.getElementById('add_summary').value = '';
    document.getElementById('edit_title').value = '';
    document.getElementById('edit_date').value = '';
    document.getElementById('edit_summary').value = '';

}

function addBlogPost() {
    let entry = document.createElement("li");
    let title = document.getElementById('add_title').value;
    let date = document.getElementById('add_date').value;
    let summary = document.getElementById('add_summary').value;

    entry.appendChild(document.createTextNode(`Title: ${title} - Date: ${date} - Summary: ${summary}`));
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = 'Delete';
    entry.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deletePost);

    let editBtn = document.createElement("button");
    editBtn.innerHTML = 'Edit';
    entry.appendChild(editBtn);
    editBtn.addEventListener("click", editPost);

    blog_list_bullets.appendChild(entry);
    clearInputs();
}

function editPost() {
    current_post = this.parentNode.childNodes[0];
    let li_text = this.parentNode.childNodes[0].nodeValue;
    let text_arr = li_text.split("-");

    let post_elements_arr = text_arr.map(function(element) {
        return element.trim().split(': ')[1];
    })

    let title = post_elements_arr[0];
    let date = post_elements_arr[1];
    let summary = post_elements_arr[2];
 
    document.getElementById('edit_title').value = title;
    document.getElementById('edit_date').value = date;
    document.getElementById('edit_summary').value = summary;
    window.edit_dialog.show();
}

function editSuccess() {
    let title = document.getElementById('edit_title').value;
    let date = document.getElementById('edit_date').value;
    let summary = document.getElementById('edit_summary').value;

    newTextNode = document.createTextNode(`Title: ${title} - Date: ${date} - Summary: ${summary}`);
    current_post.nodeValue = `Title: ${title} - Date: ${date} - Summary: ${summary}`;
}

let addPostBtn = document.getElementById('add_success');
addPostBtn.addEventListener('click', addBlogPost)

let cancelPostBtn = document.getElementById('add_cancel');
cancelPostBtn.addEventListener('click', clearInputs);

let editSuccessBtn = document.getElementById('edit_success');
editSuccessBtn.addEventListener('click', editSuccess);
