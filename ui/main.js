console.log('Loaded!');

var main_text= document.getElementById('main-text');
main_text = "Hello! Welcome to IMAD";

var marginLeft=0;
var img=document.getElementById('img');
function moveRight(){
    marginLeft=marginLeft+5;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};

