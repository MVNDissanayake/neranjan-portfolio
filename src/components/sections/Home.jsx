import { RevealOnScroll } from "../RevealOnScroll";
import WebCoverVideo from "../../Assets/WebCoverVideo.mp4";
import VideoComponent from "../VideoComponent";
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok, Fadis } from "react-icons/fa";

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

        {/* Social Media Links */}
<div className="flex justify-center gap-6 mt-8">
  <a
    href="https://instagram.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-pink-500 transition transform hover:scale-110"
  >
    <FaInstagram size={28} />
  </a>

  <a
    href="https://youtube.com/@YOUR_CHANNEL"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-red-500 transition transform hover:scale-110"
  >
    <FaYoutube size={28} />
  </a>

  <a
    href="https://facebook.com/YOUR_PAGE"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-blue-500 transition transform hover:scale-110"
  >
    <FaFacebook size={28} />
  </a>

  <a
    href="https://tiktok.com/@YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-gray-200 transition transform hover:scale-110"
  >
    <FaTiktok size={26} />
  </a>
</div>

      </RevealOnScroll>
    </section>
  );
};

