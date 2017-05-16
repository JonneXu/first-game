var aneObj =function  () {
	this.rootx=[];  //声明数组
	this.headx=[];
   this.heady=[];
   this.alpha=0;
   this.amp=[];
   this.fruitborn=[];
}

aneObj.prototype.num = 50;
aneObj.prototype.init =function(){
   for (var i=0 ;i <this.num;i++){
   	this.rootx[i]=i*16+Math.random()*20;//[0:1)
      this.headx[i]=this.rootx[i];
      this.heady[i]=canHeight -250 +Math.random()*50;
      this.amp[i]=Math.random()*30+40;
      this.fruitborn[i]=this.headx[i];
   }
}

aneObj.prototype.draw=function(){

  this.alpha+=daltaTime*0.001;
  var alpha=Math.sin(this.alpha);


	ctx2.save();
	ctx2.globalAlpha=0.6;
		ctx2.lineWidth=20;
   	ctx2.lineCap="round";
   	ctx2.strokeStyle ="purple";
   for(var i =0; i<this.num;i++){
       this.fruitborn[i]=this.headx[i]+alpha*this.amp[i];
   	//beginPath,moveTo,lineTo,strokeStyle,LineWidth,LineCap,globalAlpha
   	ctx2.beginPath();
   	ctx2.moveTo(this.rootx[i],canHeight);
   	ctx2.quadraticCurveTo(this.rootx[i],canHeight -120, this.headx[i]+alpha*this.amp[i],this.heady[i]);
   	
   
   	ctx2.stroke();
   }
   ctx2.restore();
}