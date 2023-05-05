///// WELCOME to the First Chapter of Cherch Games: BOOMTOWN (A Letterkenny Themed Air Hockey Experience) /////

//////////////////////////
/*----- CONSTANTS -----*/

// First, let's assign COLORS to PLAYER VALUE of 1 and -1 for our STICKS and TRANSPARENT for null
const playerColor = {
    '1' : rgba(245, 245, 173, 0.86),
    '1' : rgba(0,0,0, 0.86),
    'null' : transparent,
}


////////////////////////////////////////////////
/*----- app's STATE (Variables) aka lets -----*/

let board, score, goal, winner;


/////////////////////////////////////////
/*----- cached ELEMENT references -----*/

// Next, we'll display a message in h2 delcaring who's TURN IT IS or WHO THE WINNER is //
const message = document.querySelector('h2');

// Then, we'll activate our FACE OFF button at the top
const faceOffBtn = document.querySelector('faceOffBtn')

// Then we'll activate our PLAY AGAIN button at the bottom
const playAgainBtn = document.querySelector('playAgainButton')



///////////////////////////////
/*----- EVENT LISTENERS -----*/

// Next, we add an Event Listener to the BOARD 
document.getElementById('ice').addEventListener('click', handleMove);
playAgainBtn.addEventListener('click', initialize);



/////////////////////////
/*----- FUNCTIONS -----*/


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

function getWinner() {

}


///// Step FIVE -- Visualize all STATE and INFO inthe DOM
function render() {
    renderBoard();
    renderMessage();
    // HIDE or SHOW the PLAY AGAIN BUTTON //
    playAgainBtn.disabled = !winner;
}


/// RENDER THE BOARD  /////



///// RENDER SCORE /////
function renderScore () {
    if (score >= '1') {

    } else if (score <= '-1') {

    } else {
        
    }
}



////// WINNING MESSAGE & TURN MESSAGE //////
function renderMessage () {
    if (winner === 'T') {
        
    }
    else if (winner >= '1') {

    }
    else if (winner <= '-1') {

    } 
    else {

    }
}
