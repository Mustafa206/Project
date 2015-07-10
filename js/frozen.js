// 276 x 276

$(function(){


	$(".card").flip({
		axis: 'x',
		trigger: 'manual'
	});




	var counter = 0; 
	var turn = 0;
	var score = [0,0];
	var playerOne = score[0];
	var playerTwo = score[1];

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
					score[turn]++;
					console.log('player one score is: ', score[0], 'player two score: ', score[1])
					$('.player-one-score').html(score[0]);
					$('.player-two-score').html(score[1]);
					swal("Right Answer", "Good Job", "success");


				} else {
					console.log("wth man")
					$('.selected').removeClass('selected')
					previousClick.flip(false);
					currentClick.flip(false);
					turn = Math.abs(turn-1);

					if (turn === 0){
						swal("Wrong Answer", "It is now player 1's turn", "error");
					}else{
						swal("Wrong Answer", "It is now player 2's turn", "error");
					}

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
