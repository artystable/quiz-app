'use strict';

let i = 0;

function generateWelcomePage() {
    console.log("Generating getting started page");
  
    return `
            <div class="starter-page">
                <div class="quiz-about-panel">
                    <h2>macOS® Basics</h2>
                    <h3>Photos App</h3>
                </div>
                <button id="get-started js-get-started">Get Started</button>
            </div>`;
  }

function getStarted() {
    console.log('`getStarted` ran')
    const welcomePage = generateWelcomePage();
    $('.js-landing-zone').html(welcomePage);    
}

function generateShoppingItemsString(shoppingList) {
    console.log("Generating shopping list element");
  
    const items = shoppingList.map((item) => generateItemElement(item));
    
    return items.join("");
  }

function generateQuestionDisplay(questionKeys) {
    console.log('`questionDisplayInterface` ran')
    for(let j=0; j < STORE[i].choices[j]; j++){
        const question = questionKeys[i].map((item) => generateQuestion(item));
    }
    return question.join("");
}

function quizMain() {
    console.log('`quizMain` ran')
    $('#js-get-started').on('click', function() {
        alert("This is a test of Suck Youuuu")
        const renderedQuestion = generateQuestionDisplay(STORE);
        $('.js-landing-zone').html(renderedQuestion);   
    })
}

// function questionResult() {
//     $('#js-shopping-list-form').submit(function(event) {
//       event.preventDefault();
//       console.log('`handleNewItemSubmit` ran');
//       const newItemName = $('.js-shopping-list-entry').val();
//       $('.js-shopping-list-entry').val('');
//       addItemToShoppingList(newItemName);
//       renderShoppingList();
//     });
//   }
  


function questionResult() {
    console.log('`questionResult` ran')
}

function restart() {
    console.log('`restart` ran')
}

function quizComplete() {
    getStarted();
    quizMain();
    questionResult();
    restart();
}

$(quizComplete);