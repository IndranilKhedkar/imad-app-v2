console.log('Loaded!');

var main_text= document.getElementById('main-text');
main_text = "Hello! Welcome to IMAD";

var margin=0;
var img=document.getElementById('img');
function moveRight(){
    margin=margin+5;
    img.style.margin= marign + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};

