const questions = [
    {
        text: "What does the acronym 'OOP' stand for in programming?",
        choices: ["Object-Oriented Programming", "Open Operating Protocol", "Optimal Operating Procedure", "Object Optimization Process"],
        answer: "Object-Oriented Programming"
    },
    {
        text: "Which language is primarily used for developing Android applications?",
        choices: ["Python", "JavaScript", "Java", "Swift"],
        answer: "Java"
    },
    {
        text: "Which software development model follows a sequential design process?",
        choices: ["Agile", "Waterfall", "Scrum", "Kanban"],
        answer: "Waterfall"
    },
    {
        text: "What is the main purpose of version control in software development?",
        choices: ["To speed up code compilation", "To track and manage changes to code", "To improve code readability", "To enforce security protocols"],
        answer: "To track and manage changes to code"
    },
    {
        text: "Which of the following is NOT a common Agile methodology?",
        choices: ["Scrum", "XP (Extreme Programming)", "Lean", "Cascade"],
        answer: "Cascade"
    },
    {
        text: "What is a 'bug' in software engineering?",
        choices: ["A new feature", "An error or flaw in code", "A code optimization", "A design pattern"],
        answer: "An error or flaw in code"
    },
    {
        text: "Which of these is a commonly used design pattern in software engineering?",
        choices: ["Singleton", "Functionality", "Encapsulation", "Abstraction"],
        answer: "Singleton"
    },
    {
        text: "In the MVC architecture, what does 'M' stand for?",
        choices: ["Module", "Management", "Model", "Monitor"],
        answer: "Model"
    },
    {
        text: "What does 'CI/CD' stand for?",
        choices: ["Continuous Integration/Continuous Delivery", "Code Integration/Code Debugging", "Centralized Integration/Continuous Deployment", "Continuous Improvement/Continuous Development"],
        answer: "Continuous Integration/Continuous Delivery"
    },
    {
        text: "What is refactoring in the context of software development?",
        choices: ["Adding new features", "Fixing bugs", "Improving code structure without changing functionality", "Optimizing runtime performance"],
        answer: "Improving code structure without changing functionality"
    }
];
var answers = [
    "Object-Oriented Programming", // Answer for question 1
    "Java",                        // Answer for question 2
    "Waterfall",                   // Answer for question 3
    "To track and manage changes to code", // Answer for question 4
    "Cascade",                     // Answer for question 5
    "An error or flaw in code",    // Answer for question 6
    "Singleton",                   // Answer for question 7
    "Model",                       // Answer for question 8
    "Continuous Integration/Continuous Delivery", // Answer for question 9
    "Improving code structure without changing functionality" // Answer for question 10
];
var score = 0;

function startQuiz() {
    let questionBox = document.getElementById("container");
    let questionHeader = document.getElementById("questions");
    let startButton = document.getElementById("start");
    let nextButton = document.getElementById("nextQuestionButton");
    questionHeader.textContent = "Quiz Started!";
    nextButton.style.display = "block";
    startButton.remove();
    questionBox.style.height = "400px";
    questionBox.style.width = "450px";
    loadNextQuestion();

}
// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Function to load the next question
function loadNextQuestion() {
    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        // Clear the question container
        const questionContainer = document.getElementById("questionContainer");
        questionContainer.innerHTML = "";

        // Get the current question object
        const question = questions[currentQuestionIndex];

        // Create a new div for the question
        const questionDiv = document.createElement("div");
        questionDiv.style.display = "flex";
        questionDiv.style.flexDirection = "column";
        questionDiv.style.justifyContent = "center";
        questionDiv.style.alignItems = "center";
        questionDiv.style.gap = "10px";

        // Create and append the question text
        const questionText = document.createElement("p");
        questionText.textContent = question.text;
        questionDiv.appendChild(questionText);

        // Create and append radio button choices
        question.choices.forEach((choice, index) => {
            // Create a label for each choice
            const label = document.createElement("label");
            label.textContent = choice;
            label.id = "theLabels";

            // Create a radio input for each choice
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = "answer";
            radioInput.value = choice;
            radioInput.id = `choice${index}`;
            radioInput.class = "design";

            // Append radio button and label to question div
            label.prepend(radioInput);
            questionDiv.appendChild(label);
            questionDiv.appendChild(document.createElement("br"));
            
        });

        // Append the question div to the container
        questionContainer.appendChild(questionDiv);

    } else {
        displayScore();
    }

}
function checkAnswerAndNext() 
{
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        // Check if the answer is correct
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            score++;
        }

        // Move to the next question
        currentQuestionIndex++;
        loadNextQuestion();
    } else {
        alert("Please select an answer before proceeding to the next question.");
    }
}


    function displayScore() {
        document.getElementById("questionContainer").innerHTML = "";
        document.getElementById("nextQuestionButton").style.display = "none";
        const scoreDisplay = document.getElementById("scoreDisplay");
        scoreDisplay.textContent = `Quiz Completed! Your score is: ${score} out of ${questions.length}`;
        document.getElementById("reset").style.display = "block";
    }
    function reloadPage() {
        location.reload(); // Reloads the current page
      }



