import { useRef, useState } from "react";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

import track1 from "../assets/music/track1.mp3";
import track2 from "../assets/music/track2.mp3";
import track3 from "../assets/Music/track3.mp3";
import track4 from "../assets/Music/track4.mp3";


const tracks = [
  { title: "Unmadani K1live Cover", src: track1 },
  { title: "Hamuwunu Ae", src: track2 },
  { title: "Saragaye K1live Cover", src: track3 },
  { title: "Let it be", src:  track4},

];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();

    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    setCurrentTrack(next);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 0);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + tracks.length) % tracks.length;
    setCurrentTrack(prev);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 0);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50
                    bg-white/10 backdrop-blur-md border border-white/20
                    rounded-full px-4 py-3 flex items-center gap-4 shadow-lg">

      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
      />

      <button onClick={prevTrack} className="text-white hover:text-blue-400">
        <FaStepBackward />
      </button>

      <button
        onClick={playPause}
        className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center
                   text-white hover:bg-blue-600 transition"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <button onClick={nextTrack} className="text-white hover:text-blue-400">
        <FaStepForward />
      </button>

      <span className="text-white text-sm hidden md:block">
        {tracks[currentTrack].title}
      </span>
    </div>
  );
};

export default MusicPlayer;
