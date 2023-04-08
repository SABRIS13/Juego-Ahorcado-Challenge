const text_add = document.querySelector("#add_word");
const excla = document.querySelector(".excla");
btn_add = document.querySelector(".btn_add");
btn_cancel = document.querySelector(".btn_cancel");

let added_words = [];
let value_text;


const add_word = () => {
    value_text = text_add.value.toUpperCase();
    if (value_text.length >= 3 && value_text.length <= 8 && value_text.match(/[a-zñ]$/i)) {
        verify_words(value_text);
        text_add.style.border = "none";
        excla.style.color = "#4f1220";
    } else {
        text_add.style.border = "2px solid #4f3e12";
        excla.style.color = "#4f1212";
    }
}

const verify_words = word => {
    if (!added_words.includes(word)) {
        words.push(word);
        added_word();
    } else {
        repeated_word(word);
    }
    added_words.push(word);
    console.log(added_words);
}

btn_add.addEventListener("click", () => {
    add_word();
    text_add.value = '';
})

btn_cancel.addEventListener("click", return_home);
