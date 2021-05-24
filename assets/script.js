//questions and answer
//track time and track points
//time reduction for every questions answered wrong
//start timer


var score = 0;
var timerCountDown = 0;
var timeLeft = 51;
var timeDeduct = 8;
var currentQuestions = 0
var start = document.getElementById("start")
var container = document.getElementById("container")
var quiz = document.getElementById("quiz");
var currentTime = document.getElementById("timer")
var content = document.getElementById("content")
var keepScores = document.getElementById("keepScores");

var questions = [
    {question:'What does "www" stand for in a website?', choices:["World Wide Web","World War West", "We Were Where"], answer:'World Wide Web'},
    {question:'Who was elected President of the United States in 2017?', choices:["George Bush","Donald Trump", "Barack Obama"], answer:'Donald Trump'},
    {question:'How many colors are in the Rainbow?', choices:["One","Five", "Seven"], answer:'Seven'},
    {question:'What is the currency of the UK?', choices:["Pound","Euro", "Dollar"], answer:'Pound'},
    {question:'What is a tomato?', choices:["Fruit","Vegetable", "Herb"], answer:'Fruit'},
];



start.addEventListener("click", function() {
    if(timerCountDown === 0) {
        timerCountDown = setInterval(function(){
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft + " seconds left";
            if(timeLeft <= 0) {
                clearInterval(timerCountDown);
                endGame();
            }
        }, 1000);
    }
    displayQuestion()
})



function displayQuestion() {
    // Stop the array from looping without no value
    // messy code but working on it
    var numChoices = questions[currentQuestions].choices;
    if (currentQuestions >> numChoices.length) {
        endGame();
    }
    
    // container.innerHTML clears the current question
    content.innerHTML = "";
    container.innerHTML = "";
    
    //loop the choices instead of questions... 
    var current = questions[currentQuestions];
    var listQuestion = document.createElement("h1");
    listQuestion.textContent = current.question;
    container.appendChild(listQuestion)
    console.log(current)

    for (var i = 0; i < current.choices.length; i++) {
        var listChoices = document.createElement("button");
        listChoices.textContent = current.choices[i];
        container.appendChild(listChoices);
        listChoices.addEventListener("click", function(e) {
            compareAnswer(e);
            currentQuestions++;
            displayQuestion();
        })
    }
    }

function compareAnswer(e) {
    console.log(e.target.textContent)
    var numChoices = questions[currentQuestions].choices;
    
    var rightAnswer = questions[currentQuestions].answer;
    if(e.target.textContent == rightAnswer) {
        document.body.style.background = "#008000";
        clearColor();
        score += 10; 
    } else {
        timeLeft = timeLeft - timeDeduct;
        document.body.style.background = "#ff0000";
        clearColor();
    }

    if (currentQuestions > numChoices.length) {
        endGame();
    }
    console.log(score)
    
}


// right or wrong colors
function clearColor() {
    setTimeout(function() {
        document.body.style.removeProperty("background-color");
    },200)
}



//End the loop and Users input
function endGame() {
    currentTime.innerHTML = "";
    container.innerHTML = "";
    clearInterval(timerCountDown);


    var newContent = document.createElement("h3");
    newContent.textContent = "End of quiz! Thank you for playing my quiz game.";
    container.appendChild(newContent);

    //name of the user
    var newLabel = document.createElement("label");
    newLabel.textContent = "Enter your initials: ";
    container.appendChild(newLabel);
    
    //input
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.textContent = "";
    container.appendChild(newInput);

    //submit button
    var newButton = document.createElement("button");
    newButton.setAttribute("type", "submit");
    newButton.textContent = "Submit";
    container.appendChild(newButton);

    newButton.addEventListener("click", function () {
        var name = newInput.value;

        // not working
        if(null) {
            console.log("no value entered!")
        }else {
            var finalScore = {name, score};
            console.log(finalScore);
            var totalScore = localStorage.getItem("totalScore");
            if(totalScore === null){
                totalScore = [];
            } else {
                totalScore = JSON.parse(totalScore);
            }
            totalScore.push(finalScore);
            var savedScore = JSON.stringify(totalScore);
            localStorage.setItem("totalScore", savedScore);

            window.location.replace("./assets/highscores.html")
        }
    })
}

// This is for the HighScorePage!
var loadTasks = function() {
var getScore = localStorage.getItem("totalScore");

if(getScore !== null){

for(var i = 0; i < getScore.length; i++) {
    var newLine = document.createElement("li");
    newLine.textContent = getScore[i].initials + " " + getScore[i].score;
    keepScores.appendChild(newLine);

}
}
}

