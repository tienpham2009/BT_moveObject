const speed = 10;

class Rectangle {
    constructor(x, y, width, heigth,img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d')
        this.img = img;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.drawImage(this.img,this.x,this.y,this.width,this.heigth);
        this.ctx.stroke();
    }


    move(evt) {
        this.clear();
        switch (evt.keyCode) {
            case 83 :
                this.moveDown()
                break;
            case 87:
                this.moveUp();
                break;
            case 65:
                this.moveLeft()
                break;
            case 68 :
                this.moveRight()
                break;

        }
        this.draw();
    }

    moveUp() {
        this.y -= speed;
    }

    moveDown() {
        this.y += speed;
    }

    moveLeft() {
        this.x -= speed;
    }

    moveRight() {
        this.x += speed;
    }

    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.heigth);
    }


}