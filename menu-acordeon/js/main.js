$(document).ready(function(){
  $('.menu li:has(ul)').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('activado')) {
        $(this).removeClass('activado');
        $(this).children('ul').slideUp();
    } else {
      // ocultar todos los submenu
      $('.menu li ul').slideUp();
      $('.menu li').removeClass('activado');
      $(this).addClass('activado');
      $(this).children('ul').slideDown ();
    }
  });
});
