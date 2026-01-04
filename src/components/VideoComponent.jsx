import myvideo from "../assets/WebCoverVideo.mp4";

const VideoComponent = () => {
  return (
    <>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={myvideo} type="video/mp4" />
        <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none"></div>
      </video>

      {/* Dark Overlay */}
      
    </>
  );
};

export default VideoComponent;


