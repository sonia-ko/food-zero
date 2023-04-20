import React from "react";
import classes from "./VideoOverlay.module.css";
import VideoButton from "./VideoButton";
import toast from "../../../assets/about/toast.png";

interface VideoOverlayProps {
  onPlay: () => void;
  title: string;
  subtitle: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  onPlay,
  title,
  subtitle,
}) => {
  return (
    <div
      style={{
        background: `url(${toast}) center/cover no-repeat fixed`,
      }}
      className={classes.overlay}
    >
      <h2 className="text-white text-centered">{title}</h2>
      <p className="text-white text-centered pb-large">{subtitle}</p>
      <VideoButton onClick={onPlay} />
    </div>
  );
};

export default VideoOverlay;
