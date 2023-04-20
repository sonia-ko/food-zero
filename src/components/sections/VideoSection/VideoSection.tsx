import classes from "./VideoSection.module.css";
import ReactPlayer from "react-player";
import React, { useRef, useState } from "react";
import VideoOverlay from "./VideoOverlay";

interface VideoSectionProps {
  video?: string;
  title: string;
  subtitle: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  video,
  title,
  subtitle,
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    console.log("playing");
    playerRef.current?.getInternalPlayer()?.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    playerRef.current?.getInternalPlayer()?.pause();
  };

  return (
    <div className={`${classes.container} `}>
      <ReactPlayer
        width="100%"
        height="100%"
        ref={playerRef}
        playing={isPlaying}
        url={video}
        style={{ position: "absolute", top: 0, left: 0, zIndex: "0" }}
        controls={true}
        onPlay={handlePlay}
        onPause={handlePause}
      />
      {!isPlaying && (
        <VideoOverlay title={title} subtitle={subtitle} onPlay={handlePlay} />
      )}
    </div>
  );
};

export default VideoSection;
