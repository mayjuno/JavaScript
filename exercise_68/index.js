var width = 100;
var addition =2;
var intervalID = 0;
function increase(){
    clearInterval(intervalID);
    intervalID= setInterval(zoomin,10);
};
function decrease(){
    clearInterval(intervalID);
    intervalID= setInterval(zoomout,10);
};
function zoomin(){
    if(width<200){
        width+=addition;
        document.getElementById("img").style.width = width;
    }else{
        clearInterval(intervalID);
    }
    
}
function zoomout(){
    if(width>100){
        width-=addition;
        document.getElementById("img").style.width = width;
    }else{
        clearInterval(intervalID);
    }
}