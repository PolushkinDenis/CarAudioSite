function start(){
    hello();
}
window.onload = start;

function hello(){
   d = new Date(); hour = d.getHours();
    var helloText = "Здравствуйте!";
    if (hour>=5 && hour<12) helloText = "Доброе утро";
     else { if (hour>=12 && hour<18) helloText = "Добрый день";
      else { if (hour>=18 && hour<24) helloText = "Добрый вечер";
       else { if (hour>=0 && hour<5) helloText = "Доброй ночи";
     } 
    } 
}
var day=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");

var month=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");

//document.write(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()] + " " + d.getFullYear() + " г.");


var dayNow = day[d.getDay()];
var dateNow = d.getDate();
var monthNow = month[d.getMonth()];
var yearNow = d.getFullYear();

var totaStrint = helloText + "! Сегодня " +  dayNow + " " + dateNow + " " + monthNow + " " + yearNow + " г.";

var str = 23;

document.getElementById("hello").innerHTML = totaStrint;
}