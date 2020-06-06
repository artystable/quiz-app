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
            <button class="get-started-button js-get-started-button js-submit">Get Started</button>
        </div>`;
}

function getStarted() {
    console.log('`getStarted` ran')
    const welcomePage = generateWelcomePage();
    $('.js-landing-zone').html(welcomePage);    
}

function generateQuestion() {
    let quizChef = $(`
        <form class="js-generated-quiz">
            <fieldset class="js-landing-zone">
                <legend>${STORE[i].question}
                </legend>
            </fieldset>
        </form>`)

    let cookIngredients = $(quizChef).find('fieldset');
    console.log(cookIngredients, "before")
    STORE[i].choices.forEach(function (answerValue, answerIndex) {
        $(`
        <input type="radio" id="${answerIndex}" name="answer" value=${answerValue}" required>
        <label for="${answerIndex}">${answerValue}</label>
        
      `).appendTo(cookIngredients);
    });
    console.log(cookIngredients, "after")
    $(`<button type="submit" class="submit js-submit" value="Submit">Submit</button>`).appendTo(cookIngredients);
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
        $('.js-generated-quiz').hide();
        finalScore();
        $('.questionNumber').text(10);
    }
}

function quizMain() {
    console.log('`quizMain` ran')
    $('.js-landing-zone').on('click', '.js-submit', function(event) {
        const renderedQuestion = generateQuestionDisplay();
        $('.js-landing-zone').html(renderedQuestion);
    })
}

function correct() {
    console.log('`correct` ran')
    i += 1;
    console.log(i)
}

function incorrect() {
    console.log('`correct` ran')
    let insert = $(`<br><span class="incorrect">That is incorrect, the correct answer is ${STORE[i].answer}</span>`)
    alert(insert)
}

function questionResult() {
    console.log('`questionResult` ran')
    $('.js-generated-quiz').on('click', '.js-submit', function() {
        if ($('input:checked') === STORE[i].answer) {
            correct();
        } else {
            incorrect();
        }
    });
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