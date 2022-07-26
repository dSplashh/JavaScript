var onehalf = function(bodyX, bodyY, bitheight){
fill(0, 0, 0);
ellipse(bodyX + bitheight/250*50, bodyY + bitheight/250*50, bitheight/250*59, bitheight/250*74);//hoodie
fill(122, 92, 66);
ellipse(bodyX + bitheight/250*50, bodyY + bitheight/250*54, bitheight/250*52, bitheight/250*67);//face
fill(0, 0, 0);
triangle(bodyX + bitheight/250*57, bodyY + bitheight/250*100, bodyX - bitheight/250*5, bodyY + bitheight/250*100, bodyX + bitheight/250*27, bodyY + bitheight/250*71);//hoodie
triangle(bodyX + bitheight/250*110, bodyY + bitheight/250*100, bodyX + bitheight/250*42, bodyY + bitheight/250*100, bodyX + bitheight/250*73, bodyY + bitheight/250*71);//hoodie
rect(bodyX +bitheight/250*34, bodyY + bitheight/250*88, bitheight/250*30, bitheight/250*10);//hoodie
fill(255, 255, 255);
ellipse(bodyX + bitheight/250*60, bodyY + bitheight/250*50, bitheight/250*12, bitheight/250*4);//eyes
ellipse(bodyX + bitheight/250*40, bodyY + bitheight/250*50, bitheight/250*12, bitheight/250*4);//eyes
fill(0, 0, 0);
ellipse(bodyX + bitheight/250*59, bodyY + bitheight/250*50, bitheight/250*4, bitheight/250*2);//eyes
ellipse(bodyX + bitheight/250*42, bodyY + bitheight/250*50, bitheight/250*3, bitheight/250*2);//eyes
line(bodyX + bitheight/250*65, bodyY + bitheight/250*45, bodyX + bitheight/250*54, bodyY + bitheight/250*46);//eyebrows
line(bodyX + bitheight/250*35, bodyY + bitheight/250*45, bodyX + bitheight/250*47, bodyY + bitheight/250*46);//eyebrows
fill(92, 41, 66);
noStroke();
bezier(bodyX + bitheight/250*50, bodyY + bitheight/250*63, bodyX + bitheight/250*40, bodyY + bitheight/250*62, bodyX + bitheight/250*61, bodyY + bitheight/250*75, bodyX + bitheight/250*51, bodyY + bitheight/250*50);//nose
};
var otherhalf = function(bodyX, bodyY, bitheight){
fill(20, 12, 12);
rect(bodyX + bitheight/250*31, bodyY + bitheight/250*21, bitheight/250*35, bitheight/250*10);//hair
rect(bodyX + bitheight/250*59, bodyY + bitheight/250*21, bitheight/250*10, bitheight/250*10);//hair
rect(bodyX + bitheight/250*25, bodyY + bitheight/250*30, bitheight/250*7, bitheight/250*10);//hair
rect(bodyX + bitheight/250*67, bodyY + bitheight/250*30, bitheight/250*7, bitheight/250*10);//hair
fill(92, 41, 41);
stroke(122, 92, 66);
ellipse(bodyX + bitheight/250*50, bodyY + bitheight/250*71, bitheight/250*17, bitheight/250*3);//top lip
fill(120, 63, 74);
arc(bodyX + bitheight/250*50, bodyY + bitheight/250*72, bitheight/250*14, bitheight/250*10, 0, 180);//bottom lip
noStroke();
fill(10, 1, 1);
rect(bodyX + bitheight/250*71, bodyY + bitheight/250*39, bitheight/250*5, bitheight/250*34);
rect(bodyX + bitheight/250*24, bodyY + bitheight/250*39, bitheight/250*5, bitheight/250*34);
ellipse(bodyX + bitheight/250*30, bodyY + bitheight/250*82, bitheight/250*2, bitheight/250*34);
ellipse(bodyX + bitheight/250*70, bodyY + bitheight/250*82, bitheight/250*2, bitheight/250*34);
fill(255, 0, 0);
text("DAF", bodyX + bitheight/250*64, bodyY + bitheight/250*96);
};

var drawBitmoji = function(bodyX, bodyY, bitheight){
   onehalf(bodyX, bodyY, bitheight);
   otherhalf(bodyX, bodyY, bitheight);
};
var changeColor;
var carSpeed = [];
var scene = 1;
var Score = 0;
var ScoreWay = 0; 
var numCars = 100;
var stillPlaying = true;
var Bit = function(x, y, height) {
    this.x = x;
    this.y = y;
    this.height = 100;
};

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.newColor = config.newColor || color(0, 21, 255);
};

Button.prototype.changeColor = function(newColor){
    changeColor = this.newColor;
};

Button.prototype.draw = function(newColor) {
    fill(this.newColor);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255, 255, 255);
    textSize(19);
    textAlign(CENTER, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var strbtn = new Button({
    x: 131,
    y: 297,
    label: "Start Button",
    newColor: color(0, 21, 255),
    onClick: function(){
        scene = 2;
    }
});

var splashh = function(){
    background(250, 254, 255);
    textSize(30);
    fill(0, 34, 255);
    text("FROGGER", 200, 44);
    textSize(20);
    text("Darryl A. Fleurantin", 303, 375);
    drawBitmoji(170, 125, 200);
    strbtn.draw();
};

Bit.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    drawBitmoji(this.x, this.y, this.height);
    if(ScoreWay === 0 && Bit.y <= 50){
        Score++;
        ScoreWay = 1;
    }
    if(ScoreWay === 1 && Bit.y >= 350){
        Score++;
        ScoreWay = 0;
    }
};

Bit.prototype.hop = function() {
    this.y -= 5;
};

Bit.prototype.fall = function() {
    this.y += 5;
};

Bit.prototype.checkForCarcrash = function(car){
    if((car.x >= this.x && car.x <= (this.x + 50)) &&
        (car.y >= this.y && car.y <= (this.y + 50))) {
        car.y = -400;
        Score = Score - 1;
    }
};

var car = function(x, y) {
    this.x = x;
    this.y = y;
};

car.prototype.draw = function() {
    fill(255, 0, 0);
    rect(this.x, this.y, 50, 25);
    fill(3, 0, 0);
    ellipse(this.x + 10, this.y + 25, 15, 15);
    ellipse(this.x + 40, this.y + 25, 15, 15);
};

var Bit = new Bit(200, 300);

var cars = [];
    for (var i = 0; i < numCars; i++) {  
        cars.push(new car((i * 50 - 5000), random(20, 260)));
        if(cars[i] === numCars){
            stillPlaying = false;
        }
}

draw = function() {
    if(scene === 1){
     splashh();
     }
    
    if(scene === 2 && stillPlaying){
    
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    rect(0, height*0.00, width, height*0.10);
    for (var i = 0; i < cars.length; i++) {
        cars[i].draw();
        Bit.checkForCarcrash(cars[i]);
        carSpeed.push(round(random(1, 3)));
        cars[i].x += carSpeed[i];
    }
    fill(0, 60, 255);
    textSize(18);
    text("Score: " + Score, 83, 15);
    if (keyIsPressed && keyCode === 0) {
        Bit.hop();
    } else {
        Bit.fall();
    }
        Bit.draw();
    }
};

mouseClicked = function(){
  strbtn.handleMouseClick();
};
