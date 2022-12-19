 
const quizData = [
    {
        question: "Oл ... тепті.",
        a:"допты",
        b:"етті",
        c:"суды",
        d:"отты",
        correct: "a",
    },
    {
        question: "Мен сені ... .",
        a:"сүйемін",
        b:"сүйеді",
        c:"сүйгіш",
        d:"сүймеді",
        correct: "a",
    },
    {
        question: "Ол кітап оқып ...",
        a:"отыр",
        b:"телевизор",
        c:"телефон",
        d:"қызмет",
        correct: "a",
    },
    {
        question: "Кітапты ...",
        a:"сүйеду",
        b:"оқиды",
        c:"себеді",
        d:"көреді",
        correct: "b",
    },
    {
        question: "Қазақ тілінде қанша әріп бар?",
        a:"36",
        b:"24",
        c:"42",
        d:"50",
        correct: "c",
    },
    {
        question: "Ата және ...",
        a:"Әже",
        b:"Ата",
        c:"Бала",
        d:"Су",
        correct: "a",
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d ;
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer 
}
submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            let res
            let encouraged
            switch (score) {
                case 2:
                case 3:
                    res = "A1"
                    encouraged = "zhaman emes."
                    break;
                case 4:
                case 5:
                    res = "A2"
                    encouraged = "mikti!"
                    break;
                case 5:
                case 6:
                    res = "B1"
                    encouraged = "Ote keremet!!"
                    break;
                case 7:
                case 8:
                    res = "B2"
                    encouraged = "Maasagan siz zhaksi bilesizgoi!"
                    break;
                case 9:
                case 10:
                    res = "C1"
                    encouraged = "Siz Kazak emesiz be?"
                    break;
                case 11:
                case 12:
                    res = "C2"
                    encouraged = "Tamasha sizden kutpedim!!!!!!"
                    break;
                default:
                    res = "A0";
                    encouraged = "biz sizge senemiz!"
                    break;
            }
            quiz.innerHTML = `
            <h2>Sizdin upai ${score}/${quizData.length} </h2>
            <h2>Biz sizge ${res} ge baruga kenes beremiz! </h2>
            <h2>${encouraged}</h2>
            <button onclick = "location.reload()">reload</button> 
            `
        }
    }
})



