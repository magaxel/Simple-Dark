$(document).ready(function() {
    if ($(window).width() < 768) {
        $('.date').hide();
        $('.logo.left').hide();
    } else {
        $('.date').show();
        $('.logo.left').show();
    }
});
$(window).resize(function() {
    if ($(window).width() < 768) {
        $('.logo.left').hide();
    } else {
        $('.logo.left').show();
    }
    if ($(window).width() < 750) {
        $('.date').hide();
    } else {
        $('.date').show();
    }
});