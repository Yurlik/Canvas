
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


/**/

var canvas;
var context;

window.onload = function() {
	   // Определение контекста рисования
	   canvas = document.getElementById("drawingCanvas");
	   context = canvas.getContext("2d");
		 
	   // Обновляем холст через 0.02 секунды
	   setTimeout("drawFrame()", 20);
}


function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}

// array with all balls
var balls = [];


function addBall() {
    // Устанавливаем размер мячика
    var radius = parseFloat(document.getElementById("ballSize").value);

    // Создаем новый мячик
    var ball = new Ball(50,50,1,1,radius);

    // Сохраняем его в массиве
    balls.push(ball);
}


function clearBalls() {
  // Удаляем все мячики
  balls = [];
}


function drawFrame() {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    //  beginPath() 
    context.beginPath();

    // draw all balls from array balls[]
    for(var i=0; i<balls.length; i++) {
        
		// current ball
        var ball = balls[i];
		
//		ball.dx = 1;
//		ball.dy = 1;
		
        ball.x += ball.dx;
        ball.y += ball.dy;
		
		
        // if ball touch left or right
        if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
			console.log('left_right');
            ball.dx = -ball.dx;
        }

        // if ball touch top or bottom
        if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) { 
			console.log('top_bottom');
            ball.dy = -ball.dy; 
        }

        // connected lines
        if (!document.getElementById("connectedBalls").checked) {
            context.beginPath();
            context.fillStyle = ball.fillColor;
        }
        else {
            context.fillStyle = "white";
        }

        // draw ball
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
        context.lineWidth = 1;
        context.fill();
        context.stroke(); 
    }

    setTimeout("drawFrame()", 20);
}