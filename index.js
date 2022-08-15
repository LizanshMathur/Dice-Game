var randomNumber1 = Math.floor(Math.random() * 6) +1;

var image = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",image);

var randomNumber2 = Math.floor(Math.random() * 6) +1;

var image = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",image);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins🔥";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins🔥 ";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}