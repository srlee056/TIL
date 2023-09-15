function clickSubmitButton() {
  document.querySelector("#btn_submit").click();

  ///document.body.style.backgroundColor = "red";
}

const dsrm = "https://dongsaroma.com/baseball";

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://") && tab.url.includes(dsrm)) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: clickSubmitButton,
    });
  }
});
