// ///// WELCOME to the First Chapter of Cherch Games: BOOMTOWN (A Letterkenny Themed Air Hockey Experience) /////


// //////////////////////////
// /*----- CONSTANTS -----*/

// The JOYSTICK //
const stick = document.querySelector('#stickOne');

// The PUCK //
let puck = document.querySelector('#puck');

// ////////////////////////////////////////////////
// /*----- app's STATE (Variables) aka lets -----*/

// // First, we begin with the scoring logic using a let SCORES OBJECT to store our game's SCORE //
// // The OBJECT KEY of 'p' will be PLAYER, 'c' will be COMPUTER, 't' will be tie

// // Then we'll declare a let RESULTS OBJECT to store the OUTCOMES //
// // The OBJECT KEY of 'p' will be PLAYER, 'c' will be COMPUTER, 't' will be tie
// // The OBJECT VALUES of 'L' will equal LETTERKENNY and and 'Z' for THREE RIVERS LAKERS

// // Then we declare a let WINNER STRING of 'p' if PLAYER wins, 'c' if COMPUTER wins and 't' if its a TIE

// // Yaso, its hockey so we'll need a game board (the ICE), a scoreboard that updates at each goal per player, a winner, and a score (tally) for each player

// // Goals! Goals seem like they would be an EVENT LISTENER somehow inside a LET
// //maybe make them span classes in the border of the ICE? Can you do that? I feel like we can instead of building a new div within a div within a div within a div (oyyyy)

 let x = 0;
 let y = 0;
 let stickSpeed = 25;


// The Puck Object

let ballX = 0
let ballY = 0
let puckSpeed = 17.3;

// The Score Objects

let player1Score = 0
let compScore = 0


// /////////////////////////////////////////
// /*----- cached ELEMENT references -----*/

// // FIRST, we'll declare our FACE OFF button at the top that will eventually START the GAME
const faceOffBtn = document.querySelector('faceOffBtn')



// // Next, we'll select H3 to be the theatre that displays a message delcaring WHO THE WINNER is //
// let message  = document.getElementById('h3')



// // Then we'll declare our PLAY AGAIN button at the bottom
// const playAgainBtn = document.querySelector('playAgainButton')

// // Then we'll cache our COUNTDOWN Clock
// let countdownEl = document.getElementById('countdown')



// ///////////////////////////////
// /*----- EVENT LISTENERS -----*/

// FIRST and FOREMOST we'll add an EVENT LISTENER to make the JOYSTICK move USING ARROW KEYS
document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 37) {
        // move stick to the LEFT using LEFT ARROW KEY
        if (x > 5) {
            x -= stickSpeed;  // subtracts the speed from the X position
            console.log(x);
            stick.style.left = x + 'px';
        }
    } else if (evt.keyCode === 38) {
        // move up using UP ARROW KEY
        if (y > 0) {
            y -= stickSpeed; // subtracts speed from the Y position
            console.log(y);
            stick.style.top = y + 'px';
        }
    } else if (evt.keyCode === 39) {
        // move to the RIGHT!  Yoooooo
        if (x < 250) {
            x += stickSpeed;   // ADDS speed to the X position
            console.log(x);
            stick.style.left = x + 'px';
        }
    } else if (evt.keyCode === 40) {
        // move the stick DOWN baybay!
        if (y < 245) {
            y += stickSpeed;
            console.log(y);
            stick.style.top = y + 'px';
        }
    }
})


// GET THE PUCK TO BOUNCE AROUND PONG STYLE //

// function puckDrop () {
//     document.getElementById('puck').addEventListener(evt) => {
//         if (evt.initialize) {
//                 // Set the puck to move randomly within the ICE rink upon INITIALIZING //
//             if (x > 5) {
//                 x -= stickSpeed;  // subtracts the speed from the X position
//                 console.log(x);
//                 stick.style.left = x + 'px';
//             }   
//         }
//     }
//     render();
// }
        



// // Next, we add an Event Listener to the ICE to make it interactive
// document.getElementById('ice').addEventListener('click', initialize);

// // Next, we add an Event Listener to activate our FACE OFF feature
// faceOffBtn.addEventListener('click', init)

// // Then we add an Event Listener to activate our PLAY AGAIN BUTTON
playAgainBtn.addEventListener('click', initialize);





// /////////////////////////
// /*----- FUNCTIONS -----*/


// // FIRST AND FOREMOST WE INITIALIZE OUR OBJECTS //
initialize ();
// Initialize all STATE then call render();
function inititialize () {
    score = {
        p: 0,
        c: 0,
    }
    results = {
        p: 'null',
        c: 'null'
    }
    winner = null;
    render();
}

// /// RENDER THE BOARD aka the ICE RINK!  /////
// // in class we used forEach callback functions and literals too. 
// function renderBoard () {

// }

// // // NOW we have to program the STICKS to be able to SHOOT the PUCK //

// // function shootTheJ() {

// // // call RENDER //
// // render();
// // }

// /////////////

// // Now we write out a function to RENDER the SCOREBOARD
// function renderScores() {
//     //use a for loop to iterate//
//     for (let key in score) {
//         const scoreElement = document.getElementById(`${key}-score`);
//         scoreElement.innerText = score[key];
//     }
// }

// function renderResults () {

// }

// ///////////////

// // FINALLY //
// // ^^^ *SECOND* we invoke what we RENDER in the RENDER FUNCTION 
// // *FIRST* we need our RENDER FUNCTION to give a HUB to all RENDERING //

function render() {
    renderCountdown(function() {
        renderScore();
        renderResult();
        renderMessage();
    })
}

// ////// WINNING MESSAGE & LEAD MESSAGE //////
function renderMessage() {
    if (winner === 'T') {
        message.innerHTML = `a TIE? What's the matter, <span style="font-size: 4.5vmin"><span style="color: whitesmoke"> BOOMTOWN? </span></span> Did somebody's little sister eat their last <span style="font-size: 4.5vmin"><span style="color: orange"> Halloween Oreo </span></span> ?`
    }
    else if (winner >= '1') {
        message.innerHTML =`Wheel, snipe, celly boys! The <span style="font-size: 4.5vmin"><span style="color: whitesmoke"> LETTERKENNY IRISH </span></span> get the W.`
    }
    else if (winner <= '-1') {
        message.innerHTML = `JJ Frankie JJ scores! And the <span style="font-size: 4.5vmin"><span style="color: dodgerblue"> THREE RIVERS LAKERS </span><span> bag the win. <br> It's <span style="font-size: 4.5vmin"><span style="color: dodgerblue"> F%^&$!@ </span> EMBARASSING! </span></br>`
    }
    else if (score >= '1') {
        message.innerHTML = `Ferda. The <span style="font-size: 4.5vmin"><span style="color: whitesmoke"> LETTERKENNY IRISH</span></span> are in the lead`;
    }
    else if (score <= '-1') {
        message.innerHTML = `The <span style="font-size: 4.5vmin"><span style="color: dodgerblue"> THREE RIVERS LAKERS</span></span> have taken the lead`
    }
    else {
        message.innerText = 'Nice stats, no stats.'
    }
}

// function renderCountdown(cb) {
//     let count = 120;
//     countdownEl.style.visibility = 'visible';
//     countdownEl.innerText = count;
//     // write an ITERABLE to parse the Countdown Sequence //
//     const timerID = setInterval(function () {
//         count --;
//         if (count) {
//             countdownEl.innerText = count;
//         } else {
//             clearInterval(timerID);
//             countdownEl.style.visibility = 'visible';
//             cb();
//         }
//     }, 1000);
// }

playAgainBtn.disabled = !winner;