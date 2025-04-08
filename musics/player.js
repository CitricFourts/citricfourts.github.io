const tracks = document.querySelectorAll('.track');
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');

// Show audio player when a track is clicked
tracks.forEach(track => {
    track.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        const trackUrl = this.getAttribute('data-audio'); // Get the MP3 file path
        audioSource.src = trackUrl; // Set the audio source to the selected track
        audio.load(); // Load the new audio file
        audio.play(); // Start playing it

        // Show the player by adding the 'show' class
        audio.classList.add('show');
    });
});

// Hide audio player when audio ends
audio.addEventListener('ended', function() {
    audio.classList.remove('show');
});