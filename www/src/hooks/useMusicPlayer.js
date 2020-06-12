import { useContext } from "react"
import { MusicPlayerContext } from "../context/MusicPlayerContext"

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext)

  function fmtMSS(s) {
    s = Math.floor(s)
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s
  }

  function makeAudio(tracks) {
    const ARR = new Array()
    for (let i = 0; i <= tracks.length; i++) {
      const au = document.createElement("audio")
      ARR.push(au)
    }
    console.log("makeAudio -> ARR", ARR)
    tracks.forEach((track, i) => {
      //   ARR[i] = document.createElement("audio")
      //   console.log("ARR is " + ARR[i])
      ARR[i].src = track.file
      ARR[i].addEventListener("loadedmetadata", function () {
        setState(state => ({
          ...state,
          tracks: state.tracks.concat(fmtMSS(ARR[i].duration)),
        }))
      })
    })
  }
  //   function makeAudio(tracks) {
  //     for (let i = 0; i <= tracks.length; i++) {
  //       const auARR = new Array(tracks.length)
  //       if (tracks.length) {
  //         auARR.push(tracks[i])
  //       }
  //       console.log(auARR)
  //     }
  //   }

  //) for (let i = 0; i <= tracks.length; i++) {
  //   console.log(track.audioPlayer)
  // }

  // tracks.map((track, i) =>
  // console.log("getTrackLength -> track, i", track, i)

  //   state.audioPlayer[i].addEventListener("loadedmetadata", function () {
  //     const seconds = state.audioPlayer[i].duration
  //     setState(state => ({ ...state, duration: fmtMSS(seconds) }))

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
