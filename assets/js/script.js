var oneEl = document.querySelector('.answerOne');
var twoEl = document.querySelector('.answerTwo');
var threeEl = document.querySelector('.answerThree');
var fourEl = document.querySelector('.answerFour');
var startEl = document.querySelector('.start');
var timerEl = document.querySelector('.timer');
var introEl = document.querySelector('.quiz-intro');
var rightWrong = document.querySelector('.right')
var questionAsked = document.querySelector('.question-asked')
var count = 60;
var questionArr = ["What data types are Dictionaries considered in Javascript?", "What is the correct declaration of a for loop?", "What is an array in javascript?", "What is the correct way to get an element by id in javascript?", "How do you set an item in localStorage using javascript?"]
var answerOne = ["Object", "String",  "Array",  "Integer"];
var answerTwo = ["for(var i = 0 i < 1 i--){}", "for(var i=1, i < 2, i++{}", "for(var i = 0; i < 0; i++){};", "for( var i<1 i=2 i--);"]
startEl.textContent = `Start Quiz`;
startEl.addEventListener('click', startQuiz);
var score = '';
var questionAsk = 0;

function startQuiz(){

    var timerDecrement = setInterval(function(){
    
        
        if(count > 0){
            count--;
            timerEl.textContent = `Timer: ${count}`
        }else{
            timerEl.textContent = `Quiz over your score was ${score}`;
            clearInterval(timerDecrement);
        }
    }, 1000)
    document.getElementById('quiz').style.display = "none";
    document.getElementById('starter').style.display = "none";

    document.getElementById('questions').style.display = "flex";
    questionAsked.textContent = `${questionArr[questionAsk]}`;
    oneEl.innerHTML = answerOne[0];
    twoEl.innerHTML = answerOne[1];
    threeEl.innerHTML = answerOne[2];
    fourEl.innerHTML = answerOne[3];

}
oneEl.addEventListener('click',function(){
    score += 5
    questionAsked.textContent = questionArr[1];
    oneEl.innerHTML = answerTwo[0];
    twoEl.innerHTML = answerTwo[1];
    threeEl.innerHTML = answerTwo[2];
    fourEl.innerHTML = answerTwo[3];
    rightWrong.textContent = "Right Good Job";
    console.log(score);
});

function wrongAnswerOne(){
    questionAsked.textContent = questionArr[questionAsk++];
}