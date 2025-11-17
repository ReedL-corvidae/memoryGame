import { Toolbox } from "./toolbox.js";
import { onCardFlipped } from "./code.js";

export class Card {

    x = 50;
    y = 50;
    color;
    width = 100;
    height = 150;
    isFaceUp = false;
    canvas;
    pencil;
    toolbox = new Toolbox();

     constructor(canvas, pencil, x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.canvas = canvas;
        this.pencil = pencil;
        this.width;
        this.height;

        this.isFaceUp = false;

        canvas.addEventListener("click", (e) => this.onClick(e));
    }

    draw(){
        if(this.isFaceUp){
            this.pencil.fillStyle = this.color;
            this.pencil.fillRect(this.x, this.y, this.width, this.height);
        } else {
            this.pencilStrokeStyle = "gray";
            this.pencilWidth = 10;
            this.pencil.strokeRect(this.x, this.y, this.width, this.height);
        }
    }

  
    
    onClick(event){

        let clickX = event.offsetX;
        let clickY = event.offsetY;

        let isClickInCard = this.toolbox.isWithinRect(clickX, clickY, this.x, this.y, this.width, this.height);

        if(isClickInCard){
            if(!this.isFaceUp && !this.matched){
                this.isFaceUp = true;
                onCardFlipped(this);
            }
        }
    }

}