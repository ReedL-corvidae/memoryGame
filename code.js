import { Card } from "./card.js";
import { Toolbox } from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox();

let color1 = toolbox.getRandomColor();
let card1a = new Card(canvas, pencil, 50, 50, color1);
let card1b = new Card(canvas, pencil, 200, 50, color1);


//array to store cards
let cards = [];
let colors = [];
function getSameCards(){

    //Cards based on color?

   // colors.push(toolbox.getRandomColor())
   // console.log(colors);
}


function gameLoop(){

    getSameCards();
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    card1a.draw();
    card1b.draw();



}
setInterval(gameLoop, 50);