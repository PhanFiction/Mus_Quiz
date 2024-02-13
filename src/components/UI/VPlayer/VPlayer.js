import ReactPlayer from "react-player";

export default function VPlayer({ 
  playerRef, songLink, isPlaying, 
  setDuration,
  setIsReady, setPlayed,
}) {

  return (
    <ReactPlayer
      ref={playerRef}
      url={songLink}
      playing={isPlaying}
      controls={true}
      onReady={setIsReady}
      onDuration={(videoDuration) => setDuration(videoDuration)}
      onProgress={(progress) => setPlayed(progress.playedSeconds)}
    />
  )
}