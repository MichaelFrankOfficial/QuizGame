var teamOne = document.getElementById("teamOne"),
    teamTwo = document.getElementById("teamTwo"),
    teamOneScore = document.getElementById("teamOneScore"),
    teamTwoScore = document.getElementById("teamTwoScore"),
    btnStartGame = document.getElementById("btnStartGame"),
    btnRandomTeam = document.getElementById("btnRandomTeam"),
    btnAwardPoints = document.getElementById("btnAwardPoints")
btnNextQuestion = document.getElementById("btnNextQuestion"),
    questionTeamName = document.getElementById("questionTeamName"),
    questionNumber = document.getElementById("questionNumber"),
    questionInfo = document.getElementById("questionInfo"),
    scoreOne = document.getElementById("scoreOne"),
    scoreTwo = document.getElementById("scoreTwo");

var qNum = 0;

var scoreOneNum = 0;
var scoreTwoNum = 0;

var nextTeam = 1;


var questions = ["What is a function?", "What is a method?", "What are the 3 or 4 pillars of OOP? (5 pts each)",
    "Name the three types of programming styles we discussed. (5 pts each)", "What is the “gorilla and banana problem”?",
    "Describe Inheritance.", "Describe polymorphism.", "Name three HTML 5 elements used to semantically organize a web page.",
    "Describe one reason how using HTML 5 sections could be beneficial for some of your users.",
    "What’s the difference between relative and absolute links?",
    "Describe the difference between in-line and block elements.",
    "What does float do?",
    "What is one pain point of working with floats?",
    "If you have a div with class of “my-div”, what would the CSS look like to tell that div to use flexbox for its contents?",
    "What are some advantages of using a PaaS (Platform as a Service) offering like Azure App Services?",
    "Describe what media queries are and why we use them.",
    "What is the advantage of using percentages and not pixels for sizes?",
    "Why should we set the viewport?",
    "What’s the difference between Ems and Rems?",
    "Why is it important for a programmer to write a technical blog?",
    "What are HTML tables used for?",
    "What are HTML tables NOT used for?",
    "What is one odd fact about the &lt;tfoot&gt; used in tables?",
    "Why are tables problematic in HTML even when used properly?",
    "How do we tell JavaScript we have a block of code?",
    "What command do we use to add an item to an array?",
    "What command do we use to remove an item from an array?",
    "What is the DOM?",
    "What is an object?",
    "What is the name we give a function that creates a new object using the “new” operator?",
    "What do we call a function that is included in an object?",
    `What do we call the "<span class="bg-warning">name</span>" in the following function declaration:
                <br><br>
                <pre>var greetUser = function greetUser(<span class="bg-warning">name</span>){
                return "Hello, " + name;
                }</pre>`];
var getRandomNumber = function getRandomNumber(min, max){
    max = Math.floor(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max - min + 1) + min);
};



btnStartGame.addEventListener("click", function () {
    if (teamOne.value == "" || teamTwo.value == "") {
        alert("Please Make Sure Both Fields Are Filled Out Then Press Start Game!");
    }
    else {
        scoreOneNum = 0;
        teamOneScore.innerHTML = teamOne.value + " : " + scoreOneNum;
        scoreTwoNum = 0;
        teamTwoScore.innerHTML = teamTwo.value + " : " + scoreTwoNum;
        questionInfo.innerHTML = "Welcome to the Quiz Game! First start of by selecting a team at random using the button above. <br />Click the next question button located above to go to the first question!";
    }
});
btnNextQuestion.addEventListener("click", function () {
    if (qNum <= questions.length - 1) {
        questionInfo.innerHTML = questions[qNum];
        qNum++;
        questionNumber.innerHTML = "Question # " + qNum;

        nextTeam = getRandomNumber(1,2);
        if(nextTeam == 1){
            questionTeamName.innerHTML = teamOne.value + "'s Question!"
        }
        else{
            questionTeamName.innerHTML = teamTwo.value + "'s Question!"
        }

    }
    else {
        if (scoreOneNum > scoreTwoNum) {
            questionInfo.innerHTML = teamOne.value + " <strong>YOU'RE SO COOL OMG YOU JUST WON A QUIZ GAME WWWOOOOOOWWWWWW ";
            questionNumber.innerHTML = " ";
            questionTeamName.innerHTML = teamOne.value + "'s THE WINNER";
        }
        else if (scoreTwoNum > scoreOneNum) {
            questionInfo.innerHTML = teamTwo.value + " <strong>YOU'RE SO COOL OMG YOU JUST WON A QUIZ GAME WWWOOOOOOWWWWWW ";
            questionNumber.innerHTML = " ";
            questionTeamName.innerHTML = teamTwo.value + "'s THE WINNER";
        }
    }
});
btnAwardPoints.addEventListener("click", function () {
    if(nextTeam == 1){
        scoreOneNum += 5;
        teamOneScore.innerHTML = teamOne.value + " : " + scoreOneNum;
    }
    else if(nextTeam == 2){
        scoreTwoNum += 5;
        teamTwoScore.innerHTML = teamTwo.value + " : " + scoreTwoNum;
    }
});