$(document).ready(function(){ 


$('#startBtn').on("click", function() {;
	$('#startBtn').hide();
	$('.main').append($('<div>', {id: "triviaGame"}));
	displayQuestion(); // Loads the questions in
})

var questions = [{
	// "q1": {
	qNum: 0,
	question: "In FFXIII, who is Lightning's sister?",
	choices: ["Vanille", "Fang", "Serah", "Tifa"],
	correctAnswer: 2
	}, 
	// "q2": {
		{
	qNum: 1,
	question: "In FFVII, who was the original owner of the Buster Blade?",
	choices: ["Zach Fair", "Angeal Hewley", "Cloud Strife", "Vincent Valentine"],
	correctAnswer: 1
	}, 
	// "q3": {
		{
	qNum: 2,
	question: "Who is your first Summon in FFX?",
	choices: ["Valefor", "Yojimbo", "Shiva", "Bahamut"],
	correctAnswer: 0
	},
	// "q4": {
		{
	qNum: 3,
	question: "Who is the main protagonist in FFXV?",
	choices: ["Noctis", "Gladio", "Ignis", "Prompto"],
	correctAnswer: 0
}];


var questionCount = 0; //tracks the number of question
var selection = []; // contains the choices
var trivia = $('#triviaGame'); //trivia div object

$('#submit').on('click', function() {
	e.preventDefault();

	if (trivia.is(':animated')){
		return false;
	}

	choose();

	if (isNaN(selection[questionCount])) {
		alert('Please choose an answer!');
	} else {
		questionCount++;
		displayNext();
	}
});

// Creates and returns the div that contains the question and choices
displayQuestion = function(x) {
	for (var x = 0; x < questions.length; x++) {
		console.log(questions[x].qNum);
	$('#triviaGame').append($('<h2>', {id: "questions" appendTo: this}));
	var triviaElement = $('#questions');
	var header = $('<h2>Question ' + (questions[x].qNum) + '</h2>');
	triviaElement.append(header);
	var question = $('<p>').append(questions[x].question);
	triviaElement.append(question);
	var answers = createSelection();
	triviaElement.append(answers);
	var submitBtn = $('<button>',{id:'submit'});
	triviaElement.append(submitBtn);
	$('#submit').html('Submit');
	}
}

createSelection = function(x) {
	var answerList = $('<ul>');
    var item;
    var id = '';
    var input = '';
    for (var i = 0; i < questions[0].choices.length; i++) {
      item = $('<li>');
      id = i+"-option";
      input = '<input type="radio" id="'+id+'" name="selector" value=' + i + ' />';
      // input += questions.q1.choices[i];
      label = '<label for="'+id+'">' + questions[0].choices[i] + '</label>';
      // checkBox = $('<div>', {class: 'check'});
      item.append(input);
      item.append(label);
      // item.append(checkBox);
      answerList.append(item);
    }
    return answerList;
  }

choose = function() {
    selection[questionCount] = +$('input[name="answer"]:checked').val();
 }

displayNext = function() {
	$('#triviaGame').remove();

	if (questionCount < questions.length){
		var nextQuestion = displayQuestion(questionCount);
		trivia.append(nextQuestion);
		if (!(isNan(selection[questionCount]))) {
			$('input[value='+selection[questionCount]+']').prop('checked', true);
		}
	}

};

  

    //   for( var key in questions ){
    // 	for (var i = 0; i < questions[ key ].choices.length; i++) {
    //   		item = $('<li>');
		  //   input = '<input type="radio" id="f-option" name="selector" value=' + i + ' />';
		  //   input += questions[ key ].choices[i];
		  //   label = '<label for="f-option" />';
		  //   checkBox = $('<div>', {class: 'check'});
		  //   item.append(input);
		  //   item.append(label);
		  //   item.append(checkBox);
		  //   answerList.append(item);
    // 	}
    // }
    // return answerList;
 // }


// var questions = [{
// 	questions: "In FFXIII, who is Lightning's sister?",
// 	choices: ["Vanille", "Fang", "Serah", "Tifa"],
// 	correctAnswer:
// }],

// var numQuestions = 0; // question number
// var selections = []; // Where the choices are contained
// var quiz = $('#quiz'); // Quiz object

// displayNext();

});