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


// Accordion (drop-down content on Portfolio page)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}


// Modal
function onClick(element) {
    document.getElementById("img1").src = element.src;
    document.getElementById("modal1").style.display = "block";
  }

function onClick(element) {
    document.getElementById("img2").src = element.src;
    document.getElementById("modal2").style.display = "block";
}

function onClick(element) {
    document.getElementById("img3").src = element.src;
    document.getElementById("modal3").style.display = "block";
}

function onClick(element) {
    document.getElementById("img4").src = element.src;
    document.getElementById("modal4").style.display = "block";
}

function onClick(element) {
    document.getElementById("img5").src = element.src;
    document.getElementById("modal5").style.display = "block";
}