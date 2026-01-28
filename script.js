const display = document.getElementById("value");

function addToDisplay(input)
{
    display.value +=input;
}
function Result(){
    display.value=eval(display.value);
}

function Clear(){
    display.value="";
}