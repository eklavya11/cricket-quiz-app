// Define quiz questions and answers
const questions = [
    {
        question: "Who is the captain of the Indian cricket team?",
        options: ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Shikhar Dhawan"],
        answer: "Virat Kohli"
    },
    {
        question: "In which year did India win its first cricket World Cup?",
        options: ["1983", "1992", "2007", "2011"],
        answer: "1983"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rahul Dravid", "Kapil Dev"],
        answer: "Sachin Tendulkar"
    },
    // Add more questions here
    {
        question: "Which Indian cricketer has the highest number of double centuries in Test cricket?",
        options: ["Sachin Tendulkar", "Rahul Dravid", "Virender Sehwag", "Virat Kohli"],
        answer: "Virat Kohli"
    },
    {
        question: "In which city is the Wankhede Stadium located?",
        options: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
        answer: "Mumbai"
    },
    {
        question: "Who was the first Indian bowler to take 10 wickets in a Test match?",
        options: ["Anil Kumble", "Kapil Dev", "Harbhajan Singh", "Ravichandran Ashwin"],
        answer: "Anil Kumble"
    },
    {
        question: "Which Indian cricketer is known as the 'Hitman'?",
        options: ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "KL Rahul"],
        answer: "Rohit Sharma"
    },
    {
        question: "Who holds the record for the highest individual score by an Indian in Test cricket?",
        options: ["Virender Sehwag", "Sachin Tendulkar", "Rahul Dravid", "Virat Kohli"],
        answer: "Virender Sehwag"
    },
    {
        question: "Which Indian cricketer is known for his famous 'helicopter shot'?",
        options: ["Sachin Tendulkar", "Rahul Dravid", "Virender Sehwag", "MS Dhoni"],
        answer: "MS Dhoni"
    },
    {
        question: "Who is the leading run-scorer for India in One Day Internationals (ODIs)?",
        options: ["Sachin Tendulkar", "Rohit Sharma", "Virat Kohli", "MS Dhoni"],
        answer: "Sachin Tendulkar"
    },
    // Add 40 more questions here
    {
        question: "In which year did India win its first Test series in Australia?",
        options: ["2003", "2018", "2021", "2008"],
        answer: "2018"
    },
    {
        question: "Who holds the record for the most sixes in a single T20I inning for India?",
        options: ["Rohit Sharma", "Yuvraj Singh", "KL Rahul", "Hardik Pandya"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which Indian cricketer is known as the 'Turbanator'?",
        options: ["Harbhajan Singh", "Yuvraj Singh", "Ravichandran Ashwin", "Ishant Sharma"],
        answer: "Harbhajan Singh"
    },
    {
        question: "Who was the first Indian cricketer to score a century in T20I cricket?",
        options: ["Rohit Sharma", "Suresh Raina", "Yusuf Pathan", "Virat Kohli"],
        answer: "Suresh Raina"
    },
    {
        question: "Which Indian spinner is known for his 'Doosra' delivery?",
        options: ["Anil Kumble", "Harbhajan Singh", "Ravichandran Ashwin", "Muttiah Muralitharan"],
        answer: "Harbhajan Singh"
    },
    {
        question: "Who is the highest wicket-taker for India in Test cricket?",
        options: ["Anil Kumble", "Kapil Dev", "Zaheer Khan", "Javagal Srinath"],
        answer: "Anil Kumble"
    },
    {
        question: "Which Indian cricketer has the nickname 'Captain Cool'?",
        options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Sourav Ganguly"],
        answer: "MS Dhoni"
    },
    {
        question: "Who scored India's first century in T20I cricket?",
        options: ["Rohit Sharma", "Virender Sehwag", "Yuvraj Singh", "Suresh Raina"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Which Indian batsman was known for his unorthodox batting stance?",
        options: ["Sachin Tendulkar", "VVS Laxman", "Rahul Dravid", "Shivnarine Chanderpaul"],
        answer: "Shivnarine Chanderpaul"
    },
    {
        question: "Who is the current head coach of the Indian cricket team?",
        options: ["Ravi Shastri", "Anil Kumble", "Rahul Dravid", "Kapil Dev"],
        answer: "Rahul Dravid"
    },
    {
        question: "In which year did India win its second cricket World Cup?",
        options: ["1983", "1992", "2007", "2011"],
        answer: "2011"
    },
    {
        question: "Who is the highest run-scorer in international cricket?",
        options: ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Kumar Sangakkara"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which Indian cricketer is known as the 'Wall'?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rahul Dravid", "Kapil Dev"],
        answer: "Rahul Dravid"
    },
    {
        question: "Who is the fastest Indian bowler to take 100 wickets in Test cricket?",
        options: ["Kapil Dev", "Anil Kumble", "Javagal Srinath", "Ravichandran Ashwin"],
        answer: "Ravichandran Ashwin"
    },
    {
        question: "Which Indian cricketer has the nickname 'Jumbo'?",
        options: ["Anil Kumble", "Harbhajan Singh", "Ravindra Jadeja", "Ishant Sharma"],
        answer: "Anil Kumble"
    },
    {
        question: "Who was the first Indian cricketer to score a triple century in Test cricket?",
        options: ["Rohit Sharma", "Virender Sehwag", "Virat Kohli", "Karun Nair"],
        answer: "Virender Sehwag"
    },
    {
        question: "Which Indian cricketer has the highest individual score in an ODI inning?",
        options: ["Rohit Sharma", "Sachin Tendulkar", "Virender Sehwag", "Virat Kohli"],
        answer: "Rohit Sharma"
    },
    {
        question: "In which year did India win its first T20 World Cup?",
        options: ["2007", "2009", "2011", "2014"],
        answer: "2007"
    },
    {
        question: "Who is the current captain of the Indian women's cricket team?",
        options: ["Mithali Raj", "Harmanpreet Kaur", "Smriti Mandhana", "Poonam Yadav"],
        answer: "Mithali Raj"
    },
    {
        question: "Which Indian cricketer has the highest individual score in women's T20I cricket?",
        options: ["Mithali Raj", "Smriti Mandhana", "Harmanpreet Kaur", "Deepti Sharma"],
        answer: "Smriti Mandhana"
    },
    {
        question: "Who is the leading wicket-taker for India in women's ODIs?",
        options: ["Jhulan Goswami", "Anjum Chopra", "Poonam Yadav", "Deepti Sharma"],
        answer: "Jhulan Goswami"
    },
    {
        question: "Which Indian cricketer is known as the 'Captain Cool'?",
        options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Sourav Ganguly"],
        answer: "MS Dhoni"
    },
    {
        question: "Who is the only Indian captain to win a Test series in Australia?",
        options: ["Rahul Dravid", "Sourav Ganguly", "Anil Kumble", "Virat Kohli"],
        answer: "Virat Kohli"
    },
    {
        question: "Which Indian cricketer is known as the 'Turbulent Talwar'?",
        options: ["Kapil Dev", "Ishant Sharma", "Harbhajan Singh", "Zaheer Khan"],
        answer: "Ishant Sharma"
    },
    {
        question: "Who was the first Indian to take a hat-trick in Test cricket?",
        options: ["Kapil Dev", "Harbhajan Singh", "Anil Kumble", "Jasprit Bumrah"],
        answer: "Harbhajan Singh"
    },
    {
        question: "Which Indian cricketer is known for his 'Nataraja Shot'?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rahul Dravid", "Virat Kohli"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Who is the fastest Indian bowler to reach 100 wickets in ODIs?",
        options: ["Javagal Srinath", "Zaheer Khan", "Ishant Sharma", "Mohammed Shami"],
        answer: "Zaheer Khan"
    },
    {
        question: "Which Indian cricketer is known as the 'Rawalpindi Express'?",
        options: ["Shoaib Akhtar", "Ishant Sharma", "Mohammed Shami", "Zaheer Khan"],
        answer: "Shoaib Akhtar"
    },
    {
        question: "Who is the current chairman of the Board of Control for Cricket in India (BCCI)?",
        options: ["Sourav Ganguly", "Rahul Dravid", "Anil Kumble", "Kapil Dev"],
        answer: "Sourav Ganguly"
    },
    {
        question: "In which year did India win its first ICC Champions Trophy?",
        options: ["2000", "2002", "2004", "2006"],
        answer: "2002"
    },
    {
        question: "Who is the first Indian cricketer to score 10,000 runs in ODIs?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Rohit Sharma", "MS Dhoni"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which Indian cricketer has the nickname 'Chinaman'?",
        options: ["Anil Kumble", "Ravindra Jadeja", "Kuldeep Yadav", "Yuzvendra Chahal"],
        answer: "Kuldeep Yadav"
    },
    {
        question: "Who is the first Indian woman to score a century in T20I cricket?",
        options: ["Mithali Raj", "Smriti Mandhana", "Harmanpreet Kaur", "Veda Krishnamurthy"],
        answer: "Harmanpreet Kaur"
    },
    {
        question: "Which Indian cricketer is known for his 'Dilscoop' shot?",
        options: ["Rohit Sharma", "Suresh Raina", "Yuvraj Singh", "Dinesh Karthik"],
        answer: "Dinesh Karthik"
    },
    {
        question: "Who is the only Indian wicketkeeper to score a century in T20I cricket?",
        options: ["MS Dhoni", "Dinesh Karthik", "Rishabh Pant", "KL Rahul"],
        answer: "Rishabh Pant"
    },
    {
        question: "Which Indian cricketer has the highest individual score in women's Test cricket?",
        options: ["Mithali Raj", "Smriti Mandhana", "Punam Raut", "Shikha Pandey"],
        answer: "Punam Raut"
    },
    {
        question: "Who is the fastest Indian bowler to reach 50 wickets in Test cricket?",
        options: ["Ishant Sharma", "Mohammed Shami", "Jasprit Bumrah", "Kapil Dev"],
        answer: "Jasprit Bumrah"
    }
    // Add 10 more questions here
];


