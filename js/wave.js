var waveObj =function  () {
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
	this.type;
}

waveObj.prototype.num=10;
waveObj.prototype.init=function(){
	for (i=1;i<this.num;i++)
     {
     	this.x[i]=canWidth*0.5;
        this.y[i]=canHeight*0.5;
        this.alive[i]=true;
        this.r[i]=0;
        this.type="fruit";
     }
}

waveObj.prototype.draw=function(){
   for (i=1;i<this.num;i++){
   	if(!this.alive[i]){
       
          this.r[i]+=daltaTime*0.04;
          if(this.r[i]>50){
          	  this.alive[i]=true;
          	  break;
          }
          var alpha=1-this.r[i]/50;
        
          ctx1.save();
          ctx1.shadowBlur=10;
	      ctx1.shadowColor='white';
	      ctx1.lineWidth=3;
          ctx1.beginPath();
          ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
          ctx1.closePath;
          if(this.type=='fruit')
         { ctx1.strokeStyle='rgba(255,255,255,'+alpha+')';}
     else
     {
     	ctx1.strokeStyle='rgba(203,91,0,'+alpha+')';
     }
          ctx1.stroke();
          ctx1.restore();

   }
   }
   
}


waveObj.prototype.born=function(x,y,type){
    

  	for (i=1;i<this.num;i++){
  	

  	if(this.alive[i]){
  		this.x[i]=x;
  	this.y[i]=y;
  	this.alive[i]=false;
  	this.r[i]=10;
  	this.type=type;
  	return;
  	}
  }
 
}