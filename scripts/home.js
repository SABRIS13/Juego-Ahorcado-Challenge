// Elements of the code
const home = document.getElementById('home');
const game = document.getElementById('game');
const btn_start = document.querySelector('#start-game'); //button to start the game
const btn_add = document.querySelector('#add-button'); //button to add a word

const visible_home = () => { home.style.display = 'block'; } //Show home section
const hidden_home = () => { home.style.display = 'none'; } //Hid the home section

//Botones ya con sus eventos a escuchar;

btn_start.addEventListener('click', () => {
    //playGame();
    hidden_home();
    //game.style.display = 'none'
})


//let button = document.querySelector('#myButton');
// button.addEventListener('click', function() {
//  console.log('Button clicked!');
//});

// btn.addEventListener('click', () => {
   // alert('You clicked the button');
  //});
//btn_add.addEventListener('click', () => {
  //  hidden_home();//
    //newWord.style.display = 'block'
    //textArea.value = '';
    //textArea.style.border = 'none';
    //pAdv.style.color = '#495057';
//})
