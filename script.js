// Quiz data array containing questions, possible answers, and correct answers
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    // ...other questions here
];

// Select the necessary DOM elements
const quiz = document.getElementById('quiz'); // The container for the quiz
const answerEls = document.querySelectorAll('.answer'); // All the radio button elements (answers)
const questionEl = document.getElementById('question'); // The element to display the question
const a_text = document.getElementById('a_text'); // The element for answer A
const b_text = document.getElementById('b_text'); // The element for answer B
const c_text = document.getElementById('c_text'); // The element for answer C
const d_text = document.getElementById('d_text'); // The element for answer D
const submitBtn = document.getElementById('submit'); // The submit button
const result = document.getElementById('result'); // Element to display result feedback (correct/wrong)

// Initialize quiz state variables
let currentQuiz = 0; // Track the current question
let score = 0; // Track the score (number of correct answers)

// Load the first quiz question
loadQuiz(); 

// Function to load the current question and answers
function loadQuiz() {
    deselectAnswers(); // Deselect any previously selected answers

    // Get the current quiz data (question and answers)
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question; // Display the current question
    a_text.innerText = currentQuizData.a; // Display answer A
    b_text.innerText = currentQuizData.b; // Display answer B
    c_text.innerText = currentQuizData.c; // Display answer C
    d_text.innerText = currentQuizData.d; // Display answer D

    // Clear any previous result feedback
    result.classList.remove('correct', 'wrong'); 
    result.innerText = ''; 
}

// Function to deselect all radio buttons (answers)
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false); // Uncheck all radio buttons
}

// Function to get the selected answer (returns the id of the checked radio button)
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) { // If the radio button is checked
            answer = answerEl.id; // Save the id of the checked answer (e.g., 'a', 'b', 'c', 'd')
        }
    });
    return answer; // Return the selected answer's id
}

// Event listener for when the submit button is clicked
submitBtn.addEventListener('click', () => {
    const answer = getSelected(); // Get the selected answer

    if (answer) { // If an answer was selected
        if (answer === quizData[currentQuiz].correct) { // If the selected answer is correct
            score++; // Increment the score
            result.innerText = 'Correct!'; // Display correct feedback
            result.classList.add('correct'); // Add 'correct' class for styling
        } else {
            result.innerText = `Wrong answer! The correct answer was ${quizData[currentQuiz].correct.toUpperCase()}.`; // Show the correct answer
            result.classList.add('wrong'); // Add 'wrong' class for styling
        }

        currentQuiz++; // Move to the next question

        // If there are more questions, load the next question after a short delay
        if (currentQuiz < quizData.length) {
            setTimeout(loadQuiz, 1000); // Delay of 1 second before loading the next question
        } else { // If no more questions, show the final score and a reload button
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button> <!-- Reload button to restart the quiz -->
            `;
        }
    }
});
