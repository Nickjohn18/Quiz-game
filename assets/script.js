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
var content = document.getElementById("content")

var questions = [
    {question:'What does "www" stand for in a website?', choices:["World Wide Web","World War West", "We Were Where"], answer:'World Wide Web'},
    {question:'Who was elected President of the United States in 2017?', choices:["George Bush","Donald Trump", "Barack Obama"], answer:'Donald Trump'},
    {question:'How many colors in the Rainbow?', choices:["One","Five", "Seven"], answer:'Seven'},
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
    content.innerHTML = "";
    // container.innerHTML clears the current question
    container.innerHTML = "";
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
    
    var rightAnswer = questions[currentQuestions].answer;
    if(e.target.textContent == rightAnswer) {
        document.body.style.background = "#008000";
        clearColor();
        score++; 
        console.log(newContent);
    } else {
        timeLeft = timeLeft - timeDeduct;
        document.body.style.background = "#ff0000";
        clearColor();
        score--;
     console.log(newContent)
    }
    
    if (currentQuestions >= questions.length){
        endGame();
        newContent.textContent = "End Of quiz!"
    }else {
        displayQuestion();
    }
    console.log(score)

}
function clearColor() {
    setTimeout(function() {
        document.body.style.removeProperty("background-color");
    },200)
}
function endGame() {
    currentTime.innerHTML = "";
    container.innerHTML = "";
}


