

function clickSubmitButton() {
  document.querySelector("#btn_submit").click();
  //console.log("clicked");
  ///document.body.style.backgroundColor = "red";
}
function commandSubmitButton() {
  const query = { active: true, currentWindow: true };

  chrome.tabs.query(query, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: clickSubmitButton,
    });
    console.log("clicked");
    //chrome.tabs.create({ url: tabs[0].url, active: false });
  });
}
const dsrm = "https://dongsaroma.com/baseball";

/*
chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://") && tab.url.includes(dsrm)) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: clickSubmitButton,
    });
  }
});
*/
chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case 'click_submit_button':
      commandSubmitButton();
      break;
    default:
      console.log(`Command ${command} not found`);
  }
});

function filteredWords() {
  var nodes = document.querySelector("#fboardlist > div.gw_tb01 > ul").children;
  var list = []

  for (let i = 2; i < nodes.length; i++) {
    let title_text = nodes[i].querySelector('.bo_tit>a').innerText;
    ///console.log(title_text);
    for (let j = 0; j < list.length; j++) {
      ///console.log(title_text.indexOf(list[j]));
      if (title_text.indexOf(list[j]) >= 0) {
        nodes[i].style.display = 'none';
      }
    }
  }
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

  if (changeInfo.status == 'completed') {
    if (!tab.url.includes("chrome://") && tab.url.includes(dsrm)) {
      console.log("tab updated");
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: filteredWords,
      });
    }
  }
})


