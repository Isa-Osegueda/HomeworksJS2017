/*var deg = 0;

function rotate(argument) {
	var item1 = document.getElementsByClassName('item')[0];
	var item2 = document.getElementsByClassName('item')[1];
	var item3 = document.getElementsByClassName('item')[2];
	var item4 = document.getElementsByClassName('item')[3];
	var item5 = document.getElementsByClassName('item')[4];
	var item6 = document.getElementsByClassName('item')[5];

	deg += 120;

	item1.style.transform = "rotateY("+deg+"deg) translateZ(115.5px)";
	item2.style.transform = "rotateY("+(deg+120)+"deg) translateZ(115.5px)";
	item3.style.transform = "rotateY("+(deg+240)+"deg) translateZ(115.5px)";
	item4.style.transform = "rotateY("+(deg+480)+"deg) translateZ(115.5px)";
	item5.style.transform = "rotateY("+(deg+960)+"deg) translateZ(115.5px)";
	item6.style.transform = "rotateY("+(deg+1920)+"deg) translateZ(115.5px)";

}*/

var items,
	length,
	deg,
	z; 
	move = 0;


function rotate(direction){

	move += direction;

	for (var i = 0; i  <  length; i++) {

		items[i].style.transform = "rotateY("+(deg *(i + move))+"deg) translateZ("+z+"px)";
		
		
	}

	

};

function load(){

	items = document.getElementsByClassName('item');
	length = items.length;

	deg = 360 / length;
	z = (items[0].offsetWidth / 2) / Math.tan((deg / 2) * (Math.PI / 180));

	for (var i = 0; i < length; i++) {

		items[i].style.transform = "rotateY(" + (deg * i)+"deg) translateZ("+z+"px)";
		
	}

};


window.addEventListener('load', load);

