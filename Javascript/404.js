window.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG') {
        event.target.src = 'https://mbduk-cdn.madebydanny.uk/a28a3c50-3e92-47f6-adea-b62eccd07ecd.png'; 
    } else {
        window.location.href = '/404.html';
    }
}, true);
