export class Card {

    x = 10;
    y = 10;
    width = 100;
    height = 150;
    canvas;
    pencil;

     constructor(canvas, pencil) {
        this.canvas = canvas;
        this.pencil = pencil;
    }

    drawCard(){
        this.pencil.fillStyle = "black";
        this.pencil.fillRect(
            this.x, 
            this.y, 
            this.width, 
            this.height
        ); // x, y, w, h
    }
    getRandomCardColor(){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        //return color
        return "rgb(" + red + "," + green + "," + blue + ")";
    }

}