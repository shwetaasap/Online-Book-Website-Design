var form = document.getElementById('clock');
//submit function listener
var cloc=setInterval(mytimer,1000);
//document.getElementById("mytime").innerHTML=cloc;//
function mytimer(){
    var d=new Date();
    document.getElementById("mytime1").value=d.toLocaleTimeString();
    //d.toLocaleTimeString(); 
}


$(function() {
    $(".nav-link").hover(function(){
        $(this).css('background-color',' #476b6b');
    }, function(){
        $(this).css('background-color','#99e6e6');
    });
});