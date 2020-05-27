var startButton = document.querySelector("#start-btn");
var questionContainer = document.querySelector("#question-container");

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log ( `You have started the quiz. Good luck!` );
    document.querySelector(".start-container").classList.add('hide');
    questionContainer.classList.remove('hide');

} 




var questions = [
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