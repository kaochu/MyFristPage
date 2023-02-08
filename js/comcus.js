$(function() {
    /*导航*/
    $.fn.sudyNav = function() {};
    $(".wp-menu li").hover(function() {
        $(this).siblings().find('.sub-menu').stop(true, true).slideUp(150)
        $(this).children('.sub-menu').stop(true, true).slideDown(200);
        $(this).addClass('hover');
    }, function() {
        $(this).children('.sub-menu').stop(true, true).slideUp(150);
        $(this).removeClass('hover');
    });

    $(".wp-menu li").each(function() {
        $(this).children(".menu-switch-arrow").appendTo($(this).children(".menu-link"));
    });
    $(".navi-slide-head ").click(function() {
        $(this).siblings(".wp-panel").slideToggle();
    });

});