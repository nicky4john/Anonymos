<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <title>Temperatur converter</title>
</head>
<body>
    <form>
        <h1>Temperature Conversion</h1>
    <input type="text" value="0" id="textbox"><br><br>
    
    <input type="radio" id="tofarenhiet" name="unit">
    <label id="tofarenhiet">Celcius → Farenhiet</label><br>

    <input type="radio" id="tocelcius" name="unit">
    <label id="tocelcius">Farenhiet → Celcius</label><br><br>

    <button type="button" onclick="convert()" id="mysubmit">submit</button>
    <P id="result"></P>
    </form>
    
    
    <style>
  body{
    text-align: center;
    font-size: large;
    font-family: sans-serif;
}

h1{
    color: rgb(11, 142, 142) ;
}

#textbox{
    height: 30px;
    width: 400px;
    text-align: center;
    font-size: large;
    margin-bottom: 15px;
    font-weight: solid rgb(64, 50, 50);
}
#mysubmit{
    height: 50px;
    width: 100px;
    background-color: hsl(0, 100%, 52%);
    color: aliceblue;
    border-radius: 5px;
    font-size: large;
}
form{
    border: 5px 5px 15px  hsla(0, 0%, 0%, 0.3);
    background-color: hsla(0, 13%, 84%, 0.761);
    border: none;
    text-align: center;
    padding: 25px;
    font-size: 2em;
    border-radius: 10px;
    box-shadow: 30px;
}
label{
    font-weight: bold;
}
</style>

<script>
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
</script>
</body>
</html>

