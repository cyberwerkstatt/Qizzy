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
    "answer_4":"Antwort 4",
    "right_answer":2
    }
]


let counter = 0;


function init(){
    startQuiz(counter);
}


function startQuiz(counter){
    let answers = questions[counter]
    document.getElementById("card-title").innerHTML = questions[counter][`question_`+(counter+1)];
    
    document.getElementById("answer_1").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_1"]}</a>`;
    document.getElementById("answer_2").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_2"]}</a>`;
    document.getElementById("answer_3").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_3"]}</a>`;
    document.getElementById("answer_4").innerHTML = `<a class="card-body" href="#">${questions[counter]["answer_4"]}</a>`;
}


function checkAnswer(selection){
    right_answer = questions[counter]["right_answer"]
    selected_answer = selection.slice(-1)
   if (selected_answer == right_answer){
    console.log("richtig")
   }
}

function nextQuestion(){
    counter ++
    init();
    console.log(counter)
}