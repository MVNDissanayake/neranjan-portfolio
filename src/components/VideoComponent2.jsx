import myvideo2 from "../assets/WebCoverVideo2.mp4";

const VideoComponent2 = ({
  overlay = "bg-black/30",
  className = "",
}) => {
  return (
    <div
      id="videocomponent2"
      className={`relative w-full max-w-4xl h-[400px] rounded-2xl overflow-hidden ${className}`}
    >
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={myvideo2} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`}></div>
    </div>
  );
};

export default VideoComponent2;
