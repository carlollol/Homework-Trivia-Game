$(document).ready(function(){ 

var questions = [{
	question: "In FFXIII, who is Lightning's sister?",
	choices: ["Vanille", "Fang", "Serah", "Tifa"],
	correctAnswer: 2
}, {
	question: "In FFVII, who was the original owner of the Buster Blade?",
	choices: ["Zach Fair", "Angeal Hewley", "Cloud Strife", "Vincent Valentine"],
	correctAnswer: 1
}, {
	question: "",
	choices: [""],
	correctAnswer: 0
}, {
	question: "",
	choices: [""],
	correctAnswer: 0
}];

var questionCount = 0; //tracks the number of question
var selection = []; // contains the choices
var trivia = $('#triviaGame'); //trivia div object

$('#startBtn').on("click", function(e) {
	e.preventDefault();
	$('#startBtn').hide();
	$('.main').append($('<div>', {id: "triviaGame"}));
});


questionElement = function(index) {
	var triviaElement = $('<div>', {
		id: 'questions'
	});

	var header = $('<h2>Question' + (index + 1) + '</h2>');
	triviaElement.append(header);

	var question = $('<p>').append(question[index].question);
	triviaElement.append(question);

	var radioButtons = createRadios(index);
	triviaElement.append(radioButtons);

	return triviaElement;
}

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