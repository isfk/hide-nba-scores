const showScores = document.getElementById("show-scores");
if (showScores) {
    showScores.onclick = function () {
        chrome.storage.local.set({ "htns_button_key": "1" }).then(() => {
            console.log("显示比分")
            window.close();
        })
        chrome.storage.local.get(["htns_button_key"]).then((result) => {
            console.log("htns_button_key: " + result.htns_button_key)
        })
    }
}

const hideScores = document.getElementById("hide-scores");
if (hideScores) {
    hideScores.onclick = function () {
        chrome.storage.local.set({ "htns_button_key": "2" }).then(() => {
            console.log("隐藏比分")
            window.close();
        })
        chrome.storage.local.get(["htns_button_key"]).then((result) => {
            console.log("htns_button_key: " + result.htns_button_key)
        })
    }
}

chrome.storage.local.get(["htns_button_key"]).then((result) => {
    console.log("htns_button_key: " + result.htns_button_key)
    switch (result.htns_button_key) {
        case "1":
            $("#show-scores").css("backgroundColor", "#006bb7").css("color", "white")
            break;
        case "2":
            $("#hide-scores").css("backgroundColor", "#006bb7").css("color", "white")
            break;
        default:
            break;
    }
})