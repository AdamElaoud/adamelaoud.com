// pop-up
window.onload = setTimeout(function() {alert("Just a heads up! The main images will be uploaded by mid February and the mobile/tablet versions of this site are under construction.");}, 1000);

// sticky navbar
window.onscroll = function() {stickyBar();};
let navbar = document.getElementById("sticky-navbar");
let navPosition = navbar.offsetTop;
let logo = document.getElementById("logo");

function stickyBar() {
    if (window.pageYOffset > navPosition) {
        navbar.classList.add("stuck");
        logo.classList.add("navbar-logo");
    } else if(window.pageYOffset === navPosition) {
        logo.classList.add("navbar-logo");
    } else {
        navbar.classList.remove("stuck");
        logo.classList.remove("navbar-logo");
    }
}

// MenuSpy
let ms = new MenuSpy(navbar, {
    // menu selector
    menuItemSelector: 'a[href^="#"]',
    // CSS class for active item
    activeClass: 'nav-highlight',
    // amount of space between your menu and the next section to be activated.
    threshold: navbar.offsetHeight,
    // enable or disable browser's hash location change.
    enableLocationHash: true,
    // timeout to apply browser's hash location.
    hashTimeout: 0,
    // called every time a new menu item activates.
    callback: null
});

// scroll Effect
$(document).ready(function(){
    // add smooth scrolling to all links
    $("a").on('click', function(event) {

        // check hash has value
        if (this.hash !== "") {
            // prevent default anchor behavior
            event.preventDefault();

            // Store hash
            let hash = this.hash;

            // num specifies time to scroll (milliseconds)
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){

                // restore hash to URL when done scrolling
                window.location.hash = hash;
            });
        }
    });
});
