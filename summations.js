var summation = function(){
    var currentSum = 0;
    
    for(var j = 1; j <= 20; j++){
        
        for(var i = 1; i <= j; i++){
        currentSum = currentSum + i%1 + 1;
        
    }
    fill(5, 5, 5);
    text((" The summation of " + j + "   =   " + currentSum), 10, 18*i);
}

};

summation();
