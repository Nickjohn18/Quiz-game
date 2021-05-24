
var keepScores = document.getElementById("keepScores");
var getScore = localStorage.getItem("totalScore");
getScore = JSON.parse(getScore)


if(getScore !== null){

for(var i = 0; i < getScore.length; i++) {
    var newLine = document.createElement("li");
    newLine.textContent = getScore[i].name + " " + getScore[i].score;
    keepScores.appendChild(newLine);
}

}

