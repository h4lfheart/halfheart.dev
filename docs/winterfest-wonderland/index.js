window.onclick = function() {
    startAudio()
}

let audioRunning = false
function startAudio() {
    if (audioRunning) return;

    const audio = document.createElement("audio")
    audio.volume = 0.25
    audio.autoplay = true
    audio.loop = true
    audio.src = "../assets/sounds/Music_Loot.wav"
    document.body.appendChild(audio)
    audio.play().then(() => audioRunning = true)
}