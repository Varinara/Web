var i=0;
var image=document.getElementById("image");
var imgs=new Array('fish.jpg','fish2.jpg');
function imgsrc() {
	i++;
	i%=imgs.length;
	image.src = imgs[i];
}