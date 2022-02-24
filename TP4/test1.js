const rem = [
    {
        question: "donner la valeur de ln1",
        a: "1",
        b: "2",
        c: "1000",
        d: "0",
        correct: "d",
    },
    
    {
        question: "Que signifie CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "qui est l'entraineur actuel du club d'everton?",
        a: "lampard",
        b: "klopp",
        c: "mboma",
        d: "pep",
        correct: "a",
    },
    {
        question: "qui a remporté le championnnat d'angleterre 2021?",
        a: "chelsea",
        b: "juve",
        c: "man u",
        d: "man city",
        correct: "d",
    },

];


const td= document.getElementById('td')
const bien = document.querySelectorAll('.question') // question input
const nieb = document.getElementById('answer')  // h2
const a1answer = document.getElementById('a1answer')
const b1answer = document.getElementById('b1answer')
const c1answer = document.getElementById('c1answer')
const d1answer = document.getElementById('d1answer')
const btn = document.getElementById('submit')

let ver = 0  // Quiz en cours
let score = 0

loadQuiz() // chargerQuiz 

function loadQuiz() {

    deselectAnswers() // désélectionnerRéponses

    const raz = rem[ver]

    bid.innerText = raz.answer
    a1answer.innerText = raz.a1
    b1answer.innerText = raz.b1
    c1answer.innerText = raz.c1
    d1answer.innerText = raz.d1
}

function deselectAnswers() {
    bien.forEach(bien => bien.checked = false)
}

function getSelected() {
    let mine
    bien.forEach(bien => {
        if(bien.checked) {
            mine= bien.id
        }
    })
    return mine
}


btn.addEventListener('click', () => 
{

    const mine= getSelected()

    if(mine) 
    {
        if(mine === rem[ver].correct) 
        {
            score++
        }

        ver++

        if(ver< rem.length) 
        {
            loadQuiz()
        }
    } 
    else 
    {
        td.innerHTML = `
        <h2>Vous avez trouvé ${score}/${rem.length} questions.</h2>
        <button onclick="location.reload()">ReJouer</button>
        
    }   
})
