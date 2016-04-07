var $svg = $('svg');
var $lines = $('.lines');
var $btn = $('.btn');
var $engage = $('.engage');

$btn.on('click', function () {
  $lines.addClass('lineEngage');
  $lines.removeClass('lines');
  $engage.addClass('lineEngaged');
});
