// JavaScript Document
$(document).ready(function() {
	var btnDisabled = false;
	var current_index = 0;
	var autoSlide;
	var currentSlide;
	var widthChild;
	var heightChild;
	var countChild;
	var step = 1;
	var countSlide = $('.slide').length; // count slides are created
	var widthSlide;
	
	currentSlide = $('.slide').eq(0);
	countChild = currentSlide.children().children('.slide_child').length;
	widthChild = currentSlide.children().children('.slide_child').width();
	heightChild = currentSlide.children().children('.slide_child').height();
	widthSlide = widthChild*countChild;
	currentSlide.css({width: widthChild, height: heightChild});
	currentSlide.children('.slide_content').css({width: widthSlide,marginLeft: - widthChild});
	currentSlide.children().children('.slide_child:first').addClass('slide_active');
	createOption(currentSlide,countChild);
	currentSlide.children().children('.slide_child:last').prependTo(currentSlide.children('.slide_content'));
	/*for(var i = 0; i < countSlide; i++){
		currentSlide = $('.slide').eq(i);
		countChild = currentSlide.children().children('.slide_child').length;
		widthChild = currentSlide.children().children('.slide_child').width();
		heightChild = currentSlide.children().children('.slide_child').height();
		widthSlide = widthChild*countChild;
		currentSlide.css({width: widthChild, height: heightChild});
		currentSlide.children('.slide_content').css({width: widthSlide,marginLeft: - widthChild});
		currentSlide.children().children('.slide_child:first').addClass('slide_active');
		createOption(currentSlide,countChild);
	}	
	function autoPlay(){
		currentSlider = $('.slide').eq(0);
		countChild = $('.slide').eq(0).children().children('.slide_child').length;
		autoSlide = setInterval(function(){
			current_index++;
			if(current_index==countChild)
				current_index=0;
			moveRight(currentSlider,current_index);
		},60000);
	}
	autoPlay();*/
	
	/* create option*/
	function createOption(current,countSlide){
		for(var i = 0; i < countSlide; i++){
			currentSlide.children().children('.slide_child').eq(i).addClass('child-'+i);
			current.children('.slide_option').children('ul').append('<li>'+(i+1)+'</li>');
		}
		current.children('.slide_option').children().children('li:first').addClass('option_active');
		//currentSlide.children().children('.slide_child:last').prependTo(currentSlide.children('.slide_content'));
	}
	$('.next').click(function() {
		currentSlide = $(this).parent();
		countChild = currentSlide.children('.slide_content').children('.slide_child').length;
		if (!btnDisabled){ 
			//clearInterval(autoSlide);
			var nextChild = currentSlide.children('.slide_content').children('.slide_child.slide_active').next();
			current_index = nextChild.attr('data-value');
			currentSlide.children('.slide_content').children('.slide_child').removeClass('slide_active');
			nextChild.addClass('slide_active');
			
			currentSlide.children('.slide_option').children().children('li').removeClass('option_active');
			currentSlide.children('.slide_option').children().children('li').eq(current_index).addClass('option_active');
			moveRight(currentSlide,current_index);
			//autoPlay(); 
		}
		btnDisabled = true;
	});
	
	$('.prev').click(function() {
		currentSlide = $(this).parent();
		countChild = currentSlide.children('.slide_content').children('.slide_child').length;
		if (!btnDisabled){ 
			//clearInterval(autoSlide);
			var prevChild = currentSlide.children('.slide_content').children('.slide_child.slide_active').prev();
			console.log(prevChild);
			current_index = prevChild.attr('data-value');
			currentSlide.children('.slide_content').children('.slide_child').removeClass('slide_active');
			prevChild.addClass('slide_active');
			
			currentSlide.children('.slide_option').children().children('li').removeClass('option_active');
			currentSlide.children('.slide_option').children().children('li').eq(current_index).addClass('option_active');
			moveLeft(currentSlide,current_index);
			//autoPlay(); 
		}
		btnDisabled = true;
	});
	$('.slide_option ul li').click(function(){
		currentSlide = $(this).parent().parent().parent('.slide');
		widthChild = currentSlide.children().children('.slide_child').width();
		//clearInterval(autoSlide)
		if(!($(this).hasClass('option_active'))){
			var old_index = currentSlide.children('.slide_option').children('ul').children('li.option_active').index();
			var new_index = $(this).index();
			
			currentSlide.children().children('.child-'+old_index).removeClass('slide_active');
			currentSlide.children().children('.child-'+new_index).addClass('slide_active');
			
			currentSlide.children('.slide_option').children('ul').children('li.option_active').removeClass('option_active');
			$(this).addClass('option_active');
			
			if(new_index>old_index){
				step = new_index - old_index;
				moveRight(currentSlide,new_index,step);
			}
			else if(new_index<old_index){
				moveLeft(currentSlide,new_index);
			}
		}
		//autoPlay(); 
	});
	function moveLeft(currentSlide,current_index,step){
		step = step ? step : 1;
		widthChild = currentSlide.children().children('.slide_child').width();		
		currentSlide.children('.slide_content').animate({left: "+" +widthChild*step+ "px"}, 800, function () {
			$(this).children('.slide_child:last').prependTo(this);
			$(this).css('left', '');
			btnDisabled = false;
		});
	}
	function moveRight(currentSlide,current_index,step){
		step = step ? step : 1;
		widthChild = currentSlide.children().children('.slide_child').width();
		currentSlide.children('.slide_content').animate({left: "-"+widthChild*step+"px"}, 800, function () {
			$(this).children('.slide_child:first').appendTo(this);
			$(this).css('left', '');
			btnDisabled = false;
		});
	}
});