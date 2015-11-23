$(document).ready(function() {
	$('body').prepend('<div class="container"></div>');
  $('.container').prepend('<button class="button">New Grid</button>')

	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	.append('<ul class="ul"></ul>')
	

    
    $('ul').append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    .append('<li class="li"></li>')
    

    $('.li').hover(function() {
    	$(this).addClass('hover')
    });
    
    function newGrid() {
    	$('li').addClass('white');
    	$('.container').remove();
    	$('body').prepend('<div class="container"></div>')
    	var width = prompt('Enter a new grid width');
    	
  if(width > 25){
    var width = prompt('Grid width must be 25 or less');
  }

  var height = prompt('Enter new grid height');

  if(height > 25) {
    var height = prompt('Grid height must be 25 or less');
  }

  for (var i=0; i<=height;i++){
    $('.container').append('<ul class="ul"></ul>');
  }

  for (var i=0; i<=width;i++){
    $('ul').append('<li class="li"></li>');
  }

$('.li').hover(function() {
    	$(this).addClass('hover')
    });
  $('.container').prepend('<button class="button">New Grid</button>')
      $('.button').on('click', newGrid);

    };
    
   $('.button').on('click', newGrid);
    
});