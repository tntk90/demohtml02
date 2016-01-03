// JavaScript Document
$(document).ready(function() {	
	var oldString, newString, check;
	var countTitle = $('.post_content h4 a').length;
	for(var i = 0; i < countTitle; i++){
		oldString = $('.post_content h4 a').eq(i).text();
		check = $('.post_content h4 a').eq(i).parents('h4').parent('.post_content').parent('.feature');
		if(check.hasClass('feature'))
			newString = oldString.substr(0,34);	
		else
			newString = oldString.substr(0,63);	
		$('.post_content h4 a').eq(i).text(newString+"...");
	}
});
$(function() {
    if (window.PIE) {
        $('.bor_rd').each(function() {
            PIE.attach(this);
        });
    }
});