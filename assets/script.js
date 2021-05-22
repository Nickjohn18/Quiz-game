//questions and answer
//track time and track points
//time reduction for every questions answered wrong
//start timer


var score = 0;
var timerCountDown = 0;
var timeLeft = 80;
var timeDeduct = 10;
var currentQuestions = 0
var start = document.getElementById("start")
var container = document.getElementById("container")
var quiz = document.getElementById("quiz");
var currentTime = document.getElementById("timer")
var questions = [
    {question:'question 1', choices:["number 1"," number 2", "number 3"] , answer:'number 1'},
    {question: 'question 2', choices:["number 1"," number 2", "number 3"],  answer:'number 2'},
    {question: 'question 3', choices:["number 1"," number 2", "number 3"], answer:'number 3'},
    {question: 'question 4', choices:["number 1"," number 2", "number 4"],  answer:'number 4'},
    {question: 'question 5', choices:["number 1"," number 5", "number 3"], answer:'number 5'},
];



start.addEventListener("click", function() {
    if(timerCountDown === 0) {
        timerCountDown = setInterval(function(){
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft + " seconds left";
            if(timeLeft <= 0) {
                clearInterval(timerCountDown);
            }
        }, 1000);
    }
displayQuestion()
})


 
function displayQuestion() {
    // container.innerHTML clears the current question
    container.innerHTML = "";
    var current = questions[currentQuestions];
    var listQuestion = document.createElement("p");
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
    var rightAnswer = questions[currentQuestions].answer;
    if(e.target.textContent == rightAnswer) {
        score++; 
    } else {
     timeLeft = timeLeft - timeDeduct;
    }
}



