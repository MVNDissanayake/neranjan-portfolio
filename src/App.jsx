import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/contact";
import "./index.css";
import MusicPlayer from "./components/MusicPlayer";
import VideoComponent2 from "./components/VideoComponent2";
import Footer from "./components/footer";
import PhotoGallery from "./components/photoGallery";
 
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <VideoComponent2 className="mx-auto" />
        <Projects />
        <div>
          <h1 className="text-3xl font-bold text-center my-8">My Portfolio Gallery</h1>
          <PhotoGallery />
        </div>
        <Contact />
        <MusicPlayer />
        <Footer />
        

      </div>
    </>
    
  );
}

export default App;
