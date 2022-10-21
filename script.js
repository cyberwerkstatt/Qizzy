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
        console.log(idOfQuestion)
    }
    
}


function checkAnswer(selection){
    right_answer = questions[counter]["right_answer"]
    selected_answer = selection.slice(-1)
    id_right_answer = `answer_${right_answer}`
   if (selected_answer == right_answer){
    counter++;
    document.getElementById(selection).classList.add("bg-success")
    console.log("richtig")
   } else {
    counter++;
    document.getElementById(selection).classList.add("bg-danger")
    document.getElementById(id_right_answer).classList.add("bg-success")
   }

   document.getElementById("button").removeAttribute("disabled","disabled")
}

function nextQuestion(){
    // counter ++
    
    if (counter == questions.length){
        counter = 0;
        endScreen();
    } else{
        init();
        document.getElementById(`answer_${questions[counter-1].right_answer}`).classList.remove("bg-success");
        resetButton();
    }
    
}

function resetButton(){
    for(let i = 1; i <=4; i++){
        document.getElementById(`answer_${i}`).classList.remove("bg-danger")
        document.getElementById(`answer_${i}`).classList.remove("bg-success")
    }
    document.getElementById("button").setAttribute("disabled","disabled")
}

function endScreen(){
    document.getElementById("endScreen").stlye = "";
    document.getElementById("main-container").style = 'display:none';
}

