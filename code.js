import {Card} from "./card.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let card = new Card();

function gameLoop(){

}
setInterval(gameLoop, 50);

let cardColor = card.getRandomCardColor();
console.log(cardColor);