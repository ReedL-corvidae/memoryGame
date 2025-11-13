import {Card} from "./card.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let card = new Card(canvas, pencil);
let cards = [];


function gameLoop(){

    pencil.clearRect(0, 0, canvas.width, canvas.height);

    card.drawCard();



}
setInterval(gameLoop, 50);

let cardColor = card.getRandomCardColor();
console.log(cardColor);