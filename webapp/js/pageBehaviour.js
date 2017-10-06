window.onscroll = function() {
    checkToTopVisiblility();
};

window.onload = function() {
    //checkToTopVisiblility();
    $('body').scrollspy({ target: '#navbar-example' });
    hideNavbarOnClick();


}

$(function() {
    $(".ScrollTopButton").on("click", function() {
        scrollToTop()
    });
});

function checkToTopVisiblility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.ScrollTopButton').css("display", "block");
        $('nav').addClass('navbar-animation');

    } else {
        $('.ScrollTopButton').css("display", "none");
        $('nav').removeClass('navbar-animation');
    }
}

function scrollToTop() {
    jQuery.when(jQuery('body,html').animate({
        scrollTop: 0
    }, 800));
}

function hideNavbarOnClick() {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });
}