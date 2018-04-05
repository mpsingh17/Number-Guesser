// Game values.
let min         = 1,
    max         = 52,
    winningNum  = 2,
    guessesLeft = 3 ;

// UI elements.
const game       = document.querySelector( 'game' ),
      minNum     = document.querySelector( '.min-num' ),
      maxNum     = document.querySelector( '.max-num' ),
      guessBtn   = document.querySelector( '#guess-btn' ),
      guessInput = document.querySelector( '#guess-input' ),
      message    = document.querySelector( '.message' ) ;

// Assign min and max in UI.
minNum.textContent = min ;
maxNum.textContent = max ;

// Listen for guess 
guessBtn.addEventListener( 'click', function() {
  let guess = Number.parseInt( guessInput.value ) ;

  // Validate 
  if ( Number.isNaN( guess ) || guess < min || guess > max ) {
    setMessage( `Please, enter number between ${min} and ${max}.`, 'red' ) ;
  }

  // Validate win case.
  if ( guess === winningNum ) {
    
    // Change border color to green
    guessInput.style.borderColor = 'green' ;

    // Disable input
    guessInput.disabled = true ;

    setMessage( `${winningNum} is correct, You Win!!`, 'green' ) ;

  } else {

  }
} ) ;

// Set message.
function setMessage( msg, color ) {
  message.style.color = color ;
  message.textContent = msg ;
}