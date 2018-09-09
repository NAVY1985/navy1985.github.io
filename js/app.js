$(document).ready(function() {

    $('.up').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {

            $('.up').slideDown(300);
        } else {
            $('.up').slideUp(300);
        }
    });

    $(window).scroll(function() {

        if ($('#menu').offset().top > 580) {
            $('#menu').addClass('bg-inverse');
        } else {
            $('#menu').removeClass('bg-inverse');
        }
    });

    $("#projects").click(function() {
        $('html,body').animate({
            scrollTop: $("#projects1").offset().top
        }, 2000);
    });
    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $("#about1").offset().top
        }, 2000);
    });

    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact1").offset().top
        }, 2000);
    });
});