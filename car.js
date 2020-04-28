
class car {
    constructor(weight,speed){
        this.x = 50;
        this.y = 200;
        this.sprite = createSprite(this.x,this.y,50,50);
        this.sprite.weight = weight;
        this.sprite.speed = speed;
        this.sprite.velocityX = this.sprite.speed;
        this.sprite.shapeColor = color(255);
    }
}