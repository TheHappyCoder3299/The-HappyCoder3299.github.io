var x,y,xv=5,yv=5,radius=20,ball,thickness=20,len=220;
var score=0;
var gameover=false;
var rectpos;
var bouncing_sound;
function setup() {
  textSize(60);
createCanvas(1510,740);
ball=new Ball(random(radius,width-radius),random(radius,height/2),xv,yv);
}
/*function preload()
{
 bouncing_sound=loadSound("Jump-SoundBible.com-1007297584");
}*/

function draw() {
background(20,250,89);
stroke(255);
fill(255);
rectpos=mouseX;
if(!gameover)
{
ball.show();
ball.update();
rect(rectpos-len/2,height-thickness,len,thickness);
score++;
if(ball.y+radius>=height-thickness)
{
  //bouncing_sound.play();
if(ball.xv>0)
ball.xv+=0.5;
else
ball.xv-=0.5;
if(ball.yv>0)
ball.yv+=0.5;
else
ball.yv-=0.5;
}
}


if(ball.y+radius>height)
{
  gameover=true;
  textSize(80);
  textAlign(CENTER);
  text("GAME OVER",width/2,height/2);
  textSize(30);
  text("YOUR SCORE- "+score,width/2,height/2+50);
}

}
class Ball
{
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
    this.xv=xv;
    this.yv=yv;
  }
  show()
  {
    ellipse(this.x,this.y,radius,radius);
  }
  update()
  {
    if(this.x-radius<0)
    this.xv=-this.xv;
    else if(this.x+radius>width)
    this.xv=-this.xv;
    if(this.y-radius<0)
    this.yv=-this.yv;
    else if(this.y+radius>height-thickness&&this.x>rectpos-len/2&&this.x<rectpos+len/2)
    this.yv=-this.yv;
    this.x+=this.xv;
    this.y+=this.yv;
  }
}
