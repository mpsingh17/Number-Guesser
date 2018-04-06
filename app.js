// Game values.
let min         = 1,
    max         = 10,
    winningNum  = getRandomNum( min, max ),
    guessesLeft = 3 ;

// UI elements.
const game       = document.querySelector( '#game' ),
      minNum     = document.querySelector( '.min-num' ),
      maxNum     = document.querySelector( '.max-num' ),
      guessBtn   = document.querySelector( '#guess-btn' ),
      guessInput = document.querySelector( '#guess-input' ),
      message    = document.querySelector( '.message' ) ;

// Assign min and max in UI.
minNum.textContent = min ;
maxNum.textContent = max ;

// Play again event listener
game.addEventListener( 'mousedown', function(e) {
  // Find submit btn as our target.
  if ( e.target.classList.contains('play-again') ) {
    guessInput.value = '' ;
    window.location.reload() ;
  }
} ) ;

// Listen for guess 
guessBtn.addEventListener( 'click', function() {
  let guess = Number.parseInt( guessInput.value ) ;

  // Validate 
  if ( Number.isNaN( guess ) || guess < min || guess > max ) {
    setMessage( `Please, enter number between ${min} and ${max}.`, 'red' ) ;
  }

  // Validate win case.
  if ( guess === winningNum ) {
    
    gameOver( true, `${winningNum} is correct, You Win!!` ) ;

  } else {
    // Wrong number case
    guessesLeft -= 1 ;

    if( guessesLeft === 0 ) {
      // Game over - lost
      gameOver( false, `Game over, You lost :( Correct number was ${winningNum}` ) ;

    } else {
      // Game continue - wrong guess.

      // Change border color to green
      guessInput.style.borderColor = 'red' ;
      guessInput.value = '' ;
      setMessage( `${guess} is not correct, ${guessesLeft} guesses left`, 'red' ) ;
    }
  }
} ) ;

// Set message.
function setMessage( msg, color ) {
  message.style.color = color ;
  message.textContent = msg ;
}

// Get winning num
function getRandomNum( min, max ) {
  return Math.floor( Math.random() * (max - min + 1) + min ) ;
}

// Game over 
function gameOver( won, msz ) {
  let color = ( won === true ) ? 'green' : 'red' ;

  // Disable input
  guessInput.disabled = true ;

  // Change border color to red
  guessInput.style.borderColor = color ;

  setMessage( msz, color ) ;

  // Want to play again?
  guessBtn.value = 'Play Again' ;
  guessBtn.classList.add('play-again') ;
}