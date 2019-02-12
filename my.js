
//var example = document.getElementById("c1");
//var ctx = example.getContext('2d');
//example.width  = 640;
//example.height = 480;
//ctx.strokeRect(15, 15, 266, 266);
//ctx.strokeRect(18, 18, 260, 260);
//ctx.fillRect(20, 20, 256, 256);
//var i, j;
//for (i = 0; i < 8; i += 2){
//	for (j = 0; j < 8; j += 2) {
//		ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
//		ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
//	}
//}



var c = document.getElementById("myCanvas");
var ctxv = c.getContext("2d");
var x = 50;
var y = 50;
var stepx = 1, stepy = 1;
var stepplus = 1;
var stepminus = -1;

var flag = false;

var anglex = Math.random();
console.log(anglex);

var angley = Math.random();
console.log(angley);
	
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



function draw(){
	
	if(flag == false){
		x = getRandomInt(390);
		y = getRandomInt(390);
	}
		
	if(Math.round(x+10) == 400){
		stepx = stepminus;
	}
	if(Math.round(x) == 0){
		stepx = stepplus;
	}
	if(Math.round(y+10) == 400){
		stepy = stepminus;
	}
	if(Math.round(y) == 0){
		stepy = stepplus;
	}
    ctxv.clearRect(0,0, 400, 400);
    ctxv.fillStyle = "red";
    ctxv.fillRect(x,y,10,10);
	
    x+=stepx*anglex;
	
	y+=stepy*angley;
	
	flag = true;
	
    window.requestAnimationFrame(draw);
}

draw();



