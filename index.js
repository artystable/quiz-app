function getStarted() {
    console.log('`getStarted` ran')
}

function questionDisplay() {
    console.log('`questionDisplay` ran')
}

function questionResult() {
    console.log('`questionResult` ran')
}

function restart() {
    console.log('`restart` ran')
}

function allOfQuizApp() {
    getStarted();
    questionDisplay();
    questionResult();
    restart();
}

$(allOfQuizApp);