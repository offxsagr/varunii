function toggleAudio(videoId, audioIconId) {
    var video = document.getElementById(videoId);
    var audioIcon = document.getElementById(audioIconId);
    
    if (video.muted) {
        video.muted = false;
        audioIcon.classList.remove("uil-volume-mute");
        audioIcon.classList.add("uil-volume-up");
    } else {
        video.muted = true;
        audioIcon.classList.remove("uil-volume-up");
        audioIcon.classList.add("uil-volume-mute");
    }
}
function msg(){
    alert('This is for you miss goddess and yah mute each video after playing otherwise it will keep on playing in the background '+
    'I LOVE YOU');
}