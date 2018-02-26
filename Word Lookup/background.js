chrome.runtime.onMessage.addListener(receiver);

var word = "No Selection";

function receiver(request, sender, sendResponse) {
    // console.log(request);
    word = request.text;
}