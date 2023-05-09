// ///// WELCOME to the First Chapter of Cherch Games: BOOMTOWN (A Letterkenny Themed Air Hockey Experience) /////


// //////////////////////////
// /*----- CONSTANTS -----*/
// const board = document.querySelector('#board')
// const ctx = board.getContext("2d")

// The JOYSTICKS //
const stickOne = document.querySelector('#stickOne');
const stickTwo = document.querySelector('#stickTwo');

// The PUCK //

const puck = document.getElementById('#puck');

// The ICE //
const ice = document.querySelector('#ice');
const iceWidth = ice.width;
const iceHeight = ice.height;

// ////////////////////////////////////////////////
// /*----- app's STATE (Variables) aka lets -----*/

// // First, we begin with the scoring logic using a let SCORES OBJECT to store our game's SCORE //
// // The OBJECT KEY of 'p' will be PLAYER, 'c' will be COMPUTER, 't' will be tie

// // Then we'll declare a let RESULTS OBJECT to store the OUTCOMES //
// // The OBJECT KEY of 'p' will be PLAYER, 'c' will be COMPUTER, 't' will be tie
// // The OBJECT VALUES of 'L' will equal LETTERKENNY and and 'Z' for THREE RIVERS LAKERS

// // Then we declare a let WINNER STRING of 'p' if PLAYER wins, 'c' if COMPUTER wins and 't' if its a TIE


 let x = 0;
 let y = 0;
 let stickSpeed = 25;


// The Puck Object

let puckX = iceWidth / 2;
let puckY = iceHeight / 2;
let puckXDirection = 0
let puckYDirection = 0
let puckSpeed = 17.3

// The Interval (for Motion)

let interval;



// The Score Objects

let player1Score = 0
let compScore = 0




// /////////////////////////////////////////
// /*----- cached ELEMENT references -----*/


// // FIRST, we'll declare our FACE OFF button at the top that will eventually START the GAME
const faceOffBtn = document.querySelector('faceOffBtn')

// // Next, we'll select H3 to be the theatre that displays a message delcaring WHO THE WINNER is //
// const message = document.querySelector('h3')

// // Then we'll declare our PLAY AGAIN button at the bottom
// const playAgainBtn = document.querySelector('playAgainButton')

// // Then we'll cache our COUNTDOWN Clock
// let countdownEl = document.getElementById('countdown')

// Calculating Score Tally





// ///////////////////////////////
// /*----- EVENT LISTENERS -----*/

// FIRST and FOREMOST we'll add an EVENT LISTENER to make the JOYSTICK move USING ARROW KEYS
document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 65) {
        // move stick to the LEFT using LEFT ARROW KEY
        if (x > 10) {
            x -= stickSpeed;  // subtracts the speed from the X position
            console.log(x);
            stickOne.style.left = x + 'px';
        }
    } else if (evt.keyCode === 87) {
        // move up using UP ARROW KEY
        if (y > -10) {
            y -= stickSpeed; // subtracts speed from the Y position
            console.log(y);
            stickOne.style.top = y + 'px';
        }
    } else if (evt.keyCode === 83) {
        // move to the RIGHT!  Yoooooo
        if (x < 225) {
            x += puckSpeed;   // ADDS speed to the X position
            console.log(x);
            stickOne.style.left = x + 'px';
        }
    } else if (evt.keyCode === 90) {
        // move the stick DOWN baybay!
        if (y < 250) {
            y += puckSpeed;
            console.log(y);
            stickOne.style.top = y + 'px';
        }
    }
})

// NOW we need to make PLAYER 2's JOYSTICK move USING ARROW KEYS

// *** PLAYER TWO CONTROLS

document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 37) {
        // move stick to the LEFT using LEFT ARROW KEY
        if (x > 250) {
            x -= stickSpeed;  // subtracts the speed from the X position
            console.log(x);
            stickTwo.style.left = x + 'px';
        }
    } else if (evt.keyCode === 38) {
        // move up using UP ARROW KEY
        if (y >= -25) {
            y -= stickSpeed; // subtracts speed from the Y position
            console.log(y);
            stickTwo.style.top = y + 'px';
        }
    } else if (evt.keyCode === 39) {
        // move to the RIGHT!  Yoooooo
        if (x < 450) {
            x += stickSpeed;   // ADDS speed to the X position
            console.log(x);
            stickTwo.style.left = x + 'px';
        }
    } else if (evt.keyCode === 40) {
        // move the stick DOWN baybay!
        if (y < 200) {
            y += stickSpeed;
            console.log(y);
            stickTwo.style.top = y + 'px';
        }
    }
})



