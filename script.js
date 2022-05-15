// external js: flickity.pkgd.js

var flkty = new Flickity('#service .carousel');

var buttonGroup = document.querySelector('#service .carousel');

buttonGroup.addEventListener( 'click', function( event ) {
//   filter for button clicks
  if ( !matchesSelector( event.target, '.service-carousel-cell-modal' ) ) {
    return;
  }
  var selector = event.target.getAttribute('data-selector');
  flkty.selectCell( selector );
});


var flkty1 = new Flickity('#team .carousel');

var buttonGroup1 = document.querySelector('#team .carousel');

buttonGroup1.addEventListener( 'click', function( event ) {

//   filter for button clicks
  if ( !matchesSelector( event.target, '.team-carousel-cell-modal' ) ) {
    return;
  }
  var selector1 = event.target.getAttribute('data-selector');
  flkty1.selectCell( selector1 );
});


// var slider2 = document.querySelectorAll('.service-carousel-cell-modal')
// var sliderContainer = document.querySelector('')

// console.log(slider2);

// slider2.forEach(slider => {
//     slider.addEventListener('click', (e) => {
//         console.log(parseInt(e.target.getAttribute('data-selector')))
//         var slider1 = document.querySelector('.carousel-cell.is-selected')

//         console.log(slider1, slider1.getAttribute("data-selector"), parseInt(slider1.getAttribute("data-selector")))
//     })
//   })

// slider2.map(modal =>
//     modal.onclick = function(e){
//         console.log('qưdná')
//         console.log(e.target)
//         var slider1 = document.querySelector('.carousel-cell.is-selected')
//         console.log(slider1)
    
// })

// var card = slider1.getAttribute("data-selector");
// console.log(card);






