window.onscroll = function() {
    checkToTopVisiblility();
};

window.onload = function() {

    $('body').scrollspy({ target: '#navbar-example' });
    hideNavbarOnClick();
    setThemeSwitcher();

}

loadThemeFromLocalStorage();
/* document.on
window.onBeforeRender = function() {
    loadThemeFromLocalStorage();
} */

function loadThemeFromLocalStorage() {
    if (localStorage.getItem("theme")) {
        activateTheme(localStorage.getItem("theme"));
    }
}

function saveThemeToLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

function activateTheme(theme) {
    $('link[data-stylesheet="stylesheet"]').attr('href', theme);
    saveThemeToLocalStorage(theme);
}


function setThemeSwitcher() {
    $('#themeSwicher-main').click(function() {
        var theme = "./css/theme-main.min.css";
        activateTheme(theme);
    });
    $('#themeSwicher-green').click(function() {
        var theme = "./css/theme-green.min.css";
        activateTheme(theme);
    });
    $('#themeSwicher-red').click(function() {
        var theme = "./css/theme-red.min.css";
        activateTheme(theme);
    });
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