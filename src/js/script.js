$(document).ready(function(){
    $('.checkbtn').on('click', function(){
        $('nav ul').toggleClass('showing');
        $('nav ul ul').toggleClass('showing');
    });
    $('nav').on('mouseleave', function(){
        $('nav ul').toggleClass('showing');
  });
});
