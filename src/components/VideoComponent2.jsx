import myvideo2 from "../assets/WebCoverVideo2.mp4";

const VideoComponent2 = ({ src, overlay = "bg-black/30" }) => {

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
          <source src={myvideo2} type="video/mp4" />
          
        </video>
        
        {/* Overlay */}
         <div className="absolute inset-5 bg-black/5 z-10 pointer-events-none"></div>

        <div
        className={`absolute inset-0 ${overlay} z-10 pointer-events-none`}
      ></div>
          
        </>
    );
};

export default VideoComponent2;