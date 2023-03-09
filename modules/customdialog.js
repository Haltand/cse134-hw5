var output_str;
var user_input;

function confirmCancelClickHandler() {
    let clicked = false;
    document.getElementById('output_display').innerHTML = `Confirm result : ${clicked}`
}

function confirmOkClickHandler() {
    let clicked = true;
    document.getElementById('output_display').innerHTML = `Confirm result : ${clicked}`
}

function promptCancelClickHandler() {
    let cancel = "User didn't enter anything";
    document.getElementById('output_display').innerHTML = `Prompt result : ${cancel}`
    document.getElementById('prompt_name').value = "";
}

function promptOkClickHandler() {
    let prompt_text = document.getElementById('prompt_name').value;
    if (prompt_text) {
        document.getElementById('output_display').innerHTML = `Prompt result : ${prompt_text}`
        document.getElementById('prompt_name').value = "";
    }
    else {
        promptCancelClickHandler();
    }
}

let dialogConfirmCancelBtn = document.getElementById('confirm_cancel');
dialogConfirmCancelBtn.addEventListener('click', confirmCancelClickHandler)

let dialogConfirmOkBtn = document.getElementById('confirm_ok');
dialogConfirmOkBtn.addEventListener('click', confirmOkClickHandler)

let dialogPromptCancelBtn = document.getElementById('prompt_cancel');
dialogPromptCancelBtn.addEventListener('click', promptCancelClickHandler)

let dialogPromptOkBtn = document.getElementById('prompt_ok');
dialogPromptOkBtn.addEventListener('click', promptOkClickHandler)
