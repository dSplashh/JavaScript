var drawTop = function(bodyX, bodyY, BitHeight){

noStroke();
fill(122, 92, 66);

ellipse(bodyX -BitHeight/250*0, bodyY -BitHeight/250*0, BitHeight/250*66, BitHeight/250*100); //head


fill(204, 247, 255);
triangle(bodyX +(BitHeight/250*34), bodyY +(BitHeight/250*90), bodyX -(BitHeight/250*75), bodyY +(BitHeight/250*33), bodyX -(BitHeight/250*46), bodyY +(BitHeight/250*12)); //left chisel



triangle(bodyX +(BitHeight/250*105), bodyY +(BitHeight/250*4), bodyX +(BitHeight/250*70), bodyY -(BitHeight/250*20), bodyX -(BitHeight/250*50), bodyY +(BitHeight/250*120)); //right chisel


fill(122, 92, 66);
arc(bodyX -(BitHeight/250*35), bodyY +(BitHeight/250*4), BitHeight/250*11, BitHeight/250*24, 0, 319);//left ear


arc(bodyX +(BitHeight/250*34), bodyY +(BitHeight/250*5), BitHeight/250*11, BitHeight/250*24, 149, 491);//right ear


fill(212, 85, 212);
fill(21, 0, 255);
fill(255, 255, 255);
ellipse(bodyX -(BitHeight/250*11), bodyY -(BitHeight/250*4), BitHeight/250*20, BitHeight/250*7); //left eye


ellipse(bodyX +(BitHeight/250*14), bodyY -(BitHeight/250*4), BitHeight/250*20, BitHeight/250*7); //right eye


fill(71, 35, 2);
ellipse(bodyX -(BitHeight/250*11), bodyY -(BitHeight/250*4), BitHeight/250*10, BitHeight/250*6); //left eyeball


ellipse(bodyX +(BitHeight/250*14), bodyY -(BitHeight/250*4), BitHeight/250*10, BitHeight/250*6); //right eyeball


fill(5, 4, 4);
ellipse(bodyX -(BitHeight/250*11), bodyY -(BitHeight/250*10), BitHeight/250*20, BitHeight/250*1); //left eyebrow


ellipse(bodyX +(BitHeight/250*14), bodyY -(BitHeight/250*10), BitHeight/250*20, BitHeight/250*1);//right eyebrow 

fill(92, 41, 41);
bezier(bodyX +(BitHeight/250*2), bodyY -(BitHeight/250*2), bodyX +(BitHeight/250*21), bodyY +(BitHeight/250*22), bodyX -(BitHeight/250*8), bodyY +(BitHeight/250*20), bodyX +(BitHeight/250*7), bodyY +(BitHeight/250*12)); //nose


stroke(122, 92, 66);
ellipse(bodyX +(BitHeight/250*1), bodyY+(BitHeight/250*29), BitHeight/250*23, BitHeight/250*3);//top lip


fill(120, 63, 74);
arc(bodyX +(BitHeight/250*1), bodyY +(BitHeight/250*30), BitHeight/250*20, BitHeight/250*10, 0, 180);//bottom lip


noStroke();
fill(3, 0, 0);

arc(bodyX -(BitHeight/250*30), bodyY -(BitHeight/250*16), BitHeight/250*11, BitHeight/250*25, 111, 295);//hair



arc(bodyX +(BitHeight/250*29), bodyY -(BitHeight/250*16), BitHeight/250*11, BitHeight/250*25,-100, 84);//hair
};

var drawBottom = function(bodyX, bodyY, BitHeight){
   
fill(9, 0, 255);
arc(bodyX -BitHeight/250*0, bodyY -(BitHeight/250*24), BitHeight/250*60, BitHeight/250*50, 180, 360); //cap



ellipse(bodyX -BitHeight/250*0, bodyY -(BitHeight/250*50), BitHeight/250*100, BitHeight/250*5); //cap


fill(232, 239, 247);
arc(bodyX -(BitHeight/250*4), bodyY +(BitHeight/250*51), BitHeight/250*30, BitHeight/250*40, 117, 212);//shirt

arc(bodyX +(BitHeight/250*7), bodyY +(BitHeight/250*51), BitHeight/250*30, BitHeight/250*40, 326, 428);//shirt



fill(9, 0, 255);
arc(bodyX +(BitHeight/250*20), bodyY +(BitHeight/250*61), BitHeight/250*26, BitHeight/250*21, 270, 475);//gown

rect(bodyX +(BitHeight/250*10), bodyY +(BitHeight/250*66), BitHeight/250*44, BitHeight/250*39, BitHeight/250*50);//gown


arc(bodyX -(BitHeight/250*16), bodyY +(BitHeight/250*61), BitHeight/250*26, BitHeight/250*21, 429, 617);//gown


rect(bodyX -(BitHeight/250*51), bodyY +(BitHeight/250*66), BitHeight/250*44, BitHeight/250*39, BitHeight/250*50);//gown

fill(232, 239, 247);
arc(bodyX -(BitHeight/250*5), bodyY +(BitHeight/250*91), BitHeight/250*12, BitHeight/250*32, 232, 524);//shirt


arc(bodyX +(BitHeight/250*11), bodyY +(BitHeight/250*91), BitHeight/250*24, BitHeight/250*32, 419, 614);//shirt

fill(77, 56, 38);
ellipse(bodyX +(BitHeight/250*2), bodyY+(BitHeight/250*65), BitHeight/250*18, BitHeight/250*21);//neck

ellipse(bodyX -(BitHeight/250*4), bodyY +(BitHeight/250*65), BitHeight/250*10, BitHeight/250*30);//neck


ellipse(bodyX+(BitHeight/250*6), bodyY+(BitHeight/250*65), BitHeight/250*10, BitHeight/250*30);//neck


fill(250, 221, 5);
ellipse(bodyX +(BitHeight/250*38), bodyY-(BitHeight/250*20), BitHeight/250*1, BitHeight/250*59);


text("DAF", bodyX +(BitHeight/250*22), bodyY+(BitHeight/250*84), (BitHeight/250*30), BitHeight/250*40);
};
var drawBitmoji = function(bodyX, bodyY, BitHeight){
    drawTop(bodyX, bodyY, BitHeight);
    drawBottom(bodyX, bodyY, BitHeight);
};


var dropsNum = 200;
var xPositions = [];
var yPositions = [];
var dropsColor = [];
var dropSpeed  = [];

for(var j = 0; j < dropsNum; j++){
    xPositions.push(random(5, 385));
    yPositions.push(random(5, 385));
    dropsColor.push(color(random(0, 255), random(0, 255), random(0, 255)));
    dropSpeed.push(random(1, 4));
}

draw = function() {
    background(204, 247, 255);
    drawBitmoji(380, 200, 50);
    fill(0, 43, 255);
    rect(346, 184, 8, 46);
    stroke(0, 43, 255);
    line(346, 210, 380, 210);
    noStroke();
    
    for (var i = 0; i < xPositions.length; i++) {
        fill(dropsColor[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        xPositions[i] += dropSpeed[i];
    
        if(xPositions[i] > 400){
            xPositions[i] = 0;
        }
        if(xPositions[i] > 342 && yPositions[i] > 184 && yPositions[i] < 230){
            xPositions[i] = 0;
        }
        
    }
    
};
