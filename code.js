import { Card } from "./card.js";
import { Toolbox } from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");
let toolbox = new Toolbox();


let stickbugEnding = document.getElementById("stickbugEnd");

// let color1 = toolbox.getRandomColor();
// let card1a = new Card(canvas, pencil, 50, 50, color1);
// let card1b = new Card(canvas, pencil, 200, 50, color1);

//flipped cards tracker
let flippedCards = [];

//rounds array
let round = 1;
let maxRounds = 4;

//array to store cards
let cards = [];

function shuffle(arr){
    for (let i = arr.length - 1; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log("shuffle function working");
}

function removeMatchedCards(cA, cB){
    cards = cards.filter(c => c !== cA && c !== cB);
}

function checkForMatch(){
    let [c1, c2] = flippedCards;

    if (c1.color == c2.color){
        removeMatchedCards(c1, c2);

    } else { 
        setTimeout(()=>{
            c1.isFaceUp = false;
            c2.isFaceUp = false;
        }, 800);
    }
    flippedCards = [];
}

export function onCardFlipped(card) {

        if (card.isFaceUp == false) return;

        flippedCards.push(card);

        if (flippedCards.length == 2){
            checkForMatch();
        }
    }

function positionCards(cards){
    let columns = 4;
    let spacingX = 120;
    let spacingY = 180;

    cards.forEach((card, i) =>{
        let x = (i%columns) * spacingX + 50;
        let y = Math.floor(i/columns) * spacingY + 50;
        card.x = x;
        card.y = y;
    });
    console.log("position cards function working");
}

function createDeck(pair){
    cards = [];

    let colors = [];

    //the colors
    for (let i = 0; i<pair; i++){
        colors.push(toolbox.getRandomColor());
    
    }

    //2 cards per color
    colors.forEach(color => {
        cards.push(new Card(canvas, pencil, 0, 0, color));
        cards.push(new Card(canvas, pencil, 0, 0, color));
    });

    shuffle(cards);
    positionCards(cards);
    console.log("create deck working");
}

function startRound(round){
    cards = [];
    flippedCards = [];

    let numPairs = round + 4;

    for (let i = 0; i < numPairs; i++){
        let color = toolbox.getRandomColor();

        let cardA = new Card(canvas, pencil, 0, 0, color);
        let cardB = new Card(canvas, pencil, 0, 0, color);

        cards.push(cardA, cardB);
    }
    shuffle(cards);
    positionCards(cards);
}

function gameLoop(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);


    cards.forEach(card =>{
        card.draw();
        //console.log("this is working");
    });

    if(cards.length == 0) {
        round++;

        if (round > maxRounds){
            round = 0;
        }
        startRound(round);
    }


}
createDeck(4);
setInterval(gameLoop, 50);