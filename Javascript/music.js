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
        includedLanguages: 'es',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
  
  // Add event listener to the button
  document.getElementById('translateButton').addEventListener('click', function() {
    loadGoogleTranslate();
    document.getElementById('google_translate_element').style.display = 'block';
  });
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('play-pause');
  const progressBar = document.getElementById('progress-bar');
  const progress = document.getElementById('progress');
  const time = document.getElementById('time');

  playPauseButton.addEventListener('click', () => {
      if (audio.paused) {
          audio.play();
          playPauseButton.textContent = 'Pause';
      } else {
          audio.pause();
          playPauseButton.textContent = 'Play';
      }
  });

  audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      time.textContent = formatTime(currentTime);
  });

  progressBar.addEventListener('click', (e) => {
      const width = progressBar.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
  });

  function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }