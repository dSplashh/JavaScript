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

var Button = function(config) 
{
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 70;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.backgroundColor = config.backgroundColor || color(35, 71, 161);
    this.onClick = config.onClick || function() {};
};
// draw prototype
Button.prototype.draw = function() 
{
    fill(this.backgroundColor);
    rect(this.x+5, this.y, this.width+30, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};
// checks if the mouse is inside the buttons 
Button.prototype.isMouseInside = function() 
{
    //this is what returns if the condition is true
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};
// clicking mouse on button
Button.prototype.handleMouseClick = function(){
    if (this.isMouseInside()) {
        this.onClick();
    }
};
var Tile = function(x, y, face) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.face = face;
    this.isFaceUp = false;
    this.isMatch = false;
    this.color = color(214, 247, 202);
};

Tile.prototype.draw = function() {
    fill(this.color);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    if (this.isFaceUp) {
        image(this.face, this.x, this.y, this.size, this.size);
    } else {
        image(getImage("avatars/leaf-blue"), this.x, this.y, this.size, this.size);
    }
};

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.size  &&
        y >= this.y && y <= this.y + this.size;
};

// Global config
var NUM_COLS = 6;
var NUM_ROWS = 4;

// Declare an array of all possible faces
var faces = [
    getImage("avatars/orange-juice-squid"),
    getImage("avatars/piceratops-sapling"),
    getImage("avatars/primosaur-seed"),
    getImage("avatars/spunky-sam-orange"),
    getImage("avatars/starky-tree"),
    getImage("cute/CharacterBoy"),
];

// Make an array which has 2 of each, then randomize it
var possibleFaces = faces.slice(0);
var selected = [];
for (var i = 0; i < (NUM_COLS * NUM_ROWS) / 4; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = floor(random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    // Push twice onto array
    selected.push(face);
    selected.push(face);
    selected.push(face);
    selected.push(face);
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now shuffle the elements of that array
var shuffleArray = function(array) {
    var counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        var ind = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[ind];
        array[ind] = temp;
    }
};
shuffleArray(selected);

// Create the tiles
var tiles = [];
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        var tileX = i * 54 + 10;
        var tileY = j * 54 + 40;
        var tileFace = selected.pop();
        tiles.push(new Tile(tileX, tileY, tileFace));
    }
}

background(255, 255, 255);
var numTries;
var numMatches = 0;
var flippedTiles = [];
var delayStartFC = null;
var timestamp;
var scene = 1;
var strbtn = new Button({
    x: 150,
    y: 250,
    width: 74,
    height: 30,
    label:"Start Game",
    onClick: function() {
        scene = 2;
        timestamp = millis();
    }
});

mouseClicked = function() {
    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        if (tile.isUnderMouse(mouseX, mouseY)) {
            if (flippedTiles.length < 4 && !tile.isFaceUp) {
                tile.isFaceUp = true;
                flippedTiles.push(tile);
                    if (flippedTiles[0].face === flippedTiles[1].face === flippedTiles[2].face === flippedTiles[3].face){
                        flippedTiles[0].isMatch = true;
                        flippedTiles[1].isMatch = true;
                        flippedTiles[2].isMatch = true;
                        flippedTiles[3].isMatch = true;
                        tile.isFaceup = true;
                        flippedTiles.length = 0;
                        numMatches++;
                    }
                    delayStartFC = frameCount;
                }
            } 
            loop();
        }

        
       strbtn.handleMouseClick();


};
var splashh = function(){
    background(250, 254, 255);
    textSize(30);
    fill(0, 34, 255);
    text("MEMORY GAME", 91, 44);
    textSize(20);
    text("Darryl A. Fleurantin", 125, 375);
    text("Match each four to win it all!", 79, 115);
    drawBitmoji(182, 179, 100);
    strbtn.draw();
    
};

var game = function(){
    background(255, 255, 255);
    if (delayStartFC && (frameCount - delayStartFC) > 30) {
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            if (!tile.isMatch) {
                tile.isFaceUp = false;
            }
        }
        flippedTiles = [];
        delayStartFC = null;
        noLoop();
    }
    
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].draw();
        if(tiles[i].isUnderMouse(mouseX, mouseY)){
          tiles[i].color = color(0, 255, 238);
    }
       else{
           tiles[i].color = color(214, 247, 202);
       }
    }
    
    if (numMatches === tiles.length/4) {
        fill(0, 0, 0);
        textSize(20);
        text("You found them all in " + numTries + " tries!", 20, 375);
    }
    fill(0, 255, 255);
   
    text("Timer " + " : " + round((millis() - timestamp)/1000), 10, 10);
};
draw = function() {
    if(scene === 1){
      splashh();   
    }
    else if(scene === 2){
      game();
    }
};
noLoop();
