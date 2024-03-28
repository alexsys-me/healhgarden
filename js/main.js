$(document).ready(function() {

    $('.modal').modal();
    $('.zoom').materialbox();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.slide-gallery').carousel({
        fullWidth: true,
        indicators: true
    });
            
    $('.selectdate').carousel();
    $('.selecttime').carousel();
    $('.selectdate').owlCarousel({
        margin:10,
        nav:true,
    })
  
});