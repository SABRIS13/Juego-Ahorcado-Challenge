btnD.addEventListener('click', () => {
    visible_home();
    game.style.display = 'none'
})


btnC.addEventListener('click', () => {
    visibleHome();
    newWord.style.display = 'none'
});

btnS.addEventListener('click', () => {
    addWord();
    textArea.value = '';
})