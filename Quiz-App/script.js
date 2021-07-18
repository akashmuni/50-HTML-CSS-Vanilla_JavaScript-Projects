const quizData = [
    {
        question: 'Which one of the following river flows between Vindhyan and Satpura ranges?',
        a: 'Narmada',
        b: 'Mahanadi',
        c: 'Son',
        d: 'Netravati',
        correct: 'a'
    },
    {
        question: 'The Central Rice Research Station is situated in?',
        a: 'Chennai',
        b: 'Cuttack',
        c: 'Bangalore',
        d: 'Quilon',
        correct: 'b'
    },
    {
        question: ' Who among the following wrote Sanskrit grammar?',
        a: 'Kalidasa',
        b: 'Charak',
        c: 'Panini',
        d: 'Aryabhatt',
        correct: 'c'
    },
    {
        question: 'Which among the following headstreams meets the Ganges in last?',
        a: 'Alaknanda',
        b: 'Pindar',
        c: 'Mandakini',
        d: 'Bhagirathi',
        correct: 'd'
    },
    {
        question: 'The metal whose salts are sensitive to light is?',
        a: 'Zinc',
        b: 'Silver',
        c: 'Copper',
        d: 'Aluminum',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;

        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions correctly.</h2><button onClick="location.reload()">Play Again</button>`;
        }
    }


});