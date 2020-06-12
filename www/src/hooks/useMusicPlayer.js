import { useContext } from "react"
import { MusicPlayerContext } from "../context/MusicPlayerContext"

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)
  // Convert number to minutes and seconds
  function fmtMSS(s) {
    s = Math.floor(s)
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s
  }
  // Get the length of the audio track
  function makeAudio(tracks) {
    let audioArr = new Array()
    tracks.forEach(({ file }) => {
      console.log(file)
      const audio = document.createElement("audio")
      audio.src = file
      audio.addEventListener("loadedmetadata", function () {
        audioArr.push([audio.duration])
        console.log("makeAudio -> audioArr", audioArr)
        setState(state =>
          Object.assign(
            {},
            state,
            tracks.map((track, index) =>
              Object.assign(track, { duration: fmtMSS(audioArr[index]) })
            )
          )
        )
      })
    })
  }

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay()
    } else {
      state.audioPlayer.pause()
      state.audioPlayer = new Audio(state.tracks[index].file)
      state.audioPlayer.play()
      setState(state => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }))
    }
  }

  function stopPlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause()
    } else {
      return
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause()
    } else {
      state.audioPlayer.play()
    }
    setState(state => ({ ...state, isPlaying: !state.isPlaying }))
  }
  return {
    stopPlay,
    togglePlay,
    playTrack,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    isPlaying: state.isPlaying,
    trackList: state.tracks,
    makeAudio,
  }
}

export default useMusicPlayer
