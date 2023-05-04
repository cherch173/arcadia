///// WELCOME to the First Chapter of Cherch Games: BOOMTOWN (A Letterkenny Themed Air Hockey Experience) /////

//////////////////////////
/*----- CONSTANTS -----*/



////////////////////////////////////////////////
/*----- app's STATE (Variables) aka lets -----*/

let board, score, turn, winner;


/////////////////////////////////////////
/*----- cached ELEMENT references -----*/




///////////////////////////////
/*----- EVENT LISTENERS -----*/




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
