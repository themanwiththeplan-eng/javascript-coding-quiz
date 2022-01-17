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
var answers = [{1: "Object", 2: "String", 3: 'Array', 4: "Integer"}, {1: "for(i<1. i=2){};", 2: "for(s in students; s=0){};", 3: "for(var i = 0; i < 0; i++){}", 4: "for([key][value] of Object.entries('object';)){};"}];
startEl.textContent = `Start Quiz`;
startEl.addEventListener('click', startQuiz);
var score = '';
var questionAsk = 0;
var index = 0;
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
    oneEl.innerHTML = answers[0][1];
    twoEl.innerHTML = answers[0][2];
    threeEl.innerHTML = answers[0][3];
    fourEl.innerHTML = answers[0][4];
}
// oneEl.addEventListener('click',rightAnswerOne);
// twoEl.addEventListener('click', wrongAnswerOne);
// threeEl.addEventListener('click', wrongAnswerOne);
// fourEl.addEventListener('click', wrongAnswerOne);
oneEl.addEventListener('click', rightWrongAnswer);
twoEl.addEventListener('click', rightWrongAnswer);
threeEl.addEventListener('click', rightWrongAnswer);
fourEl.addEventListener('click', rightWrongAnswer);

function rightWrongAnswer(){
    if(answers[0][1]){
        score += 5;
        questionAsked.textContent = questionArr[questionAsk += 1];
        index++;
        oneEl.innerHTML = answers[index][1];
        twoEl.innerHTML = answers[index][2];
        threeEl.innerHTML = answers[index][3];
        fourEl.innerHTML = answers[index][4];
        console.log(score);
        rightWrong.textContent = `Congrats you got it right!`
    }
    else{
        count -= 5;
        questionAsked.textContent = questionArr[questionAsk += 1];
        index++;
        oneEl.innerHTML = answers[index][1];
        twoEl.innerHTML = answers[index][2];
        threeEl.innerHTML = answers[index][3];
        fourEl.innerHTML = answers[index][4];
        console.log(score);
        rightWrong.textContent = `Sorry, you got it wrong!`
    }
}
