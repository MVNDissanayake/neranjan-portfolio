import React from "react";
import myvideo from "../assets/WebCoverVideo.mp4";

const VideoComponent = () => {
  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="WebCoverVideo.mp4"/>
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>
    </>
  );
};

export default VideoComponent;

