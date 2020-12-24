const Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var engine, world;
var divisions = [];
var particles = [];
var plinkos = [];
var divisionHeight=300;
var count=0;
var score =0;
var particle;
var gameState="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
 

for (var i=0; i<particles.length; i++) {
  particles[i].display();

  if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
    particles.push();
    score=score+500;
   particles.pop();
  }
 else if (particles[i].body.position.x<600 && particles[i].body.position.x>301 && particles[i].body.position.y>760) {
  particles.push(); 
  score = score + 100;
   particles.pop();
 }
 else if (particles[i].body.position.x<900 && particles[i].body.position.x>601 && particles[i].body.position.y>760) {
  particles.push();
  score = score + 200;
   particles.pop();
 }
}
text("Score : "+score,20,40);

text(" 500 ", 5, 600);
  text(" 500 ", 80, 600);
  text(" 500 ", 160, 600);
text(" 500 ", 240, 600);
  text(" 100 ", 320, 600);
  text(" 100 ", 400, 600);
  text(" 100 ", 480, 600);
text(" 200 ", 560, 600);
  text(" 200 ", 640, 600);
text(" 200 ", 720, 600);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
   //}
 
   if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }


  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}