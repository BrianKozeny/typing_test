var verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
            verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
            adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
            adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 10);
              var rand2 = Math.floor(Math.random() * 10);
              var rand3 = Math.floor(Math.random() * 10);
              var rand4 = Math.floor(Math.random() * 10);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

              document.getElementById('itdoesntmatterwhatyoucallthis').innerHTML = content;
            };
            sentence();


const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor((timer[3]) - (timer[1] * 100) - (timer[0] * 6000));
}


// Match the text entered with the provided text on the page:
function spellCheck(){
    console.log(originText);
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    console.log(textEntered);
    console.log(originText);

    if ( textEntered == originText){
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if ( textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65ccf3";
        } else {
            testWrapper.style.borderColor = "#e95d0f";
        }
    }
}


// Start the timer:
function start(){
    let enteredTextLength = testArea.value.length;
    if (enteredTextLength === 0 && !timerRunning){
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(++enteredTextLength);
}


// Reset everything:
function reset(){
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.HTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);

