var main = function() {
  $('li.dropdown').click(function() {
    $('li.dropdown').not(this).find('ul').hide();
    $(this).find('ul').toggle();
  });
}

$(document).ready(main);
