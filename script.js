var timeEl = document.getElementById("time");
var startContainer = document.getElementById('start');
var startButton = document.getElementById('start-button');
var questionsContainer = document.getElementById('questions');
var titleEl = document.getElementById('title');
var initialsContainer = document.getElementById('initials');
var initalInputEl = document.getElementById('initial-input');
var submitButton = document.getElementById('submit');
var timerInterval;
var secondsLeft = 60;
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");
var testBtn = document.getElementById('btn test')
var questionPosition = 0;
var score = 0;

var questions = ['which of the following is not a logical operator?', "What is the difference between the let and const variable?", 'What does console.log do?', 'What is the correct math assignment operator for divison?']

var answers = ['##', 'let can change, const is constant', 'logs items to the console', '/=']

var options = [['##', '&&', '!', '||'], ['there is no difference', 'let can change, and const is constant', 'const can change, and let is constant', 'let is a function const is not'], ['calucates numbers in an array', 'logs items to the console', 'comapres values'], ['+=', '*=', '/=', '-=']]

startButton.addEventListener('click', function () {
    questionsContainer.classList.remove('hide');
    startContainer.classList.add('hide');
    showQuestions()
})

function showQuestions(questionPosition) {
    titleEl.textContent = questions[questionPosition]
    choice1.textContent = options[questionPosition][0]
    choice2.textContent = options[questionPosition][1]
    choice3.textContent = options[questionPosition][2]
    choice4.textContent = options[questionPosition][3]
}

console.log(titleEl);

choice1.addEventListener('click', function () {

    console.log(answers[questionPosition]);
    if (choice1.textContent === answers[questionPosition]) {
        console.log('Correct')
        score += 1
    } else {
        console.log('Wrong')
        score -= 1
    }
    questionPosition += 1
    if (questionPosition <= questions.length - 1) {

        showQuestions(questionPosition)
    }
    else {
        end()
    }
})

choice2.addEventListener('click', function () {

    console.log(answers[questionPosition]);
    if (choice2.textContent === answers[questionPosition]) {
        console.log('Correct')
        score += 1
    } else {
        console.log('Wrong')
        score -= 1
    }
    questionPosition += 1
    if (questionPosition <= questions.length - 1) {

        showQuestions(questionPosition)
    }
    else {
        end()
    }
})

choice3.addEventListener('click', function () {

    console.log(answers[questionPosition]);
    if (choice3.textContent === answers[questionPosition]) {
        console.log('Correct')
        score += 1
    } else {
        console.log('Wrong')
        score -= 1
    }
    questionPosition += 1
    if (questionPosition <= questions.length - 1) {

        showQuestions(questionPosition)
    }
    else {
        end()
    }
})


choice4.addEventListener('click', function () {
    console.log(answers[questionPosition]);
    if (choice4.textContent === answers[questionPosition]) {
        console.log('Correct')
        score += 1
    } else {
        console.log('Wrong')
        score -= 1
    }
    questionPosition += 1
    if (questionPosition <= questions.length - 1) {

        showQuestions(questionPosition)
    }
    else {
        end()
    }
})

function end() {
    timeEl.textContent = "Done...";
    clearInterval(time);
    questionPosition = 0
    if (score < 0) {
        score = 0
    }
    questionsContainer.innerHTML = "";
    var scoreHeader = document.createElement("h1")
    scoreHeader.innerHTML = "You got a score of: " + score
    questionsContainer.append(scoreHeader)
    var input = document.createElement("input")
    input.setAttribute("placeholder", "Initials...")
    questionsContainer.append(input)
    var submitBtn = document.createElement("button")
    submitBtn.innerHTML = "Submit"
    submitBtn.addEventListener("click", function () {
        var initials = input.value
        var values = {
            initials: initials,
            score: score
        }
    localStorage.setItem("values", JSON.stringify(values))
    })
    questionsContainer.append(submitBtn)
    
}

startButton.addEventListener('click', function () {
    questionsContainer.classList.remove('hide');
    startContainer.classList.add('hide');
    showQuestions(questionPosition)
    time = setInterval(getcounter, 1000);
    function getcounter() {
        if (timeEl.textContent <= 0) {
            timeEl.textContent = "Done...";
            clearInterval(time);
        }
        else {
            timeEl.textContent -= 1;
        }
    }
    getcounter()
})



console.log(titleEl);





