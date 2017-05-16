var babyObj=function(){
	this.x;
	this.y;
	this.angle;
	
    this.babyTail=[];
	this.TailTime;
	this.Tailcount;

    this.babyEye=[];
    this.EyeTime;
    this.EyeCount;
    this.EyeInterval;
    
    this.babyBody=[];
    this.BodyCount;
    this.BodyTime;
}//Obj拥有的属性要先定义 不然不能用


babyObj.prototype.init = function() {
	this.x= canWidth *0.5-50;
	this.y= canHeight*0.5+50 ;
	this.angle=0;
	this.Tailcount=0;
	this.TailTime=0;
    this.EyeTime=0;
    this.EyeCount=0;
    this.EyeInterval=1;
    this.BodyCount=0;
    this.BodyTime=0;
	
	   for (var i=0;i<8;i++){
    	this.babyTail[i]=new Image();
		this.babyTail[i].src='./src/babyTail'+i+'.png';
	}
	  for (var i=0;i<2;i++){
	  	this.babyEye[i]=new Image();
	  	this.babyEye[i].src='./src/babyEye'+i+'.png';
	  }
    for (var i=0 ; i<20;i++){
    	this.babyBody[i]=new Image();
    	this.babyBody[i].src='./src/babyFade'+i+'.png';
    }
};

babyObj.prototype.draw=function(){

//lerp distance
	this.x= lerpDistance(mom.x,this.x,0.98);//此函数封装在commonFunction里  实现跟随
	this.y=  lerpDistance(mom.y,this.y,0.98);
  //delta angle
  //Math.anan2(y,x);
var deltaY=mom.y-this.y;
var deltaX= mom.x- this.x;
var beta= Math.atan2(deltaY,deltaX)+Math.PI;//算出角度  使大鱼趋向鼠标角度
//lerp angle
this.angle= lerpAngle(beta,this.angle,0.6);//commonFunction

//Tail
this.TailTime=this.TailTime+ daltaTime;
if (this.TailTime>100){

this.Tailcount=(this.Tailcount+1) % 8;
this.TailTime=(this.TailTime)% 100;
}
var Tailcount=this.Tailcount;
//wink
this.EyeTime=this.EyeTime+ daltaTime;
if (this.EyeTime>this.EyeInterval){
  this.EyeCount=(this.EyeCount+1) % 2;
   this.EyeTime=this.EyeTime % this.EyeInterval;
   if (this.EyeCount==0){
   	this.EyeInterval=Math.random()*1500+2000;
   }
  else{
   	this.EyeInterval=200;
   }
}
var EyeCount=this.EyeCount;

//body
this.BodyTime+=daltaTime;
if(this.BodyTime>300){
       this.BodyTime%=300;
       this.BodyCount+=1;
       if (this.BodyCount>19){
       	this.BodyCount=19;
       	//game over
       	data.gameover=true;
       }
}
var BodyCount=this.BodyCount;


ctx1.save();
     ctx1.translate(this.x,this.y);
     ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail[Tailcount],-this.babyTail[Tailcount].width*0.5+23,-this.babyTail[Tailcount].height*0.5); 
    ctx1.drawImage(this.babyBody[BodyCount],-this.babyBody[BodyCount].width*0.5-2,-this.babyBody[BodyCount].height*0.5);
    ctx1.drawImage(this.babyEye[EyeCount],-this.babyEye[EyeCount].width*0.5,-this.babyEye[EyeCount].height*0.5);
    ctx1.restore();
	    }