var startEl = document.querySelector('.start');
var timerEl = document.querySelector('.timer');
var count = 61;

startEl.addEventListener('click', countdown);

function countdown(){
    var timerDecrement = setInterval(function(){
        if(count > 1){
            count--;
            timerEl.textContent = `Timer: ${count}`
        }else{
            timerEl.textContent = '';
            clearInterval(timerDecrement);
        }
    }, 1000)
    
}
