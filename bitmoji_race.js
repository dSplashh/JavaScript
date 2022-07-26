var frogSpeed = random(1, 5);
var bitSpeed = random(1, 5);
var bodyX = 10;
var bodyY = 100;
var frogX = 10;
var frogY = 300;
draw = function() {
    background(255, 255, 255);
var drawhalf = function(){
fill(0, 0, 0);
ellipse(bodyX +50, bodyY +50, 59, 74);//hoodie
fill(122, 92, 66);
ellipse(bodyX +50, bodyY +54, 52, 67);//face
fill(0, 0, 0);
triangle(bodyX +57, bodyY +100, bodyX - 5, bodyY +100, bodyX +27, bodyY +71);//hoodie
triangle(bodyX +110, bodyY +100, bodyX +42, bodyY +100, bodyX +73, bodyY +71);//hoodie
rect(bodyX +34, bodyY +88, 30, 10);//hoodie
fill(255, 255, 255);
ellipse(bodyX +60, bodyY +50, 12, 4);//eyes
ellipse(bodyX +40, bodyY +50, 12, 4);//eyes
fill(0, 0, 0);
ellipse(bodyX +59, bodyY +50, 4, 2);//eyes
ellipse(bodyX +42, bodyY +50, 3, 2);//eyes
line(bodyX +65, bodyY +45, bodyX +54, bodyY +46);//eyebrows
line(bodyX +35, bodyY +45, bodyX +47, bodyY +46);//eyebrows
fill(92, 41, 66);
};
var drawotherh = function(){
noStroke();
bezier(bodyX +50, bodyY +63, bodyX +40, bodyY +62, bodyX +61, bodyY +75, bodyX +51, bodyY +50);//nose
fill(20, 12, 12);
rect(bodyX +31, bodyY +21, 35, 10);//hair
rect(bodyX +59, bodyY +21, 10, 10);//hair
rect(bodyX +25, bodyY +30, 7, 10);//hair
rect(bodyX +67, bodyY +30, 7, 10);//hair
fill(92, 41, 41);
stroke(122, 92, 66);
ellipse(bodyX +50, bodyY +71, 17, 3);//top lip
fill(120, 63, 74);
arc(bodyX +50, bodyY +72, 14, 10, 0, 180);//bottom lip
noStroke();
fill(10, 1, 1);
rect(bodyX +71, bodyY +39, 5, 34);
rect(bodyX +24, bodyY +39, 5, 34);
ellipse(bodyX +30, bodyY +82, 2, 34);
ellipse(bodyX +70, bodyY +82, 2, 34);
fill(255, 0, 0);
text("DAF", bodyX +64, bodyY +96);
};
var drawBitmoji = function(){
  drawhalf();
  drawotherh();
};
drawBitmoji();
bodyX = bodyX +bitSpeed;


var froghalf = function(){
noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX+ 50, frogY - 50, 40, 40); // right eye socket
};
var frogotherh = function(){
fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball


fill(8, 1, 1);
ellipse(frogX, frogY, 140, 40);

rect(frogX + 50, frogY - 50, 12, 10);
rect(frogX - 50, frogY - 50, 12, 10);
};
var froggy = function(){
   froghalf();
   frogotherh();
};
froggy();
frogX = frogX + frogSpeed;

};
