const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    url: chrome.runtime.getURL("images/hide.png"),
                    imageDivId: `${guidGenerator()}`,
                    tabId: tabs[0].id
                },
                function (response) {
                    window.close();
                }
            );
            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        });
    };
}

const showScores = document.getElementById("show-scores");
if (showScores) {
    showScores.onclick = function () {
        alert("显示比分")
    }
}
const showVictory = document.getElementById("show-victory");
if (showVictory) {
    showVictory.onclick = function () {
        alert("显示胜负")
    }
}
const hideScores = document.getElementById("hide-scores");
if (hideScores) {
    hideScores.onclick = function () {
        alert("隐藏比分")
    }
}