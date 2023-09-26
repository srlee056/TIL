const template = document.querySelector('body>ul');
//console.log(template);
const key = 'filterKey';
var defaultSet = new Set();
chrome.storage.sync.get({ filterKey: defaultSet }).then((result) => {
    console.log(result.filterKey);
    ///initiate
    ///then load filter words and put them in input list
});


const addButton = document.querySelector('#add-button');
addButton.addEventListener("click", function () {
    //console.log(template.children);
    var element = template.children[0].cloneNode(true);

    element.querySelector('input').value = null;
    //console.log(element);
    document.querySelector('body>ul').appendChild(element);
});




const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", function () {
    console.log('save clicked');
    var children = template.children;
    for (var i = 0; i < children.length; i++) {

        var word = children[i].querySelector('input').value;
        console.log(word);
        chrome.storage.sync.get({ filterKey: defaultSet }).then((result) => {
            var filteredWords = result.filterKey;
            console.log(typeof (filteredWords));
            filteredWords.add(word);
            chrome.storage.sync.set({ filterKey: filteredWords }, () => {
                console.log(filteredWords, "stored.");
            });
        });
    }

});

chrome.storage.local.clear(function () {
    var error = chrome.runtime.lastError;
    if (error) {
        console.error(error);
    }
    // do something more
});
chrome.storage.sync.clear();

/// https://github.com/GoogleChrome/chrome-extensions-samples/blob/17956f44b6f04d28407a4b7eee428611affd4fab/api/contextMenus/global_context_search/popup.js
/// 참고하기