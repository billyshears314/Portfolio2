$(function(){

	var redValue = 0;
	var greenValue = 0;
	var blueValue = 0;

	window.addEventListener("keydown", checkKeyPressed, false); 
 
function checkKeyPressed(e) {
    //A
    if (e.keyCode == "65") {
			if(redValue<255){    
    			redValue++;
    		}
    
    		$('body').css('background-color', 'rgb(200,100,0)');
        $('body').css('background-color', "rgb("+redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")");
    }
    //D
        if (e.keyCode == "68") {
			if(redValue>0){        	
        		redValue--;
			}        	
        	
        $('body').css('background-color', "rgb("+redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")");
    }
    //W
        if (e.keyCode == "87") {
			if(greenValue<255){        	
        		greenValue++;
         }
        $('body').css('background-color', "rgb("+redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")");
    }
    //S
        if (e.keyCode == "83") {
			if(greenValue>0){        	
        		greenValue--;
        	}
        $('body').css('background-color', "rgb("+redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")");
    }
    //K
        if (e.keyCode == "75") {
			if(blueValue<255){        	
        		blueValue++;
        	}
        $('body').css('background-color', "rgb("+redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")");
    }
    //L
        if (e.keyCode == "76") {
        	if(blueValue>0){
        		blueValue--;
        	}
        $('body').css('background-color', "rgb("+redValue.toString() + "," + greenValue.toString() + "," + blueValue.toString() + ")");
    }

console.log("...");
console.log("Red Value: " + redValue);
console.log("Green Value: " + greenValue);
console.log("Blue Value: " + blueValue);
    
    
}


});
