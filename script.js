var timeEl = document.getElementById("time");
 var startContainer = document.getElementById('start');
 var startButton = document.getElementById('start-button');
 var questionsContainer = document.getElementById('questions');
 var titleEl = document.getElementById('title');
 var buttonsEl = document.getElementById('buttons');
 var initialsContainer = document.getElementById('initials');
 var initalInputEl = document.getElementById('initial-input');
 var submitButton = document.getElementById('submit');
 var timerInterval;
 var secondsLeft = 60;
 var choice1 = document.getElementById("button1");
 var choice2 = document.getElementById("button2");
 var choice3 = document.getElementById("button3");
 var choice4 = document.getElementById("button4");
 var questionIndex = 0;


startButton.addEventListener('click',function(){
    questionsContainer.classList.remove('hide');
    startContainer.classList.add('hide');
})

