function hideScores() {
    $("div.list-time div.row div.goal").each(function (index) {
        let label = $(this).attr("aria-label");
        if (!label) {
            return
        }
        if (label == "比分：-") {
            return
        }
        let score = ""
        if (label.includes("-")) {
            score = "负 - 胜"
        } else {
            score = "胜 - 负"
        }
        let scorehtml = '<div style="position: absolute; background: #db1414; color: white; width: 100%; text-align: center;"><span style="display: block; width: 100%; text-align: center">' + score + '</span></div>'
        $(this).append(scorehtml)
    })
}

function init() {
    var heartBeat = setInterval(() => {
        var wantedEl = document.querySelector('div.list-time div.row div.goal');
        if (wantedEl) {
            clearInterval(heartBeat);
            hideScores();
        }
    }, 1000);
}

init()