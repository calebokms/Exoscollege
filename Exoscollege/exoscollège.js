var i = 0;
var images = ['2.jpg','3.jpg','4.jpg','maths.jpg']
              
var time = 5000;

function changeImg(){

document.slide.src = images[i];

if (i < images.length - 1) {
i++;
} else {
i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;
