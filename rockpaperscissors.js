var choice = round(random(0.5,3.4)); //randomizer for the computer choice


var playerpick = 0; //determines if the player picked rock paper or scissors


var playerscore = 0; //keeps the score of the player


var computerscore = 0; //keeps the score of the computer




var currentScene = 1; //used to switch the game scenes


//function for the rock clipart that is displayed on the splash and game screen
var drawRock = function(rx, ry, h){
    
fill(194, 177, 177);
//strokeWeight(5*h/100);
ellipse(rx+0*h/100,ry+0*h/100,150*h/100,90*h/100);
};


//function for the paper clipart that is displayed on the splash and game screen
var drawPaper = function(px,py,h) {


fill(222, 209, 209);
rect(px+0*h/100,py+0*h/100,125*h/100,175*h/100);


fill(0, 0, 0);
line(px+5*h/100,py+15*h/100,px+45*h/100,py+15*h/100);
line(px+5*h/100,py+35*h/100,px+120*h/100,py+35*h/100);
line(px+5*h/100,py+55*h/100,px+120*h/100,py+55*h/100);
line(px+5*h/100,py+75*h/100,px+120*h/100,py+75*h/100);
line(px+5*h/100,py+95*h/100,px+120*h/100,py+95*h/100);
line(px+5*h/100,py+115*h/100,px+120*h/100,py+115*h/100);
line(px+5*h/100,py+135*h/100,px+120*h/100,py+135*h/100);
line(px+5*h/100,py+155*h/100,px+120*h/100,py+155*h/100);


};


//function for the scissors clipart that is displayed on the splash and game screen
var drawScissors = function(sx, sy, h) {
    
fill(0, 0, 0);
ellipse(sx+50*h/100,sy+0*h/100,55*h/100,55*h/100);
ellipse(sx+110*h/100,sy+0*h/100,55*h/100,55*h/100);
ellipse(sx+50*h/100,sy+0*h/100,35*h/100,35*h/100);
ellipse(sx+110*h/100,sy+0*h/100,35*h/100,35*h/100);
rect(sx+67*h/100,sy+0*h/100,10*h/100,61*h/100);
rect(sx+82*h/100,sy+0*h/100,10*h/100,61*h/100);
line(sx+67*h/100,sy+170*h/100,sx+67*h/100,sy+12*h/100);
line(sx+92*h/100,sy+170*h/100,sx+92*h/100,sy+22*h/100);
ellipse(sx+80*h/100,sy+80*h/100,10*h/100,10*h/100);
fill(255, 255, 255);
arc(sx+80*h/100, sy+170*h/100, 25*h/100, 151*h/100, 1, 180);
fill(255, 255, 255);
ellipse(sx+50*h/100,sy+0*h/100,25*h/100,25*h/100);
ellipse(sx+110*h/100,sy+0*h/100,25*h/100,25*h/100);




};


//khan button object type
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 130;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};


Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 65);
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


//first button which is displayed on the splash screen that will bring you to the directions screen when pressed by changing the scene
var btn1 = new Button({
    x: 267,
    y: 335,
    label: "Directions!",
    onClick: function() {
       currentScene = 2;
    }
});


//second button displayed on the splash screen that is used to go directly to the game screen if you do not want to go through the directions screen
var btn2 = new Button({
    x: 135,
    y: 335,
    label: "Lets Play!",
    onClick: function() {
       currentScene = 3;
    }
});


//this button has the same function as button 2 but is simply displayed on the directions scren
var btn3 = new Button({
    x: 135,
    y: 335,
    label: "Lets play!",
    onClick: function() {
       currentScene = 3;
    }
});
//button for the rock selection on the gamescreen.
var rckbtn = new Button({
    x: 5,
    y: 73,
    label: "Rock",
    onClick: function(){ 


            playerpick = 1; //rock
                if (choice === 1) //meaning player chose rock and computer chose rock
                    {
                fill(0, 0, 0);
                //text("Player chose rock and computer chose rock, it's a draw!", 50,250);
                
                
                    }  
                if (choice === 2)//meaning player chose rock and computer chose paper
                    {
                fill(0, 0, 0);
                //text("Player chose rock and computer chose paper, computer wins", 50,250);
                computerscore++;
                
                
                        }
                if (choice === 3)//meaninf player chose rock and computer chose scissors
                    {
                fill(0, 0, 0);
                //text("Player chose rock and computer chose scissors, player wins", 50, 250);
                playerscore++;
        }
playerpick = 0; //resets the player pick and allows another entry
choice = round(random(0.5,3.4)); //re-randomizes the choice of the computer
    }
});


