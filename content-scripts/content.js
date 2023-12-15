function hideScores() {
    chrome.storage.local.get(["htns_button_key"]).then((result) => {
        let key = result.htns_button_key
        if (key == "2") { // 隐藏
            // https://sports.qq.com/nba
            $("li.team span.score").each(function (index) {
                $(this).css("backgroundColor", "#555")
            })

            // https://sports.qq.com/nba-stats/schedule
            $("div.list-time div.row div.goal").each(function (index) {
                $(this).css("backgroundColor", "#606060")
            })

            // https://kbs.sports.qq.com/
            $("#head-box .score").each(function (index) {
                $(this).css("backgroundColor", "white")
            })
            $("div.match-situation").css("display", "none")
        } else {
            // https://sports.qq.com/nba
            $("li.team span.score").each(function (index) {
                $(this).css("backgroundColor", "transparent")
            })

            // https://sports.qq.com/nba-stats/schedule
            $("div.list-time div.row div.goal").each(function (index) {
                $(this).css("backgroundColor", "transparent")
            })

            // https://kbs.sports.qq.com/
            $("#head-box .score").each(function (index) {
                $(this).css("backgroundColor", "transparent")
            })
            $("div.match-situation").css("display", "block")
        }
    })
}

function init() {
    // 首页
    if (window.location.href == 'https://sports.qq.com/nba') {
        var heartBeat = setInterval(() => {
            var wantedEl = document.querySelector('div.vonline li.team span.score');
            if (wantedEl) {
                clearInterval(heartBeat);
                hideScores();
            }
            console.log('1 heart beat')
        }, 1000);
    }

    // 赛程列表页
    if (window.location.href == 'https://sports.qq.com/nba-stats/schedule') {
        var heartBeat = setInterval(() => {

            var wantedEl = document.querySelector('div.list-time div.row div.goal');
            if (wantedEl) {
                clearInterval(heartBeat);
                hideScores();
            }
            console.log('2 heart beat')
        }, 1000);
    }

    // 集锦页
    if (window.location.host == 'kbs.sports.qq.com') {
        var heartBeat = setInterval(() => {

            var wantedEl = document.querySelector('div.team-info.match-situation-data');
            if (wantedEl) {
                clearInterval(heartBeat);
                hideScores();
            }
            console.log('3 heart beat')
        }, 1000);
    }
}

init()

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    hideScores()
});