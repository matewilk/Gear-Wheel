/* 
 * Gear wheel which uses Raphael library to draw itself
 * test() function is responsible for rotating wheel
 */

function drawWheel(){

	var paper = Raphael('gearwheel', 410, 410);
	sectorsCount = 32;
	color = "#000";
	width = 15;
	r1 = 70;		//radius
	r2 = 99;
	cx = 100;	//x of center
	cy = 200;	//y of center
	beta = 2*Math.PI / sectorsCount;
	hight = false;
	trigger = 1;
	points = '';

	for (var i = 0; i < sectorsCount; i++) {
		var alpha = beta * i - Math.PI / 2; // angle between current dash and initial state
		cos = Math.cos(alpha)
		sin = Math.sin(alpha);

		mcx = cx + r1 * cos;
		mcy = cy + r1 * sin;
		lcx = cx + r2 * cos;
		lcy = cy + r2 * sin;

		if(hight == true){
		  points += ' L'+lcx+' '+lcy;
		}
		else{
		  if(i == 0){
			var start = ' L'+mcx+' '+mcy;
			points += ' M'+mcx+' '+mcy;
		  }
		  else
			points += ' L'+mcx+' '+mcy;
		}
		trigger++
		if(trigger == 2){
		  hight = !hight;
		  trigger = 0;
		}
		if(i == 31)
		  points += start;
	}


	(function test(){
		path = paper.path(points);
		//path2 = paper.path(string2).attr('stroke', 'red');
		//path = paper.path('M100 200 L200 200 L200 100')
		path.attr('stroke', 'white');
		path.attr('fill', '#206fea');
		path.animate({rotation: '360 100 200'}, 30000, true, function(){
			path.remove();
		});
		setTimeout(test, 30000);
	})();
}

