let questions = [
    {
    "question_1":"Frage 1",
    "answer_1":"Antwort 1",
    "answer_2":"Antwort 2",
    "answer_3":"Antwort 3",
    "answer_4":"Antwort 4",
    "right_answer":3
    },

    {
    "question_2":"Frage 2",
    "answer_1":"Antwort 1",
    "answer_2":"Antwort 2",
    "answer_3":"Antwort 3",
    "answer_4":"Antwort 5",
    "right_answer":2
    },

    {
    "question_3":"Frage 3",
    "answer_1":"Antwort 1",
    "answer_2":"Antwort 2",
    "answer_3":"Antwort 3",
    "answer_4":"Antwort 6",
    "right_answer":1
    }
]


let counter = 0;
let sumOfQuestions = questions.length;
let trueAnswer = 0;

let audioSucess = new Audio("./sounds/success.mp3")
let audioFail = new Audio("./sounds/fail.mp3")
let aplaus = new Audio("./sounds/applaus.mp3")



function init(){
    startQuiz(counter);
    document.getElementById("button").setAttribute("disabled","disabled")
}


function startQuiz(counter){
    let idOfQuestion = `question_${counter+1}`
    document.getElementById("card-title").innerHTML = questions[counter][idOfQuestion];
        
    for(let i = 1; i <= 4; i++){
        let idOfAnswers = `answer_${i}`
        document.getElementById(idOfAnswers).innerHTML = `<a class="card-body" href="#">${questions[counter][idOfAnswers]}</a>`;
    }
    
}


function checkAnswer(selection){
    right_answer = questions[counter]["right_answer"]
    selected_answer = selection.slice(-1)
    id_right_answer = `answer_${right_answer}`
   if (selected_answer == right_answer){
    counter++;
    trueAnswer++;
    document.getElementById(selection).classList.add("bg-success")
    checkProgress()
    disableAnswers()
    audioSucess.play();
   } else {
    counter++;
    document.getElementById(selection).classList.add("bg-danger")
    document.getElementById(id_right_answer).classList.add("bg-success")
    checkProgress()
    disableAnswers()
    audioFail.play();
   }

   document.getElementById("button").removeAttribute("disabled","disabled")
}

function nextQuestion(){    
    if (counter == questions.length){
        counter = 0;
        endScreen();
    } else{
        init();
        document.getElementById(`answer_${questions[counter-1].right_answer}`).classList.remove("bg-success");
        resetButton();
        enableAnswers()
    }
}

function checkProgress(){
    let progress = Math.round((counter/questions.length)*100)
    document.getElementById("progress-bar").style.width = progress+'%';
    document.getElementById("progress-bar").innerHTML = progress+'%';
}

function resetButton(){
    for(let i = 1; i <=4; i++){
        document.getElementById(`answer_${i}`).classList.remove("bg-danger")
        document.getElementById(`answer_${i}`).classList.remove("bg-success")
    }
    document.getElementById("button").setAttribute("disabled","disabled")
}

function endScreen(){
    document.getElementById("endScreen").style = '';
    document.getElementById("main-container").style = 'display:none';
    document.getElementById("endScreen-div").innerHTML = endScreenInnerHTML(sumOfQuestions, trueAnswer);
    aplaus.play();
    confetti();
}

confetti({
    particleCount: 1000,
    spread: 1000,
    origin: { y: 3.6 }
  });

function disableAnswers(){
    for(let i = 1; i <= 4; i++){
        idOfAnswers = `answer_${i}`;
        document.getElementById(idOfAnswers).setAttribute("disabled","enabled");
    }
}

function enableAnswers(){
    for(let i = 1; i <= 4; i++){
        idOfAnswers = `answer_${i}`;
        document.getElementById(idOfAnswers).removeAttribute("disabled","disabled");
    }
}

function endScreenInnerHTML(sumOfQuestions, trueAnswer){
    return `
    
    <div class="endScreen-pics">
        <img class="slide-in-bck-center" id="thumbs" src="./img/thumbs.png">
        <img id="end" src="./img/end.jpg">
        <img class="slide-in-bck-center" id="thumbs" src="./img/thumbs.png">
    </div>
    <button id="button" type="button" class="btn btn-primary" onclick="restartQuiz()">Quiz Neustarten</button>
    <div id="questionStats" class="questionStats">
        <div id="totalQuestions">Fragen insgesamt: ${sumOfQuestions}</div>
        <div id="rightQuestions">Richtige: ${trueAnswer}</div>
    </div>
    `
}

function restartQuiz(){
    counter = 0;
    sumOfQuestions = questions.length;
    trueAnswer = 0;
    document.getElementById("endScreen").style = 'display:none';
    document.getElementById("main-container").style = '';
    document.getElementById("progress-bar").style.width = '0%';
    document.getElementById("progress-bar").innerHTML = '';
    for(let i = 1; i <=4; i++){
        document.getElementById(`answer_${i}`).classList.remove("bg-danger")
        document.getElementById(`answer_${i}`).classList.remove("bg-success")
    }
    init();
    enableAnswers();
    document.getElementById("button").setAttribute("disabled","enabled")
}