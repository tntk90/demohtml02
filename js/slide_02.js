// JavaScript Document
$(document).ready(function() {
		$.fn.slide = function() {
			var btnDisabled = false;
			var autoSlide;
			var number = 0;
			// Hide all .slide_child
			$(this).children('.slide_content').children('.slide_child').hide();
			// Show only first .slide_child
			$(this).children('.slide_content').children('.slide_child:first').show();
			// Count .slide_child
			var countChild = $(this).children('.slide_content').children('.slide_child').length;
			// Get width height
			var widthChild = $(this).children('.slide_content').children('.slide_active').find('img').width()
			var heightChild = $(this).children('.slide_content').children('.slide_active').find('img').height();
			// set width height for current slide and slide child
			
			$(this).css({'width':widthChild,'height':heightChild});
			$(this).children('.slide_content').children('.slide_child').css({'width':widthChild,'height':heightChild});
			
			// Create option
			for(var i = 0; i < countChild ; i++){
				$(this).children('.slide_option').children().append('<li>'+(i+1)+'</li>');
			}
			// Set current option active
			$(this).children('.slide_option').children().children('li:first').addClass('option_active');
			// function move right
			function moveRight(number, current){
				current.find('.slide_child').hide("slide",{direction: "left"},"slow");
				current.find('.slide_child').eq(number).show("slide",{direction: "right"},"slow");
			}
			// function move left
			function moveLeft(number, current){
				current.find('.slide_child').hide("slide",{direction: "right"},"slow");
				current.find('.slide_child').eq(number).show("slide",{direction: "left"},"slow");
			}
			$(this).children('.slide_option').children().children('li').click(function(){
				if (btnDisabled) { 
					return; 
				}
				btnDisabled = true;
				setTimeout(function () {
					 btnDisabled = false;
				},900);
				clearInterval(autoSlide);
				var curr = $(this).parent().parent().parent();
				
				if($(this).hasClass('option_active')){
					return false;
				}
				var number = curr.children().children().find('li.option_active').index();
				var index = $(this).index();
				curr.find('li.option_active').removeClass('option_active');
				$(this).addClass('option_active');
				if(index>number){
						moveRight(index,curr);
				}
				else if(index<number){
						moveLeft(index,curr);
				}
				startInterval();
			});
			$(this).children('.next').click(function () {
				var curr = $(this).parent();
				//console.log(curr);
				if (btnDisabled) { 
					return; 
				}
				btnDisabled = true;
				setTimeout(function () {
					 btnDisabled = false;
				},900);
				clearInterval(autoSlide);
				number++;
				if(number==countChild)
					number=0;
				moveRight(number,curr);
				curr.children('.slide_option').children().children().removeClass('option_active');
				curr.children('.slide_option').children().children().eq(number).addClass('option_active');
				startInterval();
			});
			
			$(this).children('.prev').click(function(){
				var curr = $(this).parent();
				if (btnDisabled) { 
					return; 
				}
				btnDisabled = true;
				setTimeout(function () {
					 btnDisabled = false;
				},900);
				clearInterval(autoSlide);
				number--;
				if(number<0)
					number = countChild-1;
				moveLeft(number,curr);
				curr.children('.slide_option').children().children().removeClass('option_active');
				curr.children('.slide_option').children().children().eq(number).addClass('option_active');
				startInterval();
			});		
		};
		$('#slide_welcome').slide();
		$('#slide_top').slide();
		$('#slide_group .slide').slide();
		function startInterval(current){
			var countChild = current.children('.slide_content').children('.slide_child').length;
			var number = 0;
			autoSlide = setInterval(function () {
				number++;
				console.log(countChild);
				if(number==countChild)
					number=0;
				current.find('.slide_child').hide("slide",{direction: "left"},"slow");
				current.find('.slide_child').eq(number).show("slide",{direction: "right"},"slow");
				
				current.children('.slide_option').children().children().removeClass('option_active');
				current.children('.slide_option').children().children().eq(number).addClass('option_active');
			}, 3000);
		}
		startInterval($('#slide_top'));
		
/*		var btnDisabled = false;
		var autoSlide;
		var number = 0;
		$('#slide_top .slide_content .slide_child').hide();
		$('#slide_top .slide_content .slide_child:first').show();
		var countLi = $('#slide_top .slide_content .slide_child').length;
		var widthLi = $('#slide_top .slide_content .slide_child.slide_active p img').width();
		var heightLi = $('#slide_top .slide_content .slide_child.slide_active p img').height();
		
		$('#slide_top').css({'width':widthLi,'height':heightLi});
		$('#slide_top .slide_content .slide_child').css({'width':widthLi,'height':heightLi});
		
		for(var i = 0; i < countLi ; i++){
			$('#slide_top .slide_option ul').append('<li>'+(i+1)+'</li>');
		}
		$('#slide_top .slide_option ul li:first').addClass('option_active');
		
		$('.next').click(function () {
			if (btnDisabled) { 
				return; 
			}
			btnDisabled = true;
			setTimeout(function () {
				 btnDisabled = false;
			},900);
			
			number++;
			if(number==countLi)
				number=0;
			moveRight(number);
			$('#slide_top .slide_option ul li').removeClass('option_active');
			$('#slide_top .slide_option ul li').eq(number).addClass('option_active');
		});
		
		$('.prev').click(function(){
			if (btnDisabled) { 
				return; 
			}
			btnDisabled = true;
			setTimeout(function () {
				 btnDisabled = false;
			},900);
			
			number--;
			if(number<0)
				number=countLi-1;
			moveLeft(number);
			$('#slide_top .slide_option ul li').removeClass('option_active');
			$('#slide_top .slide_option ul li').eq(number).addClass('option_active');
		});
		
		$('#slide_top .slide_option ul li').click(function(){
			if (btnDisabled) { 
				return; 
			}
			btnDisabled = true;
			setTimeout(function () {
				 btnDisabled = false;
			},900);
			
			var curr = $(this).parent().parent().parent();
			if($(this).hasClass('option_active')){
				return false;
			}
			var number = $('li.option_active').index();
			var index = $(this).index();
			$('li.option_active').removeClass('option_active');
			$(this).addClass('option_active');
			if(index>number){
					moveRight(index);
			}
			else if(index<number){
					moveLeft(index);
			}
		});
		function moveRight(number){
			$('#slide_top .slide_content .slide_child').hide("slide",{direction: "left"},"slow");
			$('#slide_top .slide_content .slide_child').eq(number).show("slide",{direction: "right"},"slow");
		}
		function moveLeft(number){
			$('#slide_top .slide_content .slide_child').hide("slide",{direction: "right"},"slow");
			$('#slide_top .slide_content .slide_child').eq(number).show("slide",{direction: "left"},"slow");
		}*/
		
});