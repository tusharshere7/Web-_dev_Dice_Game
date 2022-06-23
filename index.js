var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var diceSelect1 = "images/" + "dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", diceSelect1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceSelect2 = "images/" + "dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", diceSelect2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎲Tushar Wins🎲";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🎲Comp Wins🎲";
} else {
  document.querySelector("h1").innerHTML = "🎲It's a draw!!!🎲";
}
