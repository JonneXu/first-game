//判断大鱼和果实距离  以判断是否吃掉

function momFruitCollision () {
	if (!data.gameover){
		for (var i=0;i<fruit.num;i++){
		  if (fruit.alive[i]){
		  	 //calculate length
		  	 var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
             if (l<900)
             {
             	fruit.dead(i);
             	data.fruitNum++;
             	mom.BodyCount++;
		wave.born(fruit.x[i],fruit.y[i],"fruit");
             	if (mom.BodyCount>7){
             		mom.BodyCount=7;
             	}
             	if (fruit.fruitType[i]=='blue'){
                        data.double=2;
             	}
             	
             }
		  }
	}
	}
}


function momBabyCollision(){
if (mom.BodyCount>0　&& data.gameover==false){
		var l=calLength2(baby.x,baby.y,mom.x,mom.y);
	if (l<900){
		baby.BodyCount=0;
		mom.BodyCount=0;
		//score updata
		data.addScore();
		wave.born(baby.x,baby.y,"fish");
	}
}
}