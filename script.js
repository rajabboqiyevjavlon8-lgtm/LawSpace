if (selectedIndex === question.correct) {

        buttons[selectedIndex].classList.add("correct");

        score++;

        scoreElement.textContent = Ball: ${score};

    } else {

        buttons[selectedIndex].classList.add("wrong");

        buttons[question.correct].classList.add("correct");
    }

    nextButton.style.display = "block";
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
}

function showResult() {

    const percentage =
        Math.round((score / questions.length) * 100);

    questionElement.textContent = "Test yakunlandi!";

    questionNumber.textContent = "Natija";

    scoreElement.textContent = Ball: ${score};

    answersElement.innerHTML = 
        <div class="result-box">
            <h3>${score} / ${questions.length}</h3>
            <p>Natijangiz: ${percentage}%</p>
        </div>
    ;

    nextButton.style.display = "none";
}

showQuestion();
window.nextQuestion = nextQuestion;