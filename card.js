import { Toolbox } from "./toolbox.js";

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

        let isClickInCard = this.toolbox.isWithinRect(clickX, clickY, this.x, this.y, this.height, this.width);

        if(isClickInCard){
            this.isFaceUp = !this.isFaceUp;
        }
    }

}