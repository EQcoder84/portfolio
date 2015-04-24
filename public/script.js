$(document).ready(function () {
$('div').mouseenter(function() {
        $('.grow').fadeTo('fast', 0.5);
});
    
    $('div').mouseleave(function() {
        $('.grow').fadeTo('fast', 0.5);
    });
 
     $('nav').hover(function() {
     	$('#projects').slideToggle('slow');
     });

 });





