// ///// WELCOME to the First Chapter of Cherch Games: BOOMTOWN (A Letterkenny Themed Air Hockey Experience) /////


// //////////////////////////
// /*----- CONSTANTS -----*/





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
 let stick = document.querySelector('#stickOne');
 let x = 0;
 let y = 0;
 let speed = 10;


// The Puck Object
let puck


// /////////////////////////////////////////
// /*----- cached ELEMENT references -----*/



// // Next, we'll select H3 to be the theatre that displays a message delcaring WHO THE WINNER is //
// let message  = document.getElementById('h3')

// // Then, we'll declare our FACE OFF button at the top
// const faceOffBtn = document.querySelector('faceOffBtn')

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
        if (x > 0) {
            x -= speed;  // subtracts the speed from the X position
            console.log(x);
            stick.style.left = x + 'px';
            // stick.style.transform = 'rotate(270deg)';   // fancy spins for the joystick making it like an Arcade
        }
    } else if (evt.keyCode === 38) {
        // move up using UP ARROW KEY
        if (y > 0) {
            y -= speed; // subtracts speed from the Y position
            console.log(y);
            stick.style.top = y + 'px';
            // stick.style.transform = 'rotate(-0deg)';
        }
    } else if (evt.keyCode === 39) {
        // move to the RIGHT!  Yoooooo
        if (x < 275) {
            x += speed;   // ADDS speed to the X position
            console.log(x);
            stick.style.left = x + 'px';
            // stick.style.transform = 'rotate(90deg)'; 
        }
    } else if (evt.keyCode === 40) {
        // move the stick DOWN baybay!
        if (y < 271) {
            y += speed;
            console.log(y);
            stick.style.top = y + 'px';
            // stick.style.transform = 'rotate(180deg)';
        }
    }
})


// // Next, we add an Event Listener to the ICE to make it interactive
// document.getElementById('stickOne').addEventListener('onMouseDown', stickOne),

// // Next, we add an Event Listener to activate our FACE OFF feature
// faceOffBtn.addEventListener('click', initialize);

// // Then we add an Event Listener to activate our PLAY AGAIN BUTTON
// playAgainBtn.addEventListener('click', initialize);





// /////////////////////////
// /*----- FUNCTIONS -----*/


// // FIRST AND FOREMOST WE INITIALIZE OUR OBJECTS //
// init ();
// // Initialize all STATE then call render();
// function init () {
//     score = {
//         p: 0,
//         c: 0,
//     }
//     results = {
//         p: 'null',
//         c: 'null'
//     }
//     winner = 'p'
//     render();
// }

// /// RENDER THE BOARD aka the ICE RINK!  /////
// // in class we used forEach callback functions and literals too. 
// function renderBoard () {

// }


// // MAKING THE JOYSTICK MOVE with KEY CONTROLS //




// /// Now we have to program the Keyboard Controls to move your STICK ///
// // never wrote an algorithm before...wish me luck //


// stickOne.onMouseDown = function(evt) {
//     // use getBoundingClientRect() to make the mouse position relative to the JOYSTICK so its not all over the X and Y axes of the selected element//
//     let shiftX = evt.clientX - stickOne.getBoundingClientRect().left;
//     let shiftY = evt.clientY - stickOne.getBoundingClientRect().top;
//     // prepare the JOYSTICK to move. Position it absolute and on top by the Z Index
//     stickOne.style.position = 'absolute';
//     stickOne.style.zIndex = 1000;
//     // next we move it out of any parent elements directly into the ICE
//     document.ice.append(stickOne);
//     // next we have to center the JOYSTICK at positional coordinates
//     function moveAt(pageX, pageY) {
//         stickOne.style.left = evt.pageX - shiftX + 'vmin';
//         stickOne.style.top = evt.pageY - shiftY + 'vmin';

//     }
//     // now...I'm going to attempt to move our absolutely positioned JOYSTICK under the Mouse Pointer
//     moveAt(evt.pageX, evt.pageY) ;

//     function onMouseMove(evt) {
//         moveAt(evt.pageX, evt.PageY);
//     }
//     // now I'll try to move the JOYSTICK with the Mouse
//     document.addEventListener('mouseMove', onMouseMove);
//     // now the ability to release the JOYSTICK when you stop holding CLICK
//     stickOne.onMouseUp = function () {
//         document.removeEventListener('mouseMove', onMouseMove);
//         stickOne.onMouseUp = null;
//     }

// }

// stickOne.onDragStart = function() {
//     return false;
// }


// // function moveController(evt) {
// //     // Use a GUARD to prevent STICK from crossing CENTER ICE
// // if (evt.target.tagName !== 'stick') return;

// // //call RENDER //
// // render();
// // }

// // // NOW we have to program the STICKS to be able to SHOOT the PUCK //

// // function handleShot(evt) {
// //     if (evt.target.sticks === '')

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

// function render() {
//     renderCountdown(function() {
//         renderScores();
//         renderResults();
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


// /// Initial JS Pseudocode ///

// // Then we need to activate our borders so the puck bounces off the BORDER of the ICE <div>

// // Then, We need to emulate PUCK movement and determine a max speed //

// // Next, we need to implement STICK contact with the PUCK in both Velocity and Intertia //

// // Then we need to make the PLAYER 1 STICK controllable using the Keyboard Arrows //

// // Then we need to assign a max and min speed for the directional toggle of PLAYER 1's STICK CONTROLS

// // Then, we need to activate the GOAL <divs> to emulate nets which means they must
// //  - collect a goal
// //  - add that goal to the player's SCORE
// //  - return the value of the GOAL SCORED to the SCOREBOARD
// //  - display the value of the SCOREBOARD

// // Then, we need to set borders to keep each Player's STICKS from crossing center ice

// //// I want to make my mouse cursor the PLAYER ONE STICK but it's also 3am and I'd love to ask you guys how to modify a cursor for the purpose of game design ////

// // Next, we want to HIDE or SHOW the PLAY AGAIN BUTTON based on if there's a WINNER determined//




