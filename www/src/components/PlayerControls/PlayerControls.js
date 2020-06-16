import React, { useContext } from "react"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import useMusicPlayer from "../../hooks/useMusicPlayer"

const PlayerControls = () => {
  const [state, setState] = useContext(MusicPlayerContext)
  const {
    isPlaying,
    playTrack,
    currentTrackName,
    togglePlay,
    currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer()
  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <marquee>{currentTrackName}</marquee>
        </div>
        <div>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playPreviousTrack}
            disabled={!currentTrackName}
          >
            STEP BACK
          </button>
          {!currentTrackName ? (
            <button onClick={() => playTrack(0)}>'PLAY'</button>
          ) : (
            <button onClick={togglePlay} disabled={!currentTrackName}>
              {isPlaying ? "PAUSE" : "PLAY"}
            </button>
          )}

          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playNextTrack}
            disabled={!currentTrackName}
          >
            STEP FORWARD
          </button>
        </div>
      </div>
    </>
  )
}

export default PlayerControls
