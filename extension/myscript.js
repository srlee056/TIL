chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        console.log("tab updated");
        // do your things
        var nodes = $('#fboardlist > div.gw_tb01 > ul').children();
        var list = ['포수', '동헌']
        nodes.each(function () {
            for (i = 0; i < list.length; i++) {
                if (($(this).find('div.bo_tit').text()).indexOf(list[i]) > 0) {
                    console.log($(this).find('div.bo_tit').text());
                    $(this).hide();
                }
            }
        });

    }
})
