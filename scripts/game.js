//Palabras a adivinar
const palabras = ["ALURA","COWBOY","HOUSE","HUMAN","WORLD","WINNER","CAT","DOG","CAKE","SCHOOL","DANCE","WEST","MOVIE","BOOK"];

//Elementos a manipular
const correct_letters = document.querySelector(".correct_letters");
const used_letters = document.querySelector(".used_letters");
const img = document.querySelector(".img_hang");
const btn_restart = document.querySelector(".btn_restart");
const btn_end=document.querySelector(".btn_end");

let wordSelect;
let letters_used;
let mistakes;
let hits;
let classDepend = true;
//LLamadas


const wordRandom = (min, max) => { //Numero aleatorio;
    let aWord = max - min;
    let wordR = Math.floor(Math.random() * aWord + min);
    return wordR;
}

const wordRandomSelect = () => { // Palabra aleatoria;
    let wordS = palabras[wordRandom(0, palabras.length)];
    wordSelect = wordS
}

const resetsValue = () => { //Resetea los valores para un neuvo juego;
    letters_used = [];
    mistakes = 0;
    hits = 0;
    correct_letters.innerHTML = "";
    used_letters.innerHTML = "";
    img.src = "../img/hang0.png";
}

const generateSpan = () => {
    for (let i = 0; i < wordSelect.length; i++) {
        let span = document.createElement('span');
        correct_letters.appendChild(span)
    }
}


//Botones ya con sus eventos a escuchar;

const playGame = () => {
    resetsValue();
    wordRandomSelect();
    generateSpan();
    eventButtons();
    resetClassBtn();
}

const return_home =()=>{
    window.location.href = "index.html";
}

window.onload = function() {
    playGame();
  };
btn_restart.addEventListener('click', playGame);
btn_end.addEventListener('click',return_home)

const endGame = () => {
    if (mistakes == 7) {
        alert_error(wordSelect);
    } else if (hits == wordSelect.length) {
        alert_success(wordSelect)
    }
}

const eventButtons = () => {
    let allButtons = document.querySelectorAll('.letters button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', clickButton);
    }
}

const incorrectLetter = letter => {
    let span = document.createElement('span');
    span.classList.add('lX');
    used_letters.appendChild(span);
    span.innerHTML = letter;
}

const wronLetter = letter => {
    mistakes++;
    let source = `../img/hang${mistakes}.png`;
    img.src = source;
    endGame();
}

const addLetter = letter => {
    let spans = document.querySelectorAll('.correct_letters span');
    for (let i = 0; i < spans.length; i++) {
        if (letter == wordSelect[i]) {
            spans[i].innerHTML = letter;
            hits++;
        }
    }
    endGame();
}

const verifyLetter = letter => {
    if (wordSelect.includes(letter)) {
        addLetter(letter);
        classDepend = true;
    } else {
        wronLetter(letter);
        incorrectLetter(letter)
        classDepend = false;
    }
    letters_used.push(letter);
}

const resetClassBtn = () => {
    let allButtons = document.querySelectorAll('.letters button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('btn_used');
        allButtons[i].classList.remove('btn_used_hit');
    }
}

const clickButton = event => {
    let buttons = event.target;
    let letter = buttons.innerHTML;
    if (!letters_used.includes(letter)) {
        verifyLetter(letter);
    }

    if (classDepend == false) {
        buttons.classList.add('btn_used');
    } else {
        buttons.classList.add('btn_used_hit');
    }
}






