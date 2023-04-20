import React from "react";
import classes from "./VideoButton.module.css";

interface VideoButtonProps {
  onClick: () => void;
}

const VideoButton: React.FC<VideoButtonProps> = ({ onClick }) => {
  return (
    <button className={classes.container}>
      <svg
        onClick={onClick}
        // width="142"
        // height="142"
        viewBox="0 0 142 142"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="71" cy="71" r="69" stroke="white" strokeWidth="4" />
        <circle
          opacity="0.32"
          cx="71"
          cy="71"
          r="69"
          fill="black"
          stroke="white"
          strokeWidth="4"
        />
        <path
          d="M63 50.7028L90.6224 71L63 91.2972L63 50.7028Z"
          stroke="white"
          strokeWidth="4"
        />
      </svg>
    </button>
  );
};

export default VideoButton;
