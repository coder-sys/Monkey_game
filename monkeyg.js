var monkey = createSprite(26,340.95,10,10);
var ground = createSprite(390,392,4000,10);
var rock = createSprite(200,392,1,1);
var gamestate,st;
st = 1;
monkey.setAnimation("monkey");
monkey.scale = 0.15;
ground.velocityX = -2;
 
var frut = createGroup();

function draw() {
  background("white");
  text(st,214,44);
  st += 1; 
  if (keyDown("space")&& monkey.y >= 340.95){
    monkey.velocityY = -20;
    monkey.velocityX = 2;
  }
  if (monkey.x > 400){
    monkey.x = 26;
  }
  monkey.velocityY = monkey.velocityY + 0.9;
monkey.collide(ground);
banana();
frut.setVelocityXEach(ground.velocityX);
frut.setVelocityYEach(1);
if (monkey.isTouching(frut)){
  frut.destroyEach();
}
stone();
if(ground.x ===0){
  ground.x = 400;
}          
                        
  drawSprites();
}
function banana(){
  if (World.frameCount % 80 === 0){
  var fruit = createSprite(randomNumber(129,361),randomNumber(120,200));
  fruit.setAnimation("Banana");
  fruit.scale = 0.03;
  fruit.collide(ground);
  frut.add(fruit);
  }
}
function stone(){
    rock.setAnimation("Stone");
    rock.scale = 0.13;
    rock.velocityX = -1;
    rock.collide(ground);
    if (rock.x === 0){
      rock.x = 400;
    }
  }