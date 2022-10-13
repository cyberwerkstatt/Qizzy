let questions = [{
    "question_1":"Frage 1",
    "answer_1":"Antwort 1",
    "answer_2":"Antwort 2",
    "answer_3":"Antwort 3",
    "answer_4":"Antwort 4",
    "answer_":3,

    "question_2":"Frage 2",
    "answer_1":"Antwort 1",
    "answer_2":"Antwort 2",
    "answer_3":"Antwort 3",
    "answer_4":"Antwort 4",
    "answer_":2
}]


let counter = 0;


function init(){
    startQuiz(counter);
}


function startQuiz(counter){
    document.getElementById("card-title").innerHTML = questions[counter][`question_`+(counter+1)];
}