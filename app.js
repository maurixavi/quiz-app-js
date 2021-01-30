const quizData = [
    {
        question: "Which is the capital of Canada?",
        a: "Montreal",
        b: "Ottawa",
        c: "Toronto",
        d: "Vancouver",
        correct: 'b'
    },
    {
        question: "How many Olympic medals won Michael Phelps?",
        a: "28",
        b: "23",
        c: "26",
        d: "31",
        correct: 'a'
    },
    {
        question: "What year was the first iPhone released?",
        a: "2009",
        b: "2007",
        c: "2008",
        d: "2006",
        correct: 'b'
    },
    {
        question: "What what movie won the Oscar for best picture in 1994?",
        a: "The Shawshank Redemption",
        b: "Pulp Fiction",
        c: "Four Weddings and a Funeral",
        d: "Forrest Gump",
        correct: 'd'
    },
    {
        question: "Which U.S. president owned a pet hyena? ",
        a: "Thomas Jefferson",
        b: "Harry S. Truman",
        c: "Theodore Roosevelt",
        d: "Jimmy Carter",
        correct: 'c'
    }
]

const quiz = document.getElementById("quiz");
const answerElems = document.getElementsByName('answer');
const questionElem = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionElem.innerText = currentQuizData.question; 
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getAnswerSelected() {
    let answer = undefined;

    for (var i = 0, length = answerElems.length; i < length; i++) {
        if (answerElems[i].checked) {    
            answer = answerElems[i].id;
        }
    }

    return answer;
}

function deselectAnswers() {
    answerElems.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getAnswerSelected();

    if (answer) {
        console.log("answer selected: ", answer);
        //check if answer is correct
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //Show final result:
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Try again!</button> `;
    }
});