var pprbtn = new Button({
    x: 5,
    y: 202,
    label: "Paper",
    onClick: function(){ 


            playerpick = 2; //paper
                if (choice === 1)//meaning player chose paper and computer chose rock
{               
                fill(0, 0, 0);
                //text("Player chose paper and computer chose rock, player wins!", 50,250);
                playerscore++;
                
                    }  
                if (choice === 2)//meaning player chose paper and computer chose paper
                    {
                fill(0, 0, 0); 
                //text("Player chose paper and computer chose paper, it's a draw!", 50,250);
                
                
                
                        }
                if (choice === 3)//meaning player chose paper and computer chose scissors
                    {
                fill(0, 0, 0);
                //text("Player chose paper and computer chose scissors, computer wins", 50, 250);
                computerscore++;
        }
playerpick = 0;//resets the player pick and allows another entry
choice = round(random(0.5,3.4));//re-randomizes the choice of the computer
    }
});


var scsbtn = new Button({
    x: 5,
    y: 312,
    label: "Scissors",
    onClick: function(){ 


            playerpick = 3; //scissors
                if (choice === 1)//meaning scissors chose rock and computer chose rock
                    {
                fill(0, 0, 0);
               // text("Player chose scissors and computer chose rock, computer wins", 50,250);
                computerscore++;
                
                
                    }  
                if (choice === 2)//meaning player chose scissors and computer chose paper
                    {
                fill(0, 0, 0);
                //text("Player chose scissors and computer chose paper, player wins", 50,250);
                playerscore++;
                
                
                        }
                if (choice === 3)//meaning player chose scissors and computer chose scissors
                    {
                fill(0, 0, 0);
                //text("Player chose scissots and computer chose scissors, its a draw", 50, 250);
                
        }
playerpick = 0;//resets the player pick and allows another entry
choice = round(random(0.5,3.4));//re-randomizes the choice of the computer
    }   
});




//this function simply indicates if the buttons were pressed at all
mouseClicked = function() {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    rckbtn.handleMouseClick();
    pprbtn.handleMouseClick();
    scsbtn.handleMouseClick();
    
};

//introduction or "splash" screen
var splash = function(){
  background(101, 178, 214);
  fill(255, 255, 255);
  textSize(40);
  text("Rock, Paper, Scissors!", -1, 50);
  textSize(20);
  text("Remember: Rock > Scissors", 95,100);
  text("Remember: Scissors > Paper", 95,150);
  text("Remember: Paper > Rock", 95,200); 
  text("Hit the button to start!", 100, 300);
  btn1.draw();
  btn3.draw();
  drawRock(62,264,30);
  drawPaper(173,233,30);
  drawScissors(290,237,21);
};


//screen for the directions
var directions = function(){
background(101, 178, 214);
textSize(55);
text("Directions", 83,100);
textSize(17);
text("This is a spin on the traditional rock paper scissors!", 7,165);
text(" This will be a logic game.",2,189);
text("Pick one of the three options and depending",8 , 209);
text("on the score decide which the computer chose!",8 , 230);
btn2.draw();
};


//function to draw where the game is actually played
var gameScreen = function(){
    background(101, 178, 214);
    drawRock(46, 41, 54);
    drawPaper(16, 126, 40);
    drawScissors(23, 263, 20);
    rckbtn.draw();
    pprbtn.draw();
    scsbtn.draw();
    fill(0, 0, 0);
    text("playerscore: " +playerscore, 275,1);
    text("computerscore: " +computerscore, 248,26);
};




//draw function for the scene changes
var draw = function() {
    if(currentScene === 1){
        splash();
    }
    if(currentScene === 2){
        directions();
    }
    if (currentScene === 3){
        gameScreen();
    }
};
