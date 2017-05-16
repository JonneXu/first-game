var fruitObj =function  () {
	this.alive=[];//bool
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange= new Image();
	this.blue= new Image();
	this.aneNum=[];
	this.xspd=[];
	this.xway=[];
	this.xcount=[];
}

fruitObj.prototype.num=10;
fruitObj.prototype.init= function(){
	for (var i = 1; i<this.num; i++){
            this.alive[i] =false;
             fruitMonitor(i);
             this.spd[i]=Math.random()*0.005+0.005;
             this.fruitType[i]='';
             this.aneNum[i]=1;  
             this.xspd[i]=Math.random()*0.005+0.005; 
             this.xway[i]=1; 
             this.xcount[i]=0;          

	}
 
	this.orange.src='./src/fruit.png';
     this.blue.src='./src/blue.png';
}
fruitObj.prototype.draw=function(){
   
    for (var i=0;i<this.num;i++){
    	//draw
    	if (this.alive[i]==true){
    	//find an ane, grow ,fly up
    	if (this.l[i]<14){
    		
    	this.l[i]+=this.spd[i]*daltaTime;
    this.x[i]=ane.fruitborn[this.aneNum[i]];}
    	else{
    		this.y[i]-=this.spd[i]*7*daltaTime;
    		  this.xcount[i]++;
    		  if (this.xcount[i]==50){
    		  	var a= Math.random();
    		  	this.xcount[i]=0;
    		  	if (a>0.5){
    		  		this.xway[i]=(-1)*this.xway[i];
    		  	}
    		  }
    		this.x[i]+=this.xspd[i]*daltaTime+this.xway[i]*0.2;

    		if (this.y[i]<10){
    			this.alive[i]=false;

    	}}
    	
    	if (this.fruitType[i]=='blue'){

    	ctx2.drawImage(this.blue,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);}
    	else
    	{
    		ctx2.drawImage(this.orange,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
    		
    }
    	}
}
}


fruitObj.prototype.born =function(i){
	this.aneNum[i]=Math.floor(Math.random()*ane.num)

	this.x[i]=ane.headx[this.aneNum[i]];
	this.y[i]=ane.heady[this.aneNum[i]];
	this.l[i]=0;
	this.alive[i]=true;
	var a= Math.random();
	if (a<0.2){
		this.fruitType[i]='blue';
	}
	else{
		this.fruitType[i]='orange';
	}
	var b= Math.random();
	if (b>0.5)
	{
    		  		this.xway[i]=-1;
  
}
}
//Monitor 15 fruit in the screen
function fruitMonitor(){
	var num=0;
	for (var i=0;i<fruit.num;i++){
		if (fruit.alive[i]) num++;
	}

	if (num<15){
		sendFruit();
		return;
	}
}

function sendFruit(){
	for (var i=0; i<fruit.num;i++){
		if (!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}

fruitObj.prototype.dead= function(i){
	this.alive[i]=false;
}