var startContainer = document.querySelector(".start-container");
var questionContainerEl = document.querySelector("#question-container");
var finalContainerEl = document.querySelector("#final-container");
var scoreContainerEl = document.querySelector('#score-container');
var scoreListEl = document.querySelector('#score-list');
var initialBox = document.querySelector('#initial-box');
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answer-btn");
var timerEl = document.querySelector('#timer');


let shuffledQuestions, currentQuestionIndex


document.querySelector('#start-btn').addEventListener('click', countDown);
document.querySelector('#answer-btn').addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion() });
document.querySelector('#answer-btn').addEventListener('click', answerCorrection);

//90secs Timer and Stop Timer when quiz is done
var counter = 0;
var timeleft = 100;
function countDown () {
    console.log( `countdown timer is running!` )
       var timer = setInterval(function() {
        timeleft--;
        timerEl.innerHTML = 'Timer: '+timeleft;
        if ( timeleft <= 0 ) {
            clearInterval(timer);
            questionContainerEl.classList.add('hide');
            finalContainerEl.classList.remove('hide');
        }
        if ( shuffledQuestions.length < currentQuestionIndex +1 ){
            clearInterval(timer);
            document.querySelector('#user-score').innerHTML = ( `Your final score is ${timeleft}` );
        }
    }, 1000);
}

//Subtract Time
function wrongSubtract (){ timeleft -= 15;
    timerEl.innerHTML='Timer:'+timeleft;
}

function startQuiz() {
    console.log ( `You have started the quiz. Good luck!` );
    startContainer.classList.add('hide');
    shuffledQuestions = questionSet.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');
    nextQuestion();
} 

function nextQuestion() {
    reset ();
    if ( shuffledQuestions.length < currentQuestionIndex +1 ) {
        questionContainerEl.classList.add('hide');
        finalContainerEl.classList.remove('hide');
    }
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Remove previous array of answer buttons
function reset() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
        answerButtonEl.appendChild(button);
    })    
}

function answerCorrection(event) {  
    const selectedBtn = event.target;
    const correct = selectedBtn.dataset.correct;
    if (correct==="true"){
        console.log (" hey you got correct answer ");
        document.querySelector('#correct-answer').classList.remove('vision')
        setTimeout(function(){
            document.querySelector('#correct-answer').classList.add('vision'); 
         }, 1000);
    } else {
        console.log("WRONG!!!!!")
        document.querySelector('#wrong-answer').classList.remove('vision');
        setTimeout(function(){
            document.querySelector('#wrong-answer').classList.add('vision'); 
         }, 1000);
        wrongSubtract ();
    }  
}

//value of textbox to local storage(initial) with scores to highscore page
var score = 0;
var highscore = 0;
function highScore () {
    localStorage.setItem( 'initial', initialBox.value );
    localStorage.setItem( 'score', timeleft );
    finalContainerEl.classList.add('hide');
    scoreContainerEl.classList.remove('hide');

    var initial = localStorage.getItem( 'initial' );
    var score = localStorage.getItem( 'score' );
    scoreListEl.innerHTML = ( `<li>${initial} - ${score}</li>` );
}



//Question Array
var questionSet = [
    { question: " What is the standard language used to create web pages? ",
        answer: [
            { text: "HyperText Markup Language (HTML)", correct: true },
            { text: "Cascading Style Sheets (CSS)", correct: false },
            { text: "Javascript", correct: false },
            { text: "none of the above", correct: false }
        ]
    },
    { question: " What is a special variable used in Javascript that can hold more than one value at a time? ",
    answer: [
        { text: "string", correct: false },
        { text: "number", correct: false },
        { text: "array", correct: true },
        { text: "event", correct: false }
    ]
    },
    { question: " The JavaScript syntax defined two types of values: Fixed value and Variable value. What are Fixed values are being called? ",
    answer: [
        { text: "variable", correct: false },
        { text: "literals", correct: true },
        { text: "functions", correct: false },
        { text: "objects", correct: false }
    ]
    },
    { question: " ______ is a datatype that returns either of two values i.e. true or false.",
    answer: [
        { text: "number", correct: false },
        { text: "string", correct: false },
        { text: "array", correct: false },
        { text: "boolean", correct: true }
    ]
    },
    { question: " ______ are used to repeatedly run a block of code until a certain condition is met in JavaScript. ",
    answer: [
        { text: "loops", correct: true },
        { text: "syntax", correct: false },
        { text: "links", correct: false },
        { text: "inline", correct: false }
    ]
    }];

    