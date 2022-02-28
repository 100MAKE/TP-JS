const quizData = [
    {
        question: "quelle  est la valeur de ln1",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a",
    },
    
    {
        question: "Quel club est le champion d'angleterre 2021?",
        a: "arsenal",
        b: "manchester city",
        c: "manchester united",
        d: "PSG",
        correct: "b",
    },
    {
        question: "Que signifie HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Qui sont les finalistes de la derniere LDC?",
        a: "liverpool vs man u",
        b: "mancity vs liverpool",
        c: "chelsea vs liverpool",
        d: "chelsea vs mancity",
        correct: "d",
    },

];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer') // question input
const questionEl = document.getElementById('question')  // h2
const a_question = document.getElementById('a_question')
const b_question = document.getElementById('b_question')
const c_question = document.getElementById('c_question')
const d_question = document.getElementById('d_question')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0  // Quiz en cours
let score = 0

loadQuiz() // chargerQuiz 

function loadQuiz() {

    deselectAnswers() // désélectionnerRéponses

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_question.innerText = currentQuizData.a
    b_question.innerText = currentQuizData.b
    c_question.innerText = currentQuizData.c
    d_question.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
    if(answer === quizData[currentQuiz].correct) {
        score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `
        <h2>Vous avez trouvé ${score}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">ReJouer</button>
        `
    }
    }
})