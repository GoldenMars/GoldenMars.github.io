$(document).ready(function(){
  $("#CarouselOne").owlCarousel({
  	items: 1,
  	dots: false,
  	nav: true,
  	navText:["<img src='img/CarouselNav/First/Vector.svg'>","<img src='img/CarouselNav/Last/Vector.svg'>"],
  	loop: true,
  });
});

$(document).ready(function(){
  $("#CarouselTwo").owlCarousel({
  	items: 1,
  	dots: false,
  	nav: true,
  	navText:["<img src='img/TwoCarousel/chevron-left.svg'>","<img src='img/TwoCarousel/chevron-right.svg'>"],
  	loop: true,
  });
});

$(document).ready(function(){
  $("#CarouselThree").owlCarousel({
  	items: 2,
  	dots: true,
  	nav: true,
  	navText:["<img src='img/ThreeCarousel/chevron-left.svg'>","<img src='img/ThreeCarousel/chevron-right.svg'>"],
  	loop: true,
  });
});