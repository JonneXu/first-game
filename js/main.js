var can1;
var can2;
var can3;

var ctx1;
var ctx2;
var ctx3;

var canWidth;
var canHeight;

var lastTime;
var daltaTime;

var bgPic=new Image();
var ane;
var fruit;
var mom;
var baby;

var mx;
var my;


var data;

var wave;

document.body.onload=game;

function game () {
	init();
	lastTime= Date.now();
	daltaTime=0;
	gameloop();

}

function init() {
	//获取canvas context
 can1= document.getElementById('canvas1');//fishs,dust.UI,circle
 ctx1=can1.getContext('2d');
 can2= document.getElementById('canvas2');//background,ane.fruits
 ctx2=can2.getContext('2d');
  can3= document.getElementById('canvas3');//background,ane.fruits
 ctx3=can3.getContext('2d');

can1.addEventListener('mousemove',onMouseMove,false);//onMouseMove获取鼠标位置

 bgPic.src ="./src/background.jpg";
 canWidth =can2.width;
 canHeight=can2.height;

 ane= new aneObj();
 ane.init();

 fruit=new fruitObj();
  fruit.init();

  mom= new momObj();
  mom.init();

  baby= new babyObj();
  baby.init();

  data=new dataObj();
  data.init();

  wave=new waveObj();
  wave.init();

  mx= canWidth*0.5;
  my=canHeight*0.5;

}

function gameloop(){
	window.requestAnimFrame(gameloop);//setInterval，setTinmeout（）没有requestAnimFrame智能 封装于commonFunction
	var now= Date.now();
	daltaTime=now-lastTime;
	lastTime=now;
	if (daltaTime>40)daltaTime=40;
	drawBackground();
	ane.draw();

	fruitMonitor();
	fruit.draw();

    ctx1.clearRect(0,0,canWidth,canHeight);//清空前次绘图
    mom.draw();

    baby.draw(); 

    momFruitCollision();

    momBabyCollision();

   data.draw();

   wave.draw();
}

function onMouseMove(e){
	  if (!data.gameover){
	  	if (e.offSetX ||e.layerX){
	  	mx=e.offSetX ==undefined ? e.layerX:e.offSetX;
	  	my=e.offSetY ==undefined ? e.layerY:e.offSetY;
	  }
	  }
}