///// WELCOME to the First Chapter of Cherch Games: BOOMTOWN (A Letterkenny Themed Air Hockey Experience) /////




//////////////////////////
/*----- CONSTANTS -----*/

// First, we'll assign COLORS to PLAYER VALUE of 1 and -1 for our STICKS and TRANSPARENT for null
const playerColor = {
    '1': 'rgba(245, 245, 173, 0.86)',
    '-1': 'rgba(30, 154, 255, 0.86)',
    'null': 'transparent',
}

// Then, we'll declare our CONTROLLERS/STICKS in an empty ARRAY //

const sticks = []





////////////////////////////////////////////////
/*----- app's STATE (Variables) aka lets -----*/

// Well, its hockey. So, we'll need a game board (the ICE), a scoreboard that updates at each goal per player, a winner, and a score (tally) for each player

let board, score, winner;
let playerOneScore;
let playerTwoScore;

// Goals, however. Goals seem like they would be an EVENT LISTENER somehow inside a LET

let goal // maybe make them span classes in the border of the ICE? Can you do that? I feel like we can instead of building a new div within a div within a div within a div (oyyyy)



/////////////////////////////////////////
/*----- cached ELEMENT references -----*/

// Next, we'll select H2 to be the theatre that displays a message delcaring who's TURN IT IS or WHO THE WINNER is //
let message  = document.getElementById('h3')

// Then, we'll declare our FACE OFF button at the top
const faceOffBtn = document.querySelector('faceOffBtn')

// Then we'll declare our PLAY AGAIN button at the bottom
const playAgainBtn = document.querySelector('playAgainButton')





///////////////////////////////
/*----- EVENT LISTENERS -----*/

// Next, we add an Event Listener to the BOARD 
document.getElementById('ice').addEventListener('click', handleMove);

// Next, we add an Event Listener to activate our FACE OFF feature
faceOffBtn.addEventListener('click', initialize);

// Then we add an Event Listener to activate our PLAY AGAIN BUTTON
playAgainBtn.addEventListener('click', initialize);






/////////////////////////
/*----- FUNCTIONS -----*/

// First we need to activate our borders so the puck bounces off the BORDER of the ICE <div>

// Then, We need to emulate PUCK movement and determine a max speed //

// Next, we need to implement STICK contact with the PUCK in both Velocity and Intertia //

// Then we need to make the PLAYER 1 STICK controllable using the Keyboard Arrows //

// Then we need to assign a max and min speed for the directional toggle of PLAYER 1's STICK CONTROLS

// Then, we need to activate the GOAL <divs> to emulate nets which means they must
//  - collect a goal
//  - add that goal to the player's SCORE
//  - return the value of the GOAL SCORED to the SCOREBOARD
//  - display the value of the SCOREBOARD

// Then, we need to set borders to keep each Player's STICKS from crossing center ice


//// I want to make my mouse cursor the PLAYER ONE STICK but it's also 3am and I'd love to ask you guys how to modify a cursor for the purpose of game design ////



// Step ONE -- Init all STATE VARIABLES then call RENDER //
init();

function init() {

    render();
}


// Step TWO -- Update all impacted STATE (handleMove(evt) etc etc) and then call RENDER




/// Step THREE -- Update STATE again (any LETS you declared) and call RENDER

winner = getWinner();
render();


//// Step FOUR -- Introduce WINNING LOGIC ////
/// a For If seems like it'd work here //

function getWinner() {
    
}



///// Step FIVE -- the RENDER function! Visualize all STATE and INFO inthe DOM

function render() {
    renderBoard();
    renderScore();
    renderMessage();


// Next, we want to HIDE or SHOW the PLAY AGAIN BUTTON based on if there's a WINNER determined//
    playAgainBtn.disabled = !winner;
}


/// RENDER THE BOARD aka the ICE RINK!  /////
// in class we used forEach callback functions and literals too. 
function renderBoard () {

}


/// Now we have to program the Keyboard Controls to move your STICK //
function moveController() {


}

///// RENDER SCORE /////
function renderScore() {
    if (score >= '1') {

    } else if (score <= '-1') {

    } else {

    }
}


////// RENDER THE SCOREBOARD /////




////// WINNING MESSAGE & LEAD MESSAGE //////
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
