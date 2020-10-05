document.body.onload = function() {

	setTimeout(function(){
		let preloader = document.getElementById('page-prealoder');
		if ( !preloader.classList.contains('done') ) {
			preloader.classList.add('done');
		}
	}, 200);
}

