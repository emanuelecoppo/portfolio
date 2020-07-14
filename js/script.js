var vw = $(window).width()/100;
var vh = $(window).height()/100;
var root = document.documentElement;

/*--------------------ZEPTEPI--------------------*/

$('.zeptepi .symbol').each(function() {
  var symbol = $(this);
  window.setInterval(function() {
    symbol.attr('src', 'img/zeptepi/'+ randomInt(1, 22) +'.png');
  }, 2000);
});

/*--------------------SMOOTHSCROLL--------------------*/

function smoothscroll(pos) {
  $('html, body').animate({
    scrollTop: $(pos).offset().top - $('#nav').outerHeight() + 2*parseFloat($('#nav').css('border-bottom-width'))
  }, 800);
}

// Add smoothscroll to links with specific class
$('.smoothscroll').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    hash = this.hash;
    smoothscroll(hash);
  }
});

// Scroll to section on new page
if (window.location.hash !== '') {
  hash = window.location.hash;
  window.location.hash = '';
  setTimeout(() => {smoothscroll(hash)}, 500);
}

/*--------------------MOBILE BAR--------------------*/

function appHeight() {
  $('#home').css('height', $(window).innerHeight() +'px');
}
window.addEventListener('resize', appHeight);
appHeight();

/*--------------------SOUND--------------------*/

$('.psyduck').click(function() {
  $('#psyduck-cry').get(0).play();
});

/*--------------------FUNCTIONS--------------------*/

// Random integer between min and max
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
