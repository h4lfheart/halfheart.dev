window.onclick = function() {
    startAudio()
}

let audioRunning = false
function startAudio() {
    if (audioRunning) return;

    const audio = document.createElement("audio")
    audio.volume = 0.5
    audio.autoplay = true
    audio.loop = true
    audio.src = "assets/sounds/bgmModern.wav"
    document.body.appendChild(audio)
    audio.play().then(() => audioRunning = true)
}