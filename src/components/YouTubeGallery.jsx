import React from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: "_0yX3Bm_qok?si=n2oNlvZV3-M5LQYI",
    title: "Live Performance – National TV",
  },
  {
    id: "DhYjdn9hsz8?si=Blla7IXimoo-64xm",
    title: "Studio Session – Original Song",
  },
  {
    id: "KMobFJRyLug?si=UNBcso9DoGaO-9yb",
    title: "Cover Performance",
  },
    {
    id: "KMobFJRyLug?si=UNBcso9DoGaO-9yb",
    title: "Cover Performance",
  },
  
];

export default function YouTubeGallery() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
