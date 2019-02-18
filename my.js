
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


//
//var c = document.getElementById("myCanvas");
//var ctxv = c.getContext("2d");
//var x = 50;
//var y = 50;
//var stepx = 1, stepy = 1;
//var stepplus = 1;
//var stepminus = -1;
//
//var flag = false;
//
//var anglex = Math.random();
//console.log(anglex);
//
//var angley = Math.random();
//console.log(angley);
//	
//function getRandomInt(max) {
//  return Math.floor(Math.random() * Math.floor(max));
//}
//
//
//
//function draw(){
//	
//	if(flag == false){
//		x = getRandomInt(390);
//		y = getRandomInt(390);
//	}
//		
//	if(Math.round(x+10) == 400){
//		stepx = stepminus;
//	}
//	if(Math.round(x) == 0){
//		stepx = stepplus;
//	}
//	if(Math.round(y+10) == 400){
//		stepy = stepminus;
//	}
//	if(Math.round(y) == 0){
//		stepy = stepplus;
//	}
//    ctxv.clearRect(0,0, 400, 400);
//    ctxv.fillStyle = "red";
//    ctxv.fillRect(x,y,10,10);
//	
//    x+=stepx*anglex;
//	
//	y+=stepy*angley;
//	
//	flag = true;
//	
//    window.requestAnimationFrame(draw);
//}
//
//draw();


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

/*---------------------------------------------------*/

/*   drawingCanvasNew  */




window.onload = function() {
	   // Определение контекста рисования
	   canvasNew = document.getElementById("drawingCanvasNew");
	   contextNew = canvasNew.getContext("2d");
		 
	   // Обновляем холст через 0.02 секунды
	   setTimeout("drawCanvas()", 20);
	
	
	// Определение контекста рисования
	   canvas = document.getElementById("drawingCanvas");
	   context = canvas.getContext("2d");
		 
	   // Обновляем холст через 0.02 секунды
	   setTimeout("drawFrame()", 20);
}

function Dot(x, y, dx, dy, radius, speed, time) {
    this.x = x;//стартовые координаты
    this.y = y;//стартовые координаты
    this.dx = dx;//направление движения
    this.dy = dy;//направление движения
	this.radius = radius;
    this.speed = speed;//скорость
    this.time = time;//время
    //this.strokeColor = "black";//вынести из функции
    
}

// array with all balls
var dots = [];


//function addDot() {
//    
//    var dot = new Dot(0,0,1,1,2,Date.now());
//
//    // Сохраняем его в массиве
//    dots.push(dot);
//}

function drawCanvas() {
    // clear canvas
    contextNew.clearRect(0, 0, canvasNew.width, canvasNew.height);
	contextNew.fillStyle = "rgba(0,0,0,1)";
	//contextNew.fillStyle = "grey";
	contextNew.fillRect(0, 0, canvasNew.width, canvasNew.height);
    //  beginPath() 
    contextNew.beginPath();

    // draw all balls from array balls[]
    for(var j=0; j<dots.length; j++) {
        
		// current ball
        var dot = dots[j];
		
//		dot.x = dot.x*dot.dx;
//		dot.y = dot.y*dot.dy;

		dot.x += dot.dx;
		dot.y += dot.dy;
		
        // if ball touch left or right
        if ((dot.x > canvasNew.width) || (dot.x < 0)) {
			//console.log('left_right');
            dot.dx = -dot.dx;
        }

        // if ball touch top or bottom
        if ((dot.y > canvasNew.height) || (dot.y < 0)) { 
			//console.log('top_bottom');
            dot.dy = -dot.dy; 
        }
		

		
		
		
		contextNew.fillStyle = "rgba(100,150,185,1)";
		contextNew.fillRect(dot.x, dot.y, dot.radius, dot.radius);
		
		//перебрать весь массив точек
		//посчитать расстояния между всеми
		//если расстояние меньше определённого - соединить прямой
		
		for(var k=0; k<dots.length; k++){
			var point = dots[k];
			
			var leng = Math.sqrt(Math.pow((dot.x - point.x), 2) + Math.pow((dot.y - point.y), 2));

			if(leng < 20){
				
				contextNew.beginPath();
				contextNew.moveTo(dot.x+dot.radius/2, dot.y+dot.radius/2);
				contextNew.lineTo(point.x+dot.radius/2, point.y+dot.radius/2);
				contextNew.lineWidth = 1;
                contextNew.strokeStyle = "rgba(100,150,185,0,8)";
				contextNew.stroke();
								
			}else
			if(leng < 40){
				
				contextNew.beginPath();
				contextNew.moveTo(dot.x+dot.radius/2, dot.y+dot.radius/2);
				contextNew.lineTo(point.x+dot.radius/2, point.y+dot.radius/2);
				contextNew.lineWidth = 1;
                contextNew.strokeStyle = "rgba(100,150,185,0.6)";
				contextNew.stroke();
								
			}else
			if(leng < 60){
				
				contextNew.beginPath();
				contextNew.moveTo(dot.x+1, dot.y+1);
				contextNew.lineTo(point.x+1, point.y+1);
				contextNew.lineWidth = 1;
                contextNew.strokeStyle = "rgba(100,150,185,0.4)";
				contextNew.stroke();
								
			}else
			if(leng < 80){
				
				contextNew.beginPath();
				contextNew.moveTo(dot.x+dot.radius/2, dot.y+dot.radius/2);
				contextNew.lineTo(point.x+dot.radius/2, point.y+dot.radius/2);
				contextNew.lineWidth = 1;
                contextNew.strokeStyle = "rgba(100,150,185,0.2)";
				contextNew.stroke();
								
			}
		}
		


        // draw dot
				
//        contextNew.lineWidth = 1;
//        contextNew.fill();
//        contextNew.stroke(); 
    }

    setTimeout("drawCanvas()", 20);
}



function clearDots() {
	dots = [];
}

function addDots(){
	var i = 0;
	var quant = document.getElementById("dotsQuantity").value;
	
	//console.log(quant);
	
	while(i<quant){
		addDot();
		i++;
	}
		
	
}

function addDot() {
		
	//Math.floor(Math.random() * Math.floor(max))
	var newx = Math.floor(Math.random() * Math.floor(canvasNew.width));
	var newy = Math.floor(Math.random() * Math.floor(canvasNew.height));
	var ndx = (Math.random() * 2) - 1;
	var ndy = (Math.random() * 2) - 1;
	var dotRadius = Math.floor(Math.random() * Math.floor(3))+1;
		
	var dot = new Dot(newx, newy, ndx, ndy, dotRadius, 2, Date.now());
	dots.push(dot);
	//console.log(dots);
}


   




