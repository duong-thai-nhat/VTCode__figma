// external js: flickity.pkgd.js

var flkty = new Flickity('#service .carousel');

var buttonGroup = document.querySelector('#service .carousel');

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.service-carousel-cell-modal' ) ) {
    return;
  }
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});


var flkty1 = new Flickity('#team .carousel');

var buttonGroup1 = document.querySelector('#team .carousel');

buttonGroup1.addEventListener( 'click', function( event ) {

  // filter for button clicks
  if ( !matchesSelector( event.target, '.team-carousel-cell-modal' ) ) {
    return;
  }
  var selector1 = event.target.getAttribute('data-selector');
  flkty1.selectCell( selector1 );
});


