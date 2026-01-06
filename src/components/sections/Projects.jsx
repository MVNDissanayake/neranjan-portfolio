import { RevealOnScroll } from "../RevealOnScroll";
import VideoComponent2 from "../VideoComponent2";
export const Projects = () => {
    
    return <section 
        id="projects"
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
        >
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-6 rounded-xl border border-white/10 
                                hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba
                                (59,130,246,0.2)] transition">

                    <h3 className="text-xl font-bold mb-2"> 🎤 K1 Live Music Band</h3>
                    <p className="text-gray-400 mb-4">
                        A professional live music band 
                        delivering energetic performances for concerts, 
                        weddings, corporate events, and special occasions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Weddings", "Concerts", "Tv Programs", "more..."].map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                           hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                        >
                            {tech}
                        </span>
                        ))}
                    </div>

                <div className="flex justify-between items-center">
                    <a
                    href="https://web.facebook.com/k1.Entertainment01/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                    View Project →
                    </a>
                </div>
            </div>

            <div
                className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
                "
            >
                <h3 className="text-xl font-bold mb-2">🎧 My Songs (Originals)</h3>
                <p className="text-gray-400 mb-4">
                   A collection of my original songs, 
                   showcasing my creativity, songwriting, 
                   composition, and musical identity.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Originals", "Covers", "Compositions..."].map((tech, key) => (
                    <span
                        key={key}
                        className="
                        bg-blue-500/10 text-blue-500 py-1 px-3 
                        rounded-full text-sm
                        transition
                        hover:bg-blue-500/20 hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                        "
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a
                    href="https://www.youtube.com/@Neranjan.Dissanayke"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                    View Project →
                    </a>
                </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">🎓 ND Music Academy</h3>
              <p className="text-gray-400 mb-4">
                A dedicated music academy focused on training students in vocals, 
                instruments, music theory, and performance skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vocal Training", "Artist Managment", "Piano", "Theory..."].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://web.facebook.com/k1.Entertainment01/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">ND Live Music Store</h3>
              <p className="text-gray-400 mb-4">
                A music equipment store providing instruments, 
                accessories, sound systems, and professional 
                gear for musicians and performers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["", "Guitars", "keyboards", "studio equickments" ,"More"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

                <div className="p-6 rounded-xl border border-white/10 
                                hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba
                                (59,130,246,0.2)] transition">

                    <h3 className="text-xl font-bold mb-2">🎙️ND Live Music Studio</h3>
                    <p className="text-gray-400 mb-4">
                        A professional recording and production 
                        studio offering high-quality audio 
                        recording, mixing, mastering,
                        and live session support.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Live Recordings", "Practises", "podcast", "Recording Location", "More..."].map((tech, key) => (
                        <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                           hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                        >
                            {tech}
                        </span>
                        ))}
                    </div>

                <div className="flex justify-between items-center">
                    <a
                    href="https://web.facebook.com/k1.Entertainment01/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                    View Project →
                    </a>
                </div>
            </div>

        </div>            
      </RevealOnScroll>
    </section>
};