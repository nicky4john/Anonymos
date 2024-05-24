const textbox = document.getElementById("textbox");
const tofarenhiet = document.getElementById("tofarenhiet");
const tocelcius = document.getElementById("tocelcius");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");
let temp;
let tempo;

function convert(){

    if(tocelcius.checked){
        temp = (9 / 5 ) * (textbox.value) + 32;
        result.textContent = temp;
    }
    else if(tofarenhiet.checked){
        tempo = (textbox.value - 32) * 5 / 9;
        result.textContent = tempo;
    }
    else{
        result.textContent = "Please choose a Unit to convert temperature."
    }
}
