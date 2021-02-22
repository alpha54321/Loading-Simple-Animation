var box;
var bg;
var radius = 10,radius1 = 5,radius2 = 1;
var a = true,b = true,c = true;

function setup()
{
  createCanvas(400,400);
  
}
function draw()
{
  background("black");
   
  textSize(25);
  text("Loading dots",120,100);
  
  fill("lime");
    
  circle(180,200,radius);
  circle(200,200,radius1);
  circle(220,200,radius2);
  
  expandOrReduce();
  
  drawSprites();
}

function expandOrReduce()
{
      
  if(a === true)
  {
      radius++;
  }
  if(radius % 15==0)
  {
     a = !a;
  }
  if( a === false)
  {
      radius--;
  }
  if(b===true && frameCount >5)
  {
      radius1++;
  }
  if(radius1 % 15==0)
  {
     b = !b;
  }
  if( b === false)
  {
      radius1--;
  }
  if(c===true && frameCount >10)
  {
      radius2++;
  }
  if(radius2 % 15==0)
  {
     c = !c;
  }
  if( c === false)
  {
      radius2--;
  }
}