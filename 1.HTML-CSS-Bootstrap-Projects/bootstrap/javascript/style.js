$(document).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $('.second-navbar').show();
        $('.first-navbar').hide();
    } else {
        $('.second-navbar').hide();
        $('.first-navbar').show();
    }
});