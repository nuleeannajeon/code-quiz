var startContainer = document.querySelector(".start-container");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answer-btn");

let shuffledQuestions, currentQuestionIndex

document.querySelector('#answer-btn').addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion() });
document.querySelector('#answer-btn').addEventListener('click', answerCorrection);


function startQuiz() {
    console.log ( `You have started the quiz. Good luck!` );
    startContainer.classList.add('hide');
    shuffledQuestions = questionSet.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide');

    showQuestion(shuffledQuestions[currentQuestionIndex]);
} 

function nextQuestion() {
    // reset ();
    showQuestion(shuffledQuestions[currentQuestionIndex]);  
}

// function reset() {
//     clearStatusClass(document.body);
//     while (answerButtonEl.firstChild) {
//         answerButtonEl.removeChild(answerButtonEl.firstChild);
//     }
// }
// NEED TO FIX IT MORE IN ORDER TO HIDE THE PREVIOUS ANSWER BUTTON

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
    })}
   
function answerCorrection(event) {  
    const selectedBtn = event.target;
    const correct = selectedBtn.dataset.correct;
    if (correct==="true"){
        console.log (" hey you got correct answer ");
        document.querySelector('#correct-answer').classList.remove('vision');
    } else {
        console.log("WRONG!!!!!")
        document.querySelector('#wrong-answer').classList.remove('vision');
    }
}





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