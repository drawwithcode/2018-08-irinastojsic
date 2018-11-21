var value = 0;
var myImage;
var myImage2;
var myColors = [
  '#D9F4F5',
  '#95E4E7',
  '#4FBBBF',
  '#C2C7C7',
  '#8F9091',
]
var snow = [];

function preload(){
  myImage = loadImage('./assets/snesko.jpg');
  myImage2 = loadImage('./assets/pahulja.jpg');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  setMoveThreshold(10);
  frameRate(12);
}

function draw() {
  background('white');

  value += -1;

  image(myImage, 150, 100, myImage.width*1.5, myImage.height*1.5);
  image(myImage2, 115, 65, 50, 50);

  // fill('black');
  // ellipse(750, 240, 450, 420);

  fill('gray');
  textSize(30);
  textAlign(CENTER);
  textFont('Monotype Corsiva');
  text('Shake the Snowglobe', 150, 50);

  if(value>1){
   var newsnowflake={
     x:random(250,750),
     y:random(250,300),
     size:random(10,15),
     alp:random(100,255)
   };
   snow.push(newsnowflake);
  }

  for(i=0; i<snow.length; i++){
    var obj = snow[i];
    snowflake(obj.x,obj.y,obj.size,obj.alp);
    obj.y = obj.y + random(4,8);
  }

  for (var j=snow.length-1; j>=0; j--){
    if (snow[j].y > 700){
      snow.splice(j,1);
    }
  }

  }

  function snowflake(x, y, size, alp){

    fill(color(random(myColors)), alp);
    noStroke();
    ellipse(x,y,size);

  }

function deviceShaken() {

  value = value + 10;

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
