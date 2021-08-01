$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass("fa-bars fa-times");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(window).on("scroll load", function () {
        $(".navbar").removeClass("nav-toggle");
    });

    $(".portfolio .button-container .btn").click(function () {
        let filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $(".portfolio .image-container .box").show("400");
        }
        else {
            $(".portfolio .image-container .box").not('.' + filter).hide("200");
            $(".portfolio .image-container .box").filter('.' + filter).show("200");
        }
    });

    $("#theme-toggler").click(function () {
        $(this).toggleClass("fa-moon-o fa-sun-o");
        $("body").toggleClass("dark-theme");
    });

    $('a[href*="#"]').on("click", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });

});