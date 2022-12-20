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

// Tabs
function openPage(evt, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();


