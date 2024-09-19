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

function myFunction() {
  const input = document.getElementById('myInput');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("myUL");
  const li = ul.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("a")[0];
    const txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');
  });

  // Set initial mode based on user's preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('dark-mode');
  } else {
      body.classList.add('light-mode');
  }
});
// Load the Google Translate API script
function loadGoogleTranslate() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
}

// Initialize the Google Translate element
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'es,fr',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Add event listener to the button
document.getElementById('translateButton').addEventListener('click', function() {
  loadGoogleTranslate();
  document.getElementById('google_translate_element').style.display = 'block';
});
document.addEventListener("DOMContentLoaded", function() {
  // Hide the loader with a fade-out effect
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
  setTimeout(() => loader.style.display = 'none', 500); // Wait for the fade-out effect to complete
});
