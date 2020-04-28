  var cars,wall;
  var deformation;

  function setup() {
    createCanvas(1600,400);

  //cars = createSprite(50,200,50,50);
  cars = new car(random(400,1500),random(30,95));
  wall = createSprite(1500,200,60,400);
  wall.shapeColor = color(80,80,80);

 
  }

  function draw() {
    background(0);
    
    deformation = 0.5*cars.sprite.weight*cars.sprite.speed*cars.sprite.speed/22500;

    

    cars.sprite.collide(wall,clcDeformation);
    
  
  
  
  
    drawSprites();
  }
  function clcDeformation(){
    if (deformation<100){
      cars.sprite.shapeColor = color(0,255,0);
  }
    if ( deformation>99
      &&deformation<180){
      cars.sprite.shapeColor = color(255,255,0);
    }
    if (deformation>179){
      cars.sprite.shapeColor = color(255,0,0);
    } 
  }