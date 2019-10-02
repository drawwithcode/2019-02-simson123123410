var colorList=['#6EFFE5','#7164E8',];
function preload(){}
function setup() {
  createCanvas(windowWidth,windowHeight)
  noStroke();
}

function draw() {

  var x = random() * windowWidth;
  var y = random() * windowHeight;
  var r = 3 + random() * 30;
  var z = 3 + random() * 30;

  var i = Math.round(random() * ( colorList.length -1));
  fill(color(colorList[i]));

  if(random()<0.5)
{
   fill('#7164E8');
} else {
   fill('#6EFFE5');
}

     for(var x = 25; x < 400; x+=50)

	for(var y = 25; y < 400; y+=50)
{
  	stroke(255);



    var index = floor(random() * colorList.length);
   var colorHex = colorList[index];
   fill(color(colorHex));



  console.log(i)
  rect(x, y, r,z);
}


}
