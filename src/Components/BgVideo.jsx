import React from "react";
import bgvideo from "../Videos/MainBG.mp4";

const BgVideo = () => {
  return (
    <div className="relative">
      <video
        className="bgvideo h-[100vh] w-full absolute top-0 left-0 object-cover -z-10 mix-blend-overlay"
        src={bgvideo}
        autoPlay
        muted
        loop
        playsInline
      ></video>
    </div>
  );
};

export default BgVideo;
