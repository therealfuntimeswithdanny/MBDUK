// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "33%";  // IE10
    elements[i].style.flex = "33%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var loadingBar = document.getElementById('loading-bar');
  var width = 0;
  var interval = setInterval(function() {
      if (width >= 100) {
          clearInterval(interval);
      } else {
          width++;
          loadingBar.style.width = width + '%';
      }
  }, 30); // Adjust the speed of the loading bar by changing the interval time
});
