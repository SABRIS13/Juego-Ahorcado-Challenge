// Alerts of the game

    // Message if you lose
function alert_error(word) { 
    Swal.fire({
        icon: 'error',
        title: 'HANGED...',
        text: "You din´t guess, the word was : " + word,
        showCancelButton: true,
        confirmButtonColor: "#886108",
        cancelButtonColor: "#870d0d",
        confirmButtonText: "Play Again",
        cancelButtonText: "Leave",
    }).then((result) => {
        if (result.isConfirmed) {
            playGame();
        }
        if (result.isDismissed) {
            window.location.href = "index.html";
        }
    })
}
    // Message if you win
function alert_success(word) { 
    Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: "You guess the word: " + word,
        showCancelButton: true,
        confirmButtonColor: "#886108",
        cancelButtonColor: "#870d0d",
        confirmButtonText: "Play Again",
        cancelButtonText: "Leave",
    }).then((result) => {
        if (result.isConfirmed) {
            playGame()
        }
        if (result.isDismissed) {
            window.location.href = "index.html";
        }
    })
}

//Alerts for Adding a Word

function added_word(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your word has been added!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  function repeated_word(word){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Your word ' + word + " it´s already added!",
      showConfirmButton: false,
      timer: 1500
    })
  }
