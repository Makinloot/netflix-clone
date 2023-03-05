import React from "react";

const Video: React.FC<{
  img: string;
  video: string;
  className?: string;
}> = ({ img, video, className}) => {
  return (
    <div className="About-img">
      <img src={img} />
      <video autoPlay playsInline muted loop className={className}>
        <source
          src={video}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
