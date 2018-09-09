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

    $('nav a').click(function(e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
    });


});