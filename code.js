// Menu button
$(document).ready(function()
{
    // When pressing the #menu icon,
    $('#menu').click(function()
    {
        // the 'ul' list will show
        $('ul').toggleClass('show');
    });
});

// Calling ScroolTrigger plugin
gsap.registerPlugin(ScrollTrigger);

