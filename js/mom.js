var momObj=function(){
	this.x;
	this.y;
	this.angle;

    this.bigEye =[];
    this.EyeTime;
    this.EyeCount;
    this.EyeInterval;

    this.bigTail =[];
    this.TailTime;
    this.TailCount;

    this.bigBodyOrange=[];
    this.bigBodyBlue=[];
    this.BodyCount;
}

momObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
	for (i=0;i<2;i++){
		this.bigEye[i]=new Image();
		this.bigEye[i].src='./src/bigEye'+i+'.png';
	}
	this.EyeTime=0;
	this.EyeCount=0;
    this.EyeInterval=1;

	for (i=0;i<8;i++){
		this.bigTail[i]=new Image();
		this.bigTail[i].src='./src/bigTail'+i+'.png';
	}
	this.TailTime=0;
	this.TailCount=0;
	 
	 for (i=0;i<8;i++){
	 	this.bigBodyOrange[i]=new Image();
	 	this.bigBodyOrange[i].src='./src/bigSwim'+i+'.png';
	 	this.bigBodyBlue[i]=new Image();
	 	this.bigBodyBlue[i].src='./src/bigSwimBlue'+i+'.png';
	 }
	 this.BodyCount=0;
}

momObj.prototype.draw=function(){

//lerp distance
	this.x= lerpDistance(mx,this.x,0.98);//此函数封装在commonFunction里  实现跟随
	this.y=  lerpDistance(my,this.y,0.98);

  //delta angle
  //Math.anan2(y,x);
var deltaY= my-this.y;
var deltaX= mx- this.x;
var beta= Math.atan2(deltaY,deltaX)+Math.PI;//算出角度  使大鱼趋向鼠标角度
//lerp angle
this.angle= lerpAngle(beta,this.angle,0.6);//commonFunction

//eye
this.EyeTime+=daltaTime;
if (this.EyeTime>this.EyeInterval){
     this.EyeCount=(this.EyeCount+1)%2;
     this.EyeTime%=this.EyeInterval;
     if (this.EyeCount==0){
     	this.EyeInterval=Math.random()*1500+2000;
     }
     else
     {
     	this.EyeInterval=200;
     }
}
var EyeCount=this.EyeCount;

//tail
this.TailTime+=daltaTime;
if(this.TailTime>100){
	this.TailCount=(this.TailCount+1)%8;
	this.TailTime%=100;
}
var TailCount=this.TailCount;




     ctx1.save();
     ctx1.translate(this.x,this.y);
     ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigTail[TailCount],-this.bigTail[TailCount].width*0.5+30,-this.bigTail[TailCount].height*0.5);
    //body
var BodyCount=this.BodyCount;
if (data.double==1){
	    ctx1.drawImage(this.bigBodyOrange[BodyCount],-this.bigBodyOrange[BodyCount].width*0.5,-this.bigBodyOrange[BodyCount].height*0.5);
}
else
{
	 ctx1.drawImage(this.bigBodyBlue[BodyCount],-this.bigBodyBlue[BodyCount].width*0.5,-this.bigBodyBlue[BodyCount].height*0.5);
}
    ctx1.drawImage(this.bigEye[EyeCount],-this.bigEye[EyeCount].width*0.5,-this.bigEye[EyeCount].height*0.5);
    ctx1.restore();
}