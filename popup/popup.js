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