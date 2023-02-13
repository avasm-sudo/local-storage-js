let saveButtonEl = document.getElementById("saveButton");
let textAreaMessage = document.getElementById("message");
saveButtonEl.onclick = function() {
    let userTextMessageValue = textAreaMessage.value;
    localStorage.setItem("userTextMessage", userTextMessageValue);
};

let storedUserInput = localStorage.getItem("userTextMessage");

if (storedUserInput === null) {
    textAreaMessage.value = "";
} else {
    textAreaMessage.value = storedUserInput;
}