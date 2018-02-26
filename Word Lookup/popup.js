// apiKey has been intentionally left blank, please get your API key at http://developer.wordnik.com
var apiKey = '';

function showDef() {
    let bgPage = chrome.extension.getBackgroundPage();
    let word   = bgPage.word;
    let url    = 'http://api.wordnik.com:80/v4/word.json/' + word + '/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=' + apiKey;
    let headerSpace = document.getElementById('header');
    let resultSpace = document.getElementById('result');

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            document.getElementById('loader').style.display = 'none';
            headerSpace.innerHTML += '<i><b>' + word.toUpperCase() + '</b></i>';
            resultSpace.innerHTML += data[0].text;
        })
        .catch(function() {
            document.getElementById('loader').style.display = 'none';
            resultSpace.innerHTML += '<i>Not Found !</i>';
        });
}

showDef();