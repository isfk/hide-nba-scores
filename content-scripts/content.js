function hideScores() {
    chrome.storage.local.get(["htns_button_key"]).then((result) => {
        let key = result.htns_button_key

        if (key == "2") { // 隐藏
            // https://sports.qq.com/nba
            $("li.team span.score").each(function (index) {
                $(this).text("**")
            })

            // https://sports.qq.com/nba-stats/schedule
            $("div.list-time div.row div.goal").each(function (index) {
                let label = $(this).attr("aria-label");
                if (!label) {
                    return
                }
                if (label == "比分：-") {
                    return
                }
                let score = "** - **"
                let scorehtml = '<div style="position: absolute; background: #db1414; color: white; width: 100%; text-align: center;"><span style="display: block; width: 100%; text-align: center">' + score + '</span></div>'
                $(this).append(scorehtml)
            })

            // https://kbs.sports.qq.com/
            $("div.team-info.match-situation-data").append("<div style='position:absolute; top: 0; width: 100%; height: 100%; background-color: red; display: flex; align-items: center; justify-content:center; color: white; font-size: 14px;'>隐藏比分信息</div>")
            $("#head-box .score").text("**")
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