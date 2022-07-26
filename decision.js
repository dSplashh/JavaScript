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
//darrylsay
stroke(5, 5, 5);
line(bodyX +bitheight/250*55, bodyY +bitheight/250*72, bodyX +bitheight/250*117, bodyY +bitheight/250*13);
fill(255, 255, 255);
ellipse(bodyX +bitheight/250*118, bodyY -bitheight/250*1, bitheight/250*114, bitheight/250*64);
fill(255, 0, 0);
text("Darryl Says:", bodyX +bitheight/250*83, bodyY -bitheight/250*10);
text("You're Negative!", bodyX +bitheight/250*74, bodyY +bitheight/250*10);

};

var drawBitmoji = function(bodyX, bodyY, bitheight){
   onehalf(bodyX, bodyY, bitheight);
   otherhalf(bodyX, bodyY, bitheight);
};



var oneh = function(bodyX, bodyY, bitheight){
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
var oh = function(bodyX, bodyY, bitheight){
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
//darrylsay
stroke(5, 5, 5);
line(bodyX +bitheight/250*55, bodyY +bitheight/250*72, bodyX +bitheight/250*117, bodyY +bitheight/250*13);
fill(255, 255, 255);
ellipse(bodyX +bitheight/250*118, bodyY -bitheight/250*1, bitheight/250*114, bitheight/250*64);
fill(255, 0, 0);
text("Darryl Says:", bodyX +bitheight/250*83, bodyY -bitheight/250*10);
text("You're Positive!", bodyX +bitheight/250*74, bodyY +bitheight/250*10);

};

var drawMo = function(bodyX, bodyY, bitheight){
   oneh(bodyX, bodyY, bitheight);
   oh(bodyX, bodyY, bitheight);
};






        fill(5, 5, 5);
        text("Do you have COVID? (click near your answers)", 15, 20);
        text("Click Here To Find Out!", 15, 50);
       var questionNumber = 0; 
      mouseClicked = function(){
        if(mouseX > 5 && mouseX < 140 && mouseY > 40 && mouseY < 100){ 
            questionNumber = 1;
        }
    else if(mouseX > 80 && mouseX < 120 && mouseY > 40 && mouseY < 100){
        questionNumber = 7;
    }
       if(questionNumber === 7){
           drawBitmoji(180, 250, 250);
       }
       if(questionNumber === 1){
        fill(5, 5, 5);
        text("Loss of taste or smell?", 15, 75);
        text("yes", 15, 105);
        text("no", 100, 105);
       }
      if(mouseX > 5 && mouseX < 50 && mouseY > 90 && mouseY < 115){
          questionNumber = 2;
      }
    else if(mouseX > 80 && mouseX < 120 && mouseY > 80 && mouseY < 125){
        questionNumber = 7;
    }
    if(questionNumber === 2){
        fill(5, 5, 5);
        text("Fever?", 15, 130);
        text("yes", 15, 160);
        text("no", 100, 160);
    }
    if(mouseX > 5 && mouseX < 50 && mouseY > 140 && mouseY < 180){
        questionNumber = 3;
    }
    else if(mouseX > 80 && mouseX < 120 && mouseY > 140 && mouseY < 180){
        questionNumber = 7;
    }
    if(questionNumber === 3){
        fill(5, 5, 5);
        text("Shortness of breath or difficulty breathing?", 15, 185);
        text("yes", 15, 215);
        text("no", 100, 215);
    }
    if(mouseX > 5 && mouseX < 50 && mouseY > 190 && mouseY < 250){
        questionNumber = 4;
    }
    else if(mouseX > 80 && mouseX < 120 && mouseY > 190 && mouseY < 240){
        questionNumber = 7;
    }
    
    if(questionNumber === 4){
        drawMo(105, 275, 250);
    }
};
