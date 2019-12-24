var colorList = ['#6F56E8', '#FF5E8E', '#EFE856'];

// function windowResized() {
// }
function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(20);
  rectMode(CENTER);
  // angleMode(CENTER);
  resizeCanvas(windowWidth, windowHeight);
  background('#4F5AE8');

}


function draw() {

  var x = random() * 400;
  var y = random() * 400;
  var r = 3 + random() * 30;
  var z = 3 + random() * 30;

  var i = Math.round(random() * (colorList.length - 1));
  fill(color(colorList[i]));

  if (random() < 0.5) {
    fill('#7164E8');
  } else {
    fill('#6EFFE5');
  }

  for (var x = 25; x < windowWidth; x += 50)

    for (var y = 25; y < windowHeight; y += 50) {
      noStroke();



      var index = floor(random() * colorList.length);
      var colorHex = colorList[index];
      fill(color(colorHex));



      console.log(i)
      rect(x, y, r, z);
    }


}
