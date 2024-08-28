
    window.addEventListener('offline', function() {
    document.getElementById('offline-popup').style.display = 'block';
});

window.addEventListener('online', function() {
    document.getElementById('offline-popup').style.display = 'none';
});

function closePopup() {
    document.getElementById('offline-popup').style.display = 'none';
}
