var tagImg =  document.getElementById("tagImg");
var btnNext = document.getElementById("btnNext");
var btnBack = document.getElementById("btnBack");
var elemento = document.getElementById('slides').getElementsByTagName('img');
var imgActual = document.getElementById("imgActual");

function slider(){

	
	this.cons = 0;
	this.img = ['img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg'];
    this.array =  this.img.length;

}

slider.prototype = {


	constructor: slider,

   imgActual: function () {

 		 imgActual.textContent = (this.cons + 1) + '/' + (this.array) ;
  	},

	next: function(){

		if (this.cons == this.array-1) {

			this.cons = 0;

		}
		else {

			this.cons ++;

		};

		tagImg.src = this.img[this.cons];
		imgActual.textContent = (this.cons + 1) + '/' + (this.array) ;


	},


	back: function(){

		if (this.cons == 0) {

			this.cons = this.array-1;

		}
		else {

			this.cons --;

		};

			tagImg.src = this.img[this.cons];
			imgActual.textContent = (this.cons + 1) + '/' + (this.array) ;


	},

	/*showSlides: function(){


				for(var n= this.cons; n <= this.array; n++){	

				 elemento.className = 'selected';
				 console.log('hola');

				 for(var i = 0; i<this.array; i++){

				  if(i!= this.cons){

				   elemento.className = 'noselected';

				  }		
				 }

				  this.cons++;							
				  break;
				 }	
				 if(this.cons >= this.array){
				  this.cons = 0;		
				 }
				 return false;
				}*/
			
			
	};



var gallery = new slider();
//var start = gallery.showSlides();


btnNext.addEventListener('click', function(){
	        gallery.next();
});

btnBack.addEventListener('click', function(){
	        gallery.back();
});

gallery.imgActual();










