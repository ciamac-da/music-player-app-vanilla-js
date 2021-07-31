const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")
const cover = document.getElementById("cover")


// Song titles
const songs = ["hey", "summer", "ukulele"]

// Keep track of song
let songIndex = 2

// Update song details
const loadSong = (song) => {
title.innerText = song
audio.src = `assets/music/${song}.mp3`
cover.src = `assets/images/${song}.jpg`
}
// Initially load song details into DOM
loadSong(songs[songIndex])


// Play song
const playSong = () => {
  musicContainer.classList.add("play")
  playBtn.querySelector("i.fas").classList.remove("fa-play")
  playBtn.querySelector("i.fas").classList.add("fa-pause")
  audio.play()
}

// Pause song
const pauseSong = () => {
  musicContainer.classList.remove("play")
  playBtn.querySelector("i.fas").classList.add("fa-play")
  playBtn.querySelector("i.fas").classList.remove("fa-pause")
  audio.pause()
}

// Event listeners
playBtn.addEventListener("click", ()=> {
  const isPlaying = musicContainer.classList.contains("play")
  if(isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})
