var dataObj=function  () {
	   this.fruitNum;
	   this.double=1;
	   this.score;
       this.gameover;
       this.alpha;
       this.doge=new Image();
}


dataObj.prototype.init=function(){
	this.fruitNum=0;
    this.double=1;
    this.score=0;
    this.gameover=false;
    this.alpha=0;
    this.doge.src='./src/doge.jpg';
}


dataObj.prototype.draw=function(){

	if (this.gameover){
		this.alpha+=daltaTime *0.0005;
		if (this.alpha>1){
			this.alpha=1;
		}
			ctx1.save();
	ctx1.shadowBlur=10;
	ctx1.shadowColor='white';
	ctx1.fillStyle='white';
	ctx1.font="20px Verdana";
	ctx1.textAlign='center';
	ctx1.fillText('score:'+this.score,canWidth*0.5,canHeight-80);
		ctx1.font="30px Verdana";
		ctx1.fillStyle='rgba(255,255,255,'+this.alpha+')';
		ctx1.fillText("GAMEOVER",canWidth*0.5,canHeight*0.5);
		ctx1.restore();
		if (this.alpha==1){
           ctx3.save();
           var imag=this.doge;
           var pat=ctx3.createPattern(imag,'repeat');
			ctx3.rect(canWidth*0.5-400,canHeight*0.5-200,800,400);
			ctx3.fillStyle=pat;
			ctx3.fill();
			ctx3.restore();
		}
	}
	
}

dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
}