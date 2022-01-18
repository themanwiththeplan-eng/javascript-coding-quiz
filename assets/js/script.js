var highestScores = document.querySelector('.highest-scores');
var key;

var goBackBtn = document.querySelector('.goBack');
var clearHighscores = document.querySelector('.clear');
var highscores = document.querySelector('.highscores');
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
var questionArr = ["What data types are Dictionaries considered in Javascript?", "What is the correct declaration of a for loop?", "How is an array declared in javascript?", "What is the correct way to get an element by id in javascript?", "How do you set an item in localStorage using javascript?"]
var answers = [{1: "Object", 2: "String", 3: 'Array', 4: "Integer"}, {1: "for(i<1. i=2){};", 2: "for(s in students; s=0){};", 3: "for(var i = 0; i < 0; i++){}", 4: "for([key][value] of Object.entries('object';)){};"}, {1: `var x = {};`, 2: `var x = ();`, 3: `var x == [];`, 4: `var x = [];`}, {1: 'document.getElementById', 2: 'document.location.reload', 3: 'document.querySelector', 4: 'localStorage.setItem'}, {1: 'document.querySelector', 2: 'document.getElementById', 3: 'localStorage.setItem', 4: 'object.toString'},{}];
startEl.textContent = `Start Quiz`;
startEl.addEventListener('click', startQuiz);
var score = 0;
var questionAsk = 0;
var index = 0;
var timerDecrement;


function startQuiz(){
   
    
    
    
     timerDecrement = setInterval(function(){
    
    
        if(count > 0){
            count--;
            timerEl.textContent = `Timer: ${count}`;
        }else{
            clearInterval(timerDecrement);
            timerEl.textContent = `Your quiz is over, your score was ${score}`;
            saveScore();
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

    highscores.addEventListener('click', function(){
        clearInterval(timerDecrement);
        timerEl.textContent = ``;
    })
}

oneEl.addEventListener('click',function(){
    if(questionAsk == 0 || questionAsk == 3){
        rightAnswer();
    }else{
        wrongAnswer();
    }
    if(questionAsk > 4){
        saveScore();
        
    }
})
twoEl.addEventListener('click', function(){
    wrongAnswer();
    if(questionAsk > 4){
        saveScore();
        
    }
})
threeEl.addEventListener('click', function(){
    if(questionAsk == 1 || questionAsk == 4){
        rightAnswer();
    }else{
        wrongAnswer();
       
    }
    if(questionAsk > 4){
        saveScore();
        
    }
})
fourEl.addEventListener('click', function(){
    if(questionAsk == 2){
        rightAnswer();
    }else{
        wrongAnswer();
    }
    if(questionAsk > 4){
        saveScore();
        clearInterval(timerDecrement);
    }
})

highscores.addEventListener('click', viewHighscore);


function viewHighscore(){
    
    document.getElementById('quiz').style.display = "none";
    document.getElementById('starter').style.display = "none";
    document.getElementById('questions').style.display = "none";

    document.getElementById('highscoreForm').style.display = "flex";
    var x = document.createElement('li');
    x.style.fontSize = "40px";
    
    x.textContent = localStorage.getItem(key);
   
    for(i = 0; i < localStorage.length; i++){
        x;
        highestScores.appendChild(x);
        x.textContent = localStorage.getItem(localStorage.key(i));
    }
    clearHighscores.addEventListener('click', function(){
        highestScores.removeChild(x);
    })
    
}


goBackBtn.addEventListener('click', function(){
    window.location.reload();
});

clearHighscores.addEventListener('click', clearHighscore);
function clearHighscore(){
    localStorage.clear();
    
}
function saveScore(){
    rightWrong.textContent = "";
    key = prompt(`Game over! Your score was ${score}! What are your initials?`);
    var emptyHigh = {};
    emptyHigh[key] = score;
    console.log(`${score}`);
    localStorage.setItem(key, JSON.stringify(emptyHigh));
    
    document.getElementById('quiz').style.display = "none";
    document.getElementById('starter').style.display = "none";
    document.getElementById('questions').style.display = "none";

    document.getElementById('highscoreForm').style.display = "flex";
    clearInterval(timerDecrement);
    timerEl.textContent = ``;
    var t = document.createElement('li')
    t.style.fontSize = "40px";
    highestScores.appendChild(t);
    t.textContent = key + " " + score;
    if(key.length < 1 || key == null){
        window.location.reload();
    }
    
    
    clearHighscores.addEventListener('click', function(){
        highestScores.removeChild(t);
    })
   
    
}
function rightAnswer(){
    score = 5 + score;
    questionAsked.textContent = questionArr[++questionAsk];
    index++;
    oneEl.innerHTML = answers[index][1];
    twoEl.innerHTML = answers[index][2];
    threeEl.innerHTML = answers[index][3];
    fourEl.innerHTML = answers[index][4];
    console.log(score);
    rightWrong.textContent = `Congrats you got it right! Youre score is now ${score}`;
}
function wrongAnswer(){
    count -= 5;
    questionAsked.textContent = questionArr[++questionAsk];
    index++;
    oneEl.innerHTML = answers[index][1];
    twoEl.innerHTML = answers[index][2];
    threeEl.innerHTML = answers[index][3];
    fourEl.innerHTML = answers[index][4];
    console.log(score);
    rightWrong.textContent = `Sorry, you got it wrong!`;
}
if(questionAsk > 4){
    saveScore();
}