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
    }
]


let counter = 0;


function init(){
    startQuiz(counter);
}


function startQuiz(counter){
    // let answers = questions[counter]
    document.getElementById("card-title").innerHTML = questions[counter][`question_`+(counter+1)];

    for(let i = 1; i <= 4; i++){
        let idOfAnswers = `answer_${i}`
        document.getElementById(idOfAnswers).innerHTML = `<a class="card-body" href="#">${questions[counter][idOfAnswers]}</a>`;
    }
    
    // document.getElementById("answer_1").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_1"]}</a>`;
    // document.getElementById("answer_2").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_2"]}</a>`;
    // document.getElementById("answer_3").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_3"]}</a>`;
    // document.getElementById("answer_4").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_4"]}</a>`;
}


function checkAnswer(selection){
    right_answer = questions[counter]["right_answer"]
    selected_answer = selection.slice(-1)
    id_right_answer = `answer_${right_answer}`
   if (selected_answer == right_answer){
    document.getElementById(selection).classList.add("bg-success")
    console.log("richtig")
   } else {
    document.getElementById(selection).classList.add("bg-danger")
    document.getElementById(id_right_answer).classList.add("bg-success")
   }
}

function nextQuestion(){
    counter ++
    init();
    document.getElementById(`answer_${questions[counter-1].right_answer}`).classList.remove("bg-success");
    console.log(counter)
    resetButton();
}

function resetButton(){
    for(let i = 1; i <=4; i++){
        document.getElementById(`answer_${i}`).classList.remove("bg-danger")
        document.getElementById(`answer_${i}`).classList.remove("bg-success")
        console.log(`answer_${i}`)
    }
}