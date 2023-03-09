var output_str;
var user_input;

function alertClickHandler() {
    alert('Alert button was clicked');
}

function promptClickHandler() {
    user_input = prompt('Input your name: ');
    if (!user_input) {
        output_str = "User didn't enter anything";
    }
    else {
        output_str = user_input;
    }
    document.getElementById('output_display').innerHTML = `Prompt result : ${output_str}`
}

function confirmClickHandler() {
    let confirm_str = 'Do you confirm this?'
    pressed_confirm = confirm(confirm_str);
    document.getElementById('output_display').innerHTML = `Confirm result : ${pressed_confirm}`
}

function saferPromptClickHandler() {
    user_input = DOMPurify.sanitize(prompt('Input your name: '));
    if (!user_input) {
        output_str = "User didn't enter anything";
    }
    else {
        output_str = user_input;
    }
    document.getElementById('output_display').innerHTML = `Prompt result : ${output_str}`
}

let alertBtn = document.getElementById('alertbutton');
alertBtn.addEventListener('click', alertClickHandler);

let promptBtn = document.getElementById('promptbutton');
promptBtn.addEventListener('click', promptClickHandler);

let saferPromptBtn = document.getElementById('saferpromptbutton');
saferPromptBtn.addEventListener('click', saferPromptClickHandler);

let confirmBtn = document.getElementById('confirmbutton');
confirmBtn.addEventListener('click', confirmClickHandler);
