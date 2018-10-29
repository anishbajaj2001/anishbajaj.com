$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘header’).addClass("sticky")
      }
      if ($(this).scrollTop() < 50) {
         $(‘header’).removeClass("sticky")
      }
   });
});

// Get the modal
var modal = document.getElementById('popup1');

// Get the button that opens the modal
var link = document.getElementById("first");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.getElementById("first").onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}