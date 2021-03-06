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

// Prev Song
const prevSong = () => {
  songIndex--;

  if(songIndex < 0) {
    songIndex = songs.length -1
  }
  loadSong(songs[songIndex])
  playSong()
}

// Next Song
const nextSong = () => {
  songIndex++;

  if(songIndex > songs.length -1) {
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

// Update progress bar
const updateProgress = (e) => {
  const {duration, currentTime} = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

// Set Progress Bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

// Change Song
prevBtn.addEventListener("click", prevSong)
nextBtn.addEventListener("click", nextSong)

// Time/song update
audio.addEventListener("timeupdate", updateProgress)

// Click on Progress bar
progressContainer.addEventListener("click", setProgress)

// Song ends
audio.addEventListener("ended", nextSong) 
