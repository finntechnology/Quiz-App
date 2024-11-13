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
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What is the default port number for HTTP?",
        a: "80",
        b: "443",
        c: "8080",
        d: "22",
        correct: "a",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "class",
        b: "font",
        c: "style",
        d: "styles",
        correct: "c",
    },
    {
        question: "Which company developed the TypeScript programming language?",
        a: "Google",
        b: "Microsoft",
        c: "Facebook",
        d: "Apple",
        correct: "b",
    },
    {
        question: "Which version control system is Git based on?",
        a: "Subversion",
        b: "CVS",
        c: "Mercurial",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "What does JSON stand for?",
        a: "JavaScript Oriented Notation",
        b: "Java Source Object Notation",
        c: "JavaScript Object Notation",
        d: "JavaScript Online Notation",
        correct: "c",
    },
    {
        question: "What is the purpose of a package manager in programming?",
        a: "To manage code documentation",
        b: "To manage software dependencies",
        c: "To manage user interfaces",
        d: "To manage database connections",
        correct: "b",
    },
    {
        question: "What keyword is used to define a class in Python?",
        a: "function",
        b: "def",
        c: "class",
        d: "struct",
        correct: "c",
    },
    {
        question: "What is the result of 3+4*5 in Python?",
        a: "35",
        b: "23",
        c: "20",
        d: "17",
        correct: "b",
    },
    {
        question: "In C++, what is the correct syntax to print a value to the console?",
        a: "print(value);",
        b: "console.log(value);",
        c: "cout << value;",
        d: "printf(value);",
        correct: "c",
    },
    {
        question: "In React, what is a component?",
        a: "A function or class that returns a piece of the UI",
        b: "A database model",
        c: "An HTTP request handler",
        d: "A styling library",
        correct: "a",
    },
    {
        question: "In C#, what keyword is used to inherit from a base class?",
        a: "extends",
        b: "inherits",
        c: "implements",
        d: "base",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
 const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
   const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
     const c_text = document.getElementById('c_text')
      const d_text = document.getElementById('d_text')
       const submitBtn = document.getElementById('submit')
        const result = document.getElementById('result')
         let currentQuiz = 0 
let score = 0 
loadQuiz() 

function loadQuiz() 
{ deselectAnswers() 

    const currentQuizData = quizData[currentQuiz] 
    questionEl.innerText = currentQuizData.question 
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b 
    c_text.innerText = currentQuizData.c 
    d_text.innerText = currentQuizData.d 
    result.classList.remove('correct', 'wrong') 
    result.innerText = '' 
} 

    function deselectAnswers() { 
        answerEls.forEach(answerEl => answerEl.checked = false)
     } 

     function getSelected() { 
        let answer
         answerEls.forEach(answerEl => { 
            if (answerEl.checked) { 
                answer = answerEl.id
             }
             })

                 return answer 
                } 
                
                submitBtn.addEventListener('click', () => { 
                    const answer = getSelected()
                     if (answer) {
                         if (answer === quizData[currentQuiz].correct)
                             { 
                        score++ 
                        result.innerText = 'Correct!' 
                        result.classList.add('correct')
                     } else {
                         result.innerText = `Wrong answer! The correct answer was ${quizData[currentQuiz].correct.toUpperCase()}.`
                      result.classList.add('wrong')
                     }
                     
                     currentQuiz++ 

                     if (currentQuiz < quizData.length) {
                         setTimeout(loadQuiz, 1000) // Delay to show the result message before loading the next question
                          } else { 
                            quiz.innerHTML = `
                             <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                              <button onclick="location.reload()">Reload</button>
                               ` } 
                            }
                        })