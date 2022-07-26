// <- Read directions to your left (or above on small windows)
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

var playerTurn = 0;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ["X", "O"];
var stillPlaying = true;
var Scene = 0;
var Moves = 0;

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {
    
    };
};

Button.prototype.draw = function() {
    fill(219, 9, 68);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
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

var stbtn = new Button({
    x: 135,
    y: 199,
    label: "Start Game",
      onClick: function(){
        Scene = 1;
    }
    });

var splashhscreen = function(){
    background(74, 84, 194);
    fill(255, 0, 0);
    textSize(35);
    text("TIC TAC TOE", 93, 58);
    textSize(20);
    text("THREE IN A ROW TO WIN TIC TAC TOE!", 16, 329);
    text("Darryl A. Fleurantin", 220, 374);
    drawBitmoji(231, 55, 156);
    stbtn.draw();
};
var tiles = [];

/* 0 3 6
   1 4 7
   2 5 8
   */
var checkWin = function() {
    if(tiles[0].label === tiles[1].label && tiles[1].label === tiles[2].label && tiles[0].label!== ""){return true;}
    if(tiles[0].label === tiles[3].label && tiles[3].label === tiles[6].label && tiles[0].label!== ""){return true;}
    if(tiles[1].label === tiles[4].label && tiles[4].label === tiles[7].label && tiles[1].label!== ""){return true;}
    if(tiles[2].label === tiles[5].label && tiles[5].label === tiles[8].label && tiles[2].label!== ""){return true;}
    if(tiles[3].label === tiles[4].label && tiles[4].label === tiles[5].label && tiles[3].label!== ""){return true;}
    if(tiles[6].label === tiles[7].label && tiles[7].label === tiles[8].label && tiles[6].label!== ""){return true;} 
    if(tiles[0].label === tiles[4].label && tiles[4].label === tiles[8].label && tiles[0].label!== ""){return true;}
    if(tiles[6].label === tiles[4].label && tiles[4].label === tiles[2].label && tiles[6].label!== ""){return true;}
    return false;
};

var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text(this.label, this.x+this.size/2, this.y+this.size/2);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function() {
    if(!this.empty()){
        return;
    }
    this.label = SYMBOLS[playerTurn];
    playerTurn++;
    if(playerTurn >= SYMBOLS.length){
        playerTurn = 0;
    }
    Moves++;
};

Tile.prototype.handleMouseClick = function(x, y) {
    if(x >= this.x && x <= this.x + this.size && y >= this.y && y <= this.y + this.size ){
        this.onClick();
    }
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

mouseClicked = function() {
    for(var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
};

draw = function() {
    if(Scene === 0){
       stbtn.handleMouseClick();
       splashhscreen(); 
    }
    if(Scene === 1){
    if(stillPlaying){
    background(143, 143, 143);
    drawTiles();
    if(checkWin()){
        fill(255, 0, 0);
        stillPlaying = false;
        SYMBOLS = ["O", "X"];
        text(SYMBOLS[playerTurn] + " Wins!", 200, 200); 
     
  }  }
    if(Moves === 9){
        fill(255, 0, 0);
        textSize(81);
        text("Tie Game!", 200, 200);
    }
    }
};
