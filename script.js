/*Current Time BOX*/

window.onload = currentTime();
    
function currentTime(){    
    var date = new Date(); 
    var day = date.getDay(); 
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var hours = date.getHours();
        if(hours<10){
        hours='0'+hours;
        }
    var minutes = date.getMinutes(); 
        if(minutes<10){
        minutes='0'+minutes;
        }
    var seconds =  date.getSeconds(); 
        if(seconds<10){
        seconds= '0'+seconds;
        }

document.getElementById('currentTime').innerHTML = 
    ('Today is: <b>' + days[day] +'</b>.<br/>Current time is: ' + hours + ':' + minutes + ':' + seconds);
    
setInterval('currentTime()', 1000);
};


/*Reverse a number BOX*/

var content = document.querySelector("#contentToReverse");
var btnRev = document.querySelector(".reverse-btn");

content.addEventListener("input", reverse());

btnRev.addEventListener("click", reverse);

function reverse(){
    document.getElementById('contentToReverse').value =
    document.getElementById('contentToReverse').value.split("").reverse().join("");
}

/*other methods*/
function reverse2(input){
    var result = [];
    for(var i=0; i<input.length; i++){
        result.push(input[(input.length-1)-i]);  
    } 
    return result;
}

function reverse3(input) {
    for (var i = 0; i < (input.length/2); i++) {
        var temp = input[i];
        input[i]=input[input.length-i-1];
        input[input.length-i-1] = temp;
    }
    return input;
}



