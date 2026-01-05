import { RevealOnScroll } from "../RevealOnScroll";
import VideoComponent from "../VideoComponent";
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok, FaSpotify } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";


export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
    <VideoComponent />

      <RevealOnScroll>
        <div className="relative text-center z-30 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Neranjan Dissanayake
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am passionate musician and performer creating
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

            {/* Record Label Link */}
          </div>
                      <a
              href="https://distrokid.com/hyperfollow/nerajandissanayake/hamuwanu-ae"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10
                        px-6 py-3 rounded-full
                        bg-white/10 backdrop-blur-md border border-white/20
                        text-white font-medium
                        transition transform hover:-translate-y-1 hover:scale-105
                        hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            >
              <FaMusic className="text-blue-400" />
              <span>Official Record Label</span>
            </a>
        </div> 
      </RevealOnScroll>
    </section>
  );
};

