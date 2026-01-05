import { RevealOnScroll } from "../RevealOnScroll";
import { FaInstagram, FaYoutube, FaFacebook, FaTiktok, FaSpotify } from "react-icons/fa";

export const About = () => {

const frontendSkills = ["React","Vue","TypeScript","TailwindCSS","Svelte",];
const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

    return <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
    <RevealOnScroll>  
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                About Me
              
            My name is Neranjan Dissanayake, and I am a professional Musician and Singer 
            with over 10 years of experience in the music industry. Over the years, I have 
            built a strong reputation through live performances, original compositions, and 
            consistent dedication to my craft.
            <br/>
            <br />

            I was born in Kandy, Sri Lanka, and received my education at Vidyartha College, 
            Kandy, where my passion for music and performance was nurtured and developed 
            from an early stage.
            <br />

            <br />
            I specialize in live performing and creating original music, 
            delivering energetic and emotionally engaging performances that connect 
            with diverse audiences. I have had the privilege of performing on several 
            well-known Sri Lankan television and radio platforms, including Sri Lanka 
            Broadcasting Corporation, ITN, Swarnawahini, Supreme TV, and numerous FM 
            channels across the country.
            <br />
            <br />
            In addition to solo work, I actively perform with my own music band, 
            K1 Live, providing professional live music experiences for events, shows, 
            and special programs.
            <br />
            <br />
            Creativity and discipline are at the core of my work ethic. 
            I believe that true artistry comes from originality 
            combined with professionalism, reliability, and respect for every project. 
            I am always committed to delivering high-quality performances that meet client 
            expectations and create memorable experiences.
            

            </p>
            
                    {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          
          <a
            href="https://www.instagram.com/neranjan.nd/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20"

          >
          <FaInstagram size={28} />
          </a>

          <a
            href="https://www.youtube.com/@Neranjan.Dissanayke"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20"

          >
          <FaYoutube size={28} />
          </a>

          <a
            href="https://facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20"

          >
          <FaFacebook size={28} />
          </a>

          <a
            href="https://open.spotify.com/artist/7LiCJKt4meHCkHvdLd9PGS?si=SSxwJv74Rjuuwk2Zt_TtEw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20"

          >
          <FaSpotify size={26} />
          </a>
          
        </div> 

            {/*
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                        <span
                        key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                        "
                        >
                          {tech}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - Sri lanka Institute of information teqnology 
                  (2017-2023)
                </li>
                <li>
                  Relevant Coursework: Network Engineering, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Pearlbay Sri Lanka (Pvt) Ltd (2022 - 2023){" "}
                  </h4>
                  <p>
                    Marketing Executive at Pearlbay (Pvt) Ltd with experience
                    coordinating institute marketing operations and sales activities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern Bps Premier Marketing PLC (2021 - 2022){" "}
                  </h4>
                  <p>
                    Marketing and Sales Manager at BPS Premier Marketing with proven
                    skills in sales, client handling, and market growth
                  </p>
                </div>
              </div>
            </div>
             */}
          </div> 
        </div>
      </RevealOnScroll>    
    </section>
}