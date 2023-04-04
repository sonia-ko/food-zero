import classes from "./VideoSection.module.css";
import ReactPlayer from "react-player";
import React, { useRef } from "react";
import toast from "../../../assets/about/toast.png";

interface VideoSectionProps {
  video?: string;
}

const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

const VideoSection: React.FC<VideoSectionProps> = ({ video }) => {
  const playerRef = useRef(null);

  return (
    <div className={`${classes.container} `}>
      <ReactPlayer
        width="100%"
        height="100%"
        ref={playerRef}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        controls={true}
        config={{ file: { attributes: { poster: toast } } }}
      />
    </div>
  );
};

export default VideoSection;
