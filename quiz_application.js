document.addEventListener("DOMContentLoaded", initQuiz);

const questions = [
    { question: "1. <b>Who founded Apple Inc.?</b>", options: ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Elon Musk"], answer: "Steve Jobs" },
    { question: "2. <b>Which entrepreneur started Amazon?</b>", options: ["Mark Zuckerberg", "Jeff Bezos", "Larry Page", "Richard Branson"], answer: "Jeff Bezos" },
    { question: "3. <b>Who is the founder of Tesla, Inc.?</b>", options: ["Henry Ford", "Elon Musk", "Nikola Tesla", "Steve Wozniak"], answer: "Elon Musk" },
    { question: "4. <b>Which two founders started Google?</b>", options: ["Larry Page & Sergey Brin", "Mark Zuckerberg & Eduardo Saverin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], answer: "Larry Page & Sergey Brin" },
    { question: "5. <b>Who founded Nike?</b>", options: ["Phil Knight", "Ralph Lauren", "Kevin Plank", "Howard Schultz"], answer: "Phil Knight" },
    { question: "6. <b>Which businessman started McDonald's?</b>", options: ["Ray Kroc", "Colonel Sanders", "Dave Thomas", "Richard McDonald"], answer: "Ray Kroc" },
];

let currentQuestionIndex = 0;
let score = 0;

function initQuiz() {
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const questionArea = document.getElementById("question-area");
    const optionsArea = document.getElementById("options-area");
    const nextButton = document.getElementById("next-button");

    questionArea.innerHTML = `<h2>${questions[currentQuestionIndex].question}</h2>`;
    optionsArea.innerHTML = "";
    nextButton.style.display = "none";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option);
        optionsArea.appendChild(button);
    });
}

function checkAnswer(button, selected) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const nextButton = document.getElementById("next-button");

    
    document.querySelectorAll("#options-area button").forEach(btn => {
        btn.disabled = true;
        btn.style.pointerEvents = "none"; 
        if (btn.textContent === correctAnswer) {
            btn.classList.add("show-correct");
        }
    });

    if (selected === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    nextButton.style.display = "block";
    nextButton.onclick = () => {
        currentQuestionIndex++;
        loadQuestion();
    };
}


function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><h2>Score: ${score}/${questions.length}</h2>`;
}
