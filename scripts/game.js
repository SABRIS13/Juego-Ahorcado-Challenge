// Words of the games
const words = ['JUEGO', 'VAQUERO', 'CELULAR', 'OESTE', 'CASA', 'SOMBRERO', 'ALURA', 'PELICULAS', 'LIBROS', 'VIDEO', 'CARICATURAS', 'LIBERTAD'];


const addLetters = document.querySelector('.correct_letters');
const incorrectLetters = document.querySelector('.incorrect_letters');
const label = document.querySelector('#img_label');

const btn_restart = document.querySelector('#restart-game'); // button to restart
const btn_end = document.querySelector('#end-game'); //button to end a game


//LLamadas

const random = (min, max) => { //Random number
    let aWord = max - min;
    let wordR = Math.floor(Math.random() * aWord + min);
    return wordR;
}

const wordRandomSelect = () => { // Palabra aleatoria;
    let wordS = words[wordRandom(0, palabras.length)];
    wordSelect = wordS
}

const resetsValue = () => { //Resetea los valores para un neuvo juego;
    lettersUsed = [];
    mistakes = 0;
    hits = 0;
    addLetters.innerHTML = '';
    incorrectLetters.innerHTML = '';
    img.src = `./img/img0.png`;
}


//Alertas

function aError(palabra) { //Alarma por si no se adivina la palabra
    Swal.fire({
        icon: 'error',
        title: 'Ahorcado...',
        text: "No adivinaste la palabra esta era : " + palabra,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Jugar de Nuevo',
        cancelButtonText: 'Desistir'
    }).then((result) => {
        if (result.isConfirmed) {
            playGame();
        }
        if (result.isDismissed) {
            visibleHome();
            game.style.display = 'none';
        }
    })
}

function aSuccess(palabra) { //Alarma por adivinar la palabra
    Swal.fire({
        icon: 'success',
        title: 'Felicidades!',
        text: "Has advinado la palabra : " + palabra,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Jugar de Nuevo',
        cancelButtonText: 'Desistir'
    }).then((result) => {
        if (result.isConfirmed) {
            playGame()
        }
        if (result.isDismissed) {
            visibleHome()
            game.style.display = 'none';
        }
    })
}

function addedWord() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su palabra a sido añadida!',
        showConfirmButton: false,
        timer: 1500
    })
}

function repeatWord(palabra) {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Su palabra ' + palabra + " ya se agrego!",
        showConfirmButton: false,
        timer: 1500
    })
}


btn_restart.addEventListener('click', playGame);