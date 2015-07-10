// 276 x 276

$(function(){


	$(".card").flip({
		axis: 'x',
		trigger: 'manual'
	});




	var counter = 0; 


	$(".card").on('click',function(){
		var previousClick = $('.selected');
		var currentClick = $(this);

		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).flip(false);

		}else{
			$(this).addClass('selected');
			$(this).flip(true);
		}	

		if (previousClick.length > 0) {
			setTimeout(function(){

				if (previousClick.find('.back img').attr('src') === currentClick.find('.back img').attr('src')){

					console.log('match found!');
					$('.selected').removeClass('selected').fadeOut();

				} else {
					console.log("aasdfalsdkjflkasjdf")
					$('.selected').removeClass('selected')
					previousClick.flip(false);
					currentClick.flip(false);
				}


			},1000);
			// if (previousClick.find('.back img').attr('src') !== currentClick.find('.back img').attr('src')) {
			// 	setTimeout(function() {
			// 		if($(this).hasClass('selected')){
			// 			console.log("Not a match test.")
			// 			$('.selected').removeClass('selected')
			// 			$(this).flip(false);

			// 		}		
			// 	},1000)		
			// } 				
			
		}	
	}); 		




// flip cards over when no match is found 
// fix fade out issue
// add counter player 1 winner and player 2 

});







	// $('.square').on('click',function(e){
	// 	$(this).removeClass('flipped');
	// 	alert('you clicked: '+$(this).attr('class'));
// 	});

// })

// if (counter % 2 == 0) {  
		// 	previousClick = this.classList.item(1);
		// 	console.log("firstClick", previousClick);
		// 	counter +=1;

		// } else if (counter % 2 !== 0) {    
		// 	currentClick = this.classList.item(1);
		// 	console.log("secondClick", currentClick);
		// 	counter +=1;
		// 	if (previousClick == currentClick) { 
		// 		console.log("match")
		// 	} else {
		// 		console.log("no match");
		// 		$('.' + previousClick).flip(false);
		// 		$('.' + currentClick).flip(false);
		// 		previousClick = ''
		// 		currentClick = ''
		// 	}
		// }



// });
