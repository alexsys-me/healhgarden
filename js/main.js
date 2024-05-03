$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.dropdown-content').dropdown();
    $('.modal').modal();
    $('.zoom').materialbox();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.collapsible').collapsible();
    jQuery(function($) {
        $(window).scroll(function(){
            if($(this).scrollTop()>245){
                $('header').addClass('fixed');
            }
            else if ($(this).scrollTop()<245){
                $('header').removeClass('fixed');
            }
        });
    });
});