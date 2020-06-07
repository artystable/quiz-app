'use strict';

let i = 0;
let questionNumber = i + 1;
let score = 0;

function generateWelcomePage() {
    console.log("Generating getting started page");
    return `
        <div class="landing-zone js-landing-zone">
            <div class="quiz-about-panel">
                <h2>macOS® Basics</h2>
                <h3>Photos App</h3>
            </div>
            <button class="get-started-button js-get-started-button">Get Started</button>
        </div>`;
}

function getStarted() {
    console.log('`getStarted` ran')
    const welcomePage = generateWelcomePage();
    $('.js-landing-zone').html(welcomePage);
    
    $('.js-landing-zone').on('click', '.js-get-started-button', function() {
        const renderedQuestion = generateQuestionDisplay();
        $('.js-landing-zone').html(renderedQuestion);
    })
}

function generateQuestion() {
    console.log("Generating all of question form");
    let quizChef = $(`
        <form class="js-generated-quiz ram">
            <fieldset class="js-landing-zone ram">
                <legend>${STORE[i].question}
                </legend>
            </fieldset>
        </form>`)

    let cookIngredients = $(quizChef).find('fieldset');
    STORE[i].choices.forEach(function (answerValue, answerIndex) {
        $(`
        <input type="radio" id="${answerIndex}" name="answer" value="${answerValue}" required>
        <label for="${answerIndex}">${answerValue}</label>
      `).appendTo(cookIngredients);
    });
    $(`<button type="submit" class="submit js-submit-quiz-answer" value="Submit">Submit</button>`).appendTo(cookIngredients);
    $(`<ul class="entire-status-bar">
                <li class="status-bar-third" id="right-wrong">Question:
                    <span class="questionNumber">${questionNumber}</span>/10</li>
                <li class="status-bar-third" id="empty-third"></li>
                </li>
                <li class="status-bar-third">Score:
                    <span class="score">${score}</span>
                </li>
          </ul>`).appendTo(cookIngredients)

    return quizChef;
}

function generateQuestionDisplay() {
    console.log('`questionDisplayInterface` ran')
    if (i < STORE.length) {
        return generateQuestion();
    } else {
        $('.js-landing-zone').hide();
        finalScore();
        $('.questionNumber').text(10);
    }
}

function quizMain() {
    console.log('`quizMain` ran')
    $('.js-landing-zone').on('click', '.js-submit-answer', function() {
        // $('.js-landing-zone').hide();
        // $('.js-landing-zone').show();
        const nextQuestion = generateQuestionDisplay();
        $('.js-landing-zone').html(nextQuestion);
    })
}

function correct() {
    console.log('`correct` ran')
    if (i < 10) {
        i++
    } else {
        stop
    }
    console.log(i)
}

function incorrect() {
    console.log('`incorrect` ran')
    if (i < 10) {
        i++
    } else {
        stop
    }
    console.log(i)
}

function questionResult() {
    console.log('`questionResult` ran')
    $('.js-landing-zone').on('submit', '.js-generated-quiz', function(e) {
        e.preventDefault()
        console.log(STORE[i].answer, "TEST")
        console.log(i)
        if ($('input:checked').val() === STORE[i].answer) {
            correct();
        } else {
            incorrect();
        }
    });
    quizMain();
}

function finalScore() {
    if (score >=8) {
        alert("you rock!")
    } else if (score >= 5) {
        alert("Study!...but you passed")
    } else {
    // return `
    // <div class="landing-zone js-landing-zone">
    //     <div class="quiz-about-panel">
    //         <h2>macOS® Basics</h2>
    //         <h3>Photos App</h3>
    //     </div>
    //     <button class="restart-quiz">Restart</button>
    // </div>`;
        alert("You failed, please try again")
    }
}

function restart() {
    console.log('`restart` ran')

}

function quizComplete() {
    getStarted();
//complete
    quizMain();
//complete
    questionResult();
//in-progress
    restart();
}

$(quizComplete);