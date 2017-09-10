function currentTime(){
var date = new Date(); 
var day = date.getDay(); 
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',                   'Friday', 'Saturday'];


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

document.getElementById('currentTime').innerHTML = ('Today is: ' + days[day] +'.<br/>Current time is: ' + hours + ':' + minutes + ':' + seconds);
    
    setTimeout('currentTime()', 1000);
}