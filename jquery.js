$(document).ready(function() {
	$('body').prepend('<div class="container"></div>'); // Adding an HTML element dynamically here.
  $('.container').prepend('<button class="button">New Grid</button>') // Adding a button to the container by jQuery prepand function.

	.append('<ul class="ul"></ul>') // Here i added 10 list items dynamically so that when a user visit the page it will show
	.append('<ul class="ul"></ul>') // The user grid with height 10 and width 10 by default.
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
    	$(this).addClass('hover') // Here i am implementing the hover effect by using jQuery addClass function and  
    });                         // targeting the hover class which i styled in the style sheet with the background
                                // color of purple. 
    
function newGrid() {
    	$('li').addClass('white'); //When a user click new grid button here what happens.
    	$('.container').remove();
    	$('body').prepend('<div class="container"></div>')
    	var width = prompt('Enter a new grid width'); // It prompts user to new grid width which is pretty much self-explanatory.

    	
  if(width > 25){
    var width = prompt('Grid width must be 25 or less'); // Here i am using control-flow statement if/else to check whether
                                                         // a user entering more than 25 value of width or height. If so, then
  }                                                      // it will reject the value more than 25 and ask user to enter exactly 25 or less. 

  var height = prompt('Enter new grid height');

  if(height > 25) {
    var height = prompt('Grid height must be 25 or less');
  }

  for (var i=0; i<=height;i++){
    $('.container').append('<ul class="ul"></ul>'); // Here i am using for statement to dynamically create grid based on 
  }                                                 // the input such as height and width user entered before.

  for (var i=0; i<=width;i++){
    $('ul').append('<li class="li"></li>');
  }

$('.li').hover(function() {
    	$(this).addClass('hover')
    });
  $('.container').prepend('<button class="button">New Grid</button>')
      $('.button').on('click', newGrid);

    };
    
   $('.button').on('click', newGrid); // Here i am saying if a user click the new grid button then please execute the function newGrid.
                                      
});

// Thanks for looking at my code feel free to play with it, edit it or make it your own version.
// Peace Hasan. 
