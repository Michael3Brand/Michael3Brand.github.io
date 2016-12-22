window.onload = function () {

    // Include NavigationBar into header div
    var header = '<div class="header"><img id="header_logo" src="./images/logo_michael-brand_homepage.png" ></div> <div class="nav" id="navigation"> <ul> <li><a href="index.html">Home</a></li> <li><a href="index.html">Home</a></li> <li><a href="index.html">Home</a></li> <li><a href="index.html">Home</a></li> <li><a href="index.html">Home</a></li> </ul> </div>';

    // Mark active tab
    var pathname = window.location.pathname;
    pathname = pathname.replace("/", "");

    var navChilds = ["Leistungsprofil.html", "Veroeffentlichungen.html", "Berichte.html", "Auftraggeber.html", "Mitgliedschaften.html"];
    if (!$.inArray(pathname, navChilds)) {
        var parent = 'class="active" ' + 'href="' + "Profil.html" + '"';
        var parentRef = 'href="' + "Profil.html" + '"';
        header = header.replace(parentRef, parent);
    }


    var activeClass = 'class="active" ' + 'href="' + pathname + '"';
    pathname = 'href="' + pathname + '"';
    header = header.replace(pathname, activeClass);


    var headerDiv = document.getElementById("headerContent");
    headerDiv.innerHTML = header;

    // Set Page footer
    var footer = '<div class="footerContent"> </div style="text-align: center; display: inline-block;"><div class="MichaelBrand"><p><a class="download" onclick="window.open(this.href); return false;" title="http://michael-brand95.rhcloud.com/" href="http://michael-brand95.rhcloud.com" onkeypress="window.open(this.href); return false;"  >Erstellt von Michael Brand<br /></a></p></div>'

    var footerDiv = document.getElementById("footerContent");
    footerDiv.innerHTML = footer;

    //Set Page Title
    document.title = window.location.pathname.replace("/", "").replace(".html", "") + " - Michael Brand";

    //Set Page Favicon
    $(document).ready(function () {
        $('#favicon').remove();
        $('head').append('<link rel="icon" href="favicon.gif" type="image/gif" sizes="16x16">');
    });
}




// Fix NavigationBar by scrolling down
var num = 164; //164 //number of pixels bfore modifying nav style
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav').addClass('fixed');
        $('#content').addClass('navigationFixedCompensation');
    } else {
        $('.nav').removeClass('fixed');
        $('#content').removeClass('navigationFixedCompensation');
    }
});