// Next, we add an Event Listener to activate our FACE OFF feature
// faceOffBtn.addEventListener('click', init)

// // Then we add an Event Listener to activate our PLAY AGAIN BUTTON
// playAgainBtn.addEventListener('click', init);






// /////////////////////////
// /*----- FUNCTIONS -----*/


// // FIRST AND FOREMOST WE INITIALIZE OUR OBJECTS //

// init ();
// // Initialize all STATE then call render();
function init () {
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

// NOW start the game //
function gameStart() {
    nextTick();
}

// Now... CREATE the essence of MOTION ITSELF to (eventually) APPLY to THE PUCK ELEMENT //
function nextTick () {
    interval = setInterval(() => {
        movePuck();
        checkCollision();
        nextTick()
    }, 100);
}


// GET THE PUCK TO BOUNCE AROUND PONG STYLE //

function movePuck () {
    if (x > 0) {
        x -= puckSpeed;  // subtracts the speed from the X position
        console.log(x);
        puck.style.left = x + 'px'; // by 1 px
    }   
        else if (y > 0) {
        y -= puckSpeed;  // subtracts the speed from the X position
        console.log(x);
       puck.style.top = y + 'px'; // by increment of 1 pixel
    }   
        else if (x < 500) {
        x += puckSpeed; // adds speed from the x position
        console.log(x);
        puck.style.right = x + 'px';
        }
        else if (y > 250) {
            y += puckSpeed; // adds speed from the Y position
            console.log(y);
            puck.style.bottom = y + 'px';
        }
}


// /// RENDER THE BOARD aka the ICE RINK!  /////
// // in class we used forEach callback functions and literals too. 
// function renderBoard () {
    
    // }
    

 // NOW we have to program the STICKS to be able to DETECT CONTACT with the PUCK
        



// // FINALLY //
// // ^^^ *SECOND* we invoke what we RENDER in the RENDER FUNCTION 
// // *FIRST* we need our RENDER FUNCTION to give a HUB to all RENDERING //

// function render() {
//     renderCountdown(function() {
//         renderScore();
//         renderResult();
//         renderMessage();
//     })
// }



// ////// WINNING MESSAGE & LEAD MESSAGE //////
// function renderMessage() {
//     if (winner === 'T') {
//         message.innerHTML = `a TIE? What's the matter, <span style="font-size: 4.5vmin"><span style="color: whitesmoke"> BOOMTOWN? </span></span> Did somebody's little sister eat their last <span style="font-size: 4.5vmin"><span style="color: orange"> Halloween Oreo </span></span> ?`
//     }
//     else if (winner >= '1') {
//         message.innerHTML =`Wheel, snipe, celly boys! The <span style="font-size: 4.5vmin"><span style="color: whitesmoke"> LETTERKENNY IRISH </span></span> get the W.`
//     }
//     else if (winner <= '-1') {
//         message.innerHTML = `JJ Frankie JJ scores! And the <span style="font-size: 4.5vmin"><span style="color: dodgerblue"> THREE RIVERS LAKERS </span><span> bag the win. <br> It's <span style="font-size: 4.5vmin"><span style="color: dodgerblue"> F%^&$!@ </span> EMBARASSING! </span></br>`
//     }
//     else if (score >= '1') {
//         message.innerHTML = `Ferda. The <span style="font-size: 4.5vmin"><span style="color: whitesmoke"> LETTERKENNY IRISH</span></span> are in the lead`;
//     }
//     else if (score <= '-1') {
//         message.innerHTML = `The <span style="font-size: 4.5vmin"><span style="color: dodgerblue"> THREE RIVERS LAKERS</span></span> have taken the lead`
//     }
//     else {
//         message.innerText = 'Nice stats, no stats.'
//     }
// }

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

// playAgainBtn.disabled = !winner;