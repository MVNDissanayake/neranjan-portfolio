import { RevealOnScroll } from "../RevealOnScroll";
import WebCoverVideo from "../../Assets/WebCoverVideo.mp4";


export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={WebCoverVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <RevealOnScroll>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi I'm Neranjan Dissanayake
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am Neranjan Dissanayake, a passionate musician and performer creating
            soulful music that connects emotions, stories, and audiences through sound.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Listen to My Music
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition
              hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              Watch Live Performances
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

