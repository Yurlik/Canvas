/**/

var canvas;
var context;



//function Point(x, y, dx, dy, radius) {
//    this.x = x;
//    this.y = y;
//    this.dx = dx;
//    this.dy = dy;
//    this.radius = radius;
//    this.strokeColor = "black";
//    this.fillColor = "red";
//}

var Point = {
	constructor: function(){
		this.x = Math.floor(Math.random() * Math.floor(canvas.width));
		this.y = Math.floor(Math.random() * Math.floor(canvas.height));
		this.dx = (Math.random() * 2) - 1;
		this.dy = (Math.random() * 2) - 1;
		
		
		this.dotRadius = Math.floor(Math.random() * Math.floor(3))+1;

		return this;
		//console.log(points);
	}
}



// array with all points
var points = [];

function drawFrame() {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "rgba(0,0,0,1)";
	//context.fillStyle = "grey";
	context.fillRect(0, 0, canvas.width, canvas.height);
    //  beginPath() 
    context.beginPath();

    // draw all balls from array balls[]
    for(var j=0; j<points.length; j++) {
        
		// current ball
        var point = points[j];
		
//		dot.x = dot.x*dot.dx;
//		dot.y = dot.y*dot.dy;

		point.x += point.dx;
		point.y += point.dy;
		
        // if ball touch left or right
        if ((point.x > canvas.width) || (point.x < 0)) {
			//console.log('left_right');
            point.dx = -point.dx;
        }

        // if ball touch top or bottom
        if ((point.y > canvas.height) || (point.y < 0)) { 
			//console.log('top_bottom');
            point.dy = -point.dy; 
        }
		

		
		
		
		context.fillStyle = "rgba(130,10,185,1)";
		context.fillRect(point.x, point.y, point.radius, point.radius);
		
		//перебрать весь массив точек
		//посчитать расстояния между всеми
		//если расстояние меньше определённого - соединить прямой
		
		for(var k=0; k<points.length; k++){
			var poi = points[k];
			
			var leng = Math.sqrt(Math.pow((point.x - poi.x), 2) + Math.pow((point.y - poi.y), 2));

			if(leng < 20){
				
				context.beginPath();
				context.moveTo(point.x+point.radius/2, point.y+point.radius/2);
				context.lineTo(poi.x+point.radius/2, poi.y+point.radius/2);
				context.lineWidth = 1;
                context.strokeStyle = "rgba(130,10,185,0.8)";
				context.stroke();
								
			}else
			if(leng < 40){
				
				context.beginPath();
				context.moveTo(point.x+point.radius/2, point.y+point.radius/2);
				context.lineTo(poi.x+point.radius/2, poi.y+point.radius/2);
				context.lineWidth = 1;
                context.strokeStyle = "rgba(130,10,185,0.6)";
				context.stroke();
								
			}else
			if(leng < 60){
				
				context.beginPath();
				context.moveTo(point.x+1, point.y+1);
				context.lineTo(poi.x+point.radius/2, poi.y+point.radius/2);
				context.lineWidth = 1;
                context.strokeStyle = "rgba(130,10,185,0.4)";
				context.stroke();
								
			}else
			if(leng < 80){
				
				context.beginPath();
				context.moveTo(point.x+point.radius/2, point.y+point.radius/2);
				context.lineTo(poi.x+point.radius/2, poi.y+point.radius/2);
				context.lineWidth = 1;
                context.strokeStyle = "rgba(130,10,185,0.2)";
				context.stroke();
								
			}
		}
		

    }

    setTimeout("drawFrame()", 20);
}


function clearPoints() {
	points = [];
}

function addPoints(){
	var z = 0;
	var quant = document.getElementById("dotsQuantitys").value;
	
	//console.log(document.getElementById("dotsQuantitys"));
	
	while(z<quant){
		addPoint();
		z++;
	}
		
	
}

function addPoint() {
//	console.log('Points');
//	//Math.floor(Math.random() * Math.floor(max))
//	var newx = Math.floor(Math.random() * Math.floor(canvas.width));
//	var newy = Math.floor(Math.random() * Math.floor(canvas.height));
//	var ndx = (Math.random() * 2) - 1;
//	var ndy = (Math.random() * 2) - 1;
//	var dotRadius = Math.floor(Math.random() * Math.floor(3))+1;
//		
//	var point = new Point(newx, newy, ndx, ndy, dotRadius, 2, Date.now());
//	points.push(point);
//	console.log(points);
	
	var new_point = Object.create(Point).constructor();
	console.log(new_point);
	points.push(new_point);
	console.log(points);
	
}






















/*---------------------------------------------------*/

/*   drawingCanvasNew  */
/* canvas with dx dy */



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

// array with all dots
var dots = [];


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


   




