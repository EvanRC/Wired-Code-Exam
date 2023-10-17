var multiplechoiceEl = document.getElementById("multiple-choice"); // creates variable for multiple choice container and referenced to html element by get element by id method
multiplechoiceEl.style.display = "none"; //hides multiple choice
var timerEL = document.querySelector(".timer"); // creates variable and stores timer class refference within it. 
var timerObject; // creates timerObject variable
var timerCounter = 50; // create a timer counter of 50 seconds
var startButtonEL = document.getElementById("start-button"); //creates a variable for start button and retrieves reference to related html element  and then is stored within that variable.
var highScoreFormEL = document.getElementById("high-score-form");  // creates a variable for the high score form.
var answerAlertEl = document.getElementById("alert-answer"); // creates variable for an alert regarding the right or wrong answer. 
highScoreFormEL.style.display="none"; // hides the high score form

var questionList = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "Hot Tamale Lemonade", "Hyperloop Testing Material", "Happy TreeHouse Living"],
        correct: "HyerText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Crazy Superb Snacks", "Continental Style Sandwhiches", "Cascading Style Sheets", "Cascade Ski Snow-Shop"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What is Javascript?",
        choices: ["A coffee shop", "A legendary play script", "An infectious disease", "A scriptive programming language"],
        correct: "A scriptive programming langauge"
    },
    {
        question: "What is the DOM?",
        choices: ["The lead guy from fast and furious", "A weapon", "Decimal Only Math", "Document Object Model"],
        correct: "Document Object Model"
    },
    {
        question:"what is a for loop?",
        choices: ["A racetrack", "A programming tool to complete a set of insructions a fixed amount of times", "A type of knot", "A math equation often used in the realm of quantum physics"],
        correct: "A programming tool to complete a set of instructions a fixed amount of times"
    }
]; //creates a list of questons for the quiz and their answeres, plus it specifies the correct answer

var questionIndex = 0; 
var questionEl = document.getElementById("question");
var choiceButtons = document.querySelectorAll("multiple-choice button");
var score = 0;
