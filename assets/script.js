$(document).ready(function(){ 


$('#startBtn').on("click", function() {;
	$('#startBtn').hide();
	$('.main').append($('<div>', {id: "triviaGame"}));
	displayQuestion(0); // Loads the questions in
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
var sTime = new Date().getTime();
var countDown = 15;
var counter = null;


// Creates and returns the div that contains the question and choices
displayQuestion = function(x) {

	//set countdown 
	$("#countdown").show();
    $("#aftercount").hide();

	setTimer(20);

	//remove the first question from the array 
	var currentQ = questions[x];
	var parentElem = $("#triviaGame");
	if(currentQ){
		var header = $('<h2>Question ' + (currentQ.qNum+1) + '</h2>');
		parentElem.append(header);
		var question = $('<p>').append(currentQ.question);
		parentElem.append(question);
		var answers = createSelection(x);
		parentElem.append(answers);
		var submitBtn = $('<button>',{id:'submit'});
		parentElem.append(submitBtn);
		$('#submit').html('Submit');

		$('#submit').on('click', function(e) {
			e.preventDefault();
			if(counter){
				clearInterval(counter);
			}
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
		
	}
}

createSelection = function(x) {
	var answerList = $('<ul>');
    var item;
    var id = '';
    var input = '';
    for (var i = 0; i < questions[x].choices.length; i++) {
      item = $('<li>');
      id = i+"-option";
      input = '<input type="radio" id="'+id+'" name="answer" value=' + i + ' />';
      label = '<label for="'+id+'">' + questions[x].choices[i] + '</label>';
      item.append(input);
      item.append(label);
      answerList.append(item);
    }
    return answerList;
  }

choose = function() {
    selection[questionCount] = +$('input[name="answer"]:checked').val();
 }

displayNext = function() {
	$('#triviaGame').html('');
	if (questionCount < questions.length){
		displayQuestion(questionCount);
	
	}else {
		displayResults();
	}

}


displayResults = function(){
	$('#triviaGame').html('');
	$('#countdown').remove();
	$('#aftercount').remove();


	var parentElem = $("#triviaGame");
	var total = selection.length;
	var numCorrect = 0;
	selection.forEach(function(item, i){
		if(item == questions[i].correctAnswer){
			numCorrect++;
		}
	});

	parentElem.append($('<h1>').append("Gameover!"));
	parentElem.append($('<h2>').append("You Scored: " + numCorrect + "/" + total));
	

}

setTimer = function() {
	sTIme = new Date().getTime();

	UpdateTime();
	counter = setInterval(UpdateTime, 500);
}
  
UpdateTime = function() {
	var cTime = new Date().getTime();
	var diff = cTime - sTime;
	var seconds = countDown - Math.floor(diff / 1000);
	if (seconds >= 0) {
		var minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;
		$("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
		$("#seconds").text(seconds < 10 ? "0" + seconds : seconds);  
	} else {
		$('#countdown').hide();
		$('#aftercount').show();
		clearInterval(counter);
		timesUp();

	}
}

timesUp = function() {
	if(counter) {
		clearInterval(counter);

	}
	var parentElem = $('#triviaGame');
	var nextBtn = null;
	var seeResultsBtn = null;
	//negative one means incorrect
	selection.push(-1);

	//remove submit button
	$('#submit').remove();
	if (selection.length != questions.length){
		//add next button
		nextBtn = $('<button>', {id: 'submit'});
		nextBtn.html("Next");
		parentElem.append(nextBtn);
	} else{
		//add 'see results' button
		seeResultsBtn = $('<button>', {id:'submit'});
		seeResultsBtn.html("See Results");
		parentElem.append(seeResultsBtn);
	}


	//disable radio buttons
	$('input[name="answer"]').attr('disabled',true);

	//add the click handler for next button
	$('#submit').on('click', function(e) {
		if(counter){
			clearInterval(counter);
		}
		e.preventDefault();

		if(selection.length != questions.length){
			questionCount++;
			displayNext();
		}else{
			displayResults();
		}
		
		
	});	
}



});