let currentQuestionIndex = 0;
let score = 0;
let questionsRemaining = 10; // Number of questions to ask

// Shuffle the questions array to get random questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions
shuffleArray(questions);

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreText = document.getElementById("score");
const resultText = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const startContainer = document.getElementById("start-container");
const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionsRemaining = 10; // Reset the number of questions
    resultContainer.style.display = "none";
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
}

function restartQuiz(){
    shuffleArray(questions);
    currentQuestionIndex = 0;
    score = 0;
    questionsRemaining = 10; // Reset the number of questions
    resultContainer.style.display = "none";
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questionsRemaining) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = "";

        for (let i = 0; i < question.options.length; i++) {
            const option = document.createElement("button");
            option.textContent = question.options[i];
            option.addEventListener("click", checkAnswer);
            optionsContainer.appendChild(option);
        }
    } else {
        endQuiz();
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreText.textContent = score + "/" + questionsRemaining;

    // Determine the rating based on the score
    let rating = "";

    if (score >= questionsRemaining * 0.8) {
        rating = "Expert Cricket Fan";
    } else if (score >= questionsRemaining * 0.5) {
        rating = "Intermediate Fan";
    } else {
        rating = "Noob Cricket Fan";
    }

    resultText.textContent = "You're a " + rating;
}

// Event listener for the restart button
restartBtn.addEventListener("click", restartQuiz);

// Start the quiz when the page loads
// startQuiz();