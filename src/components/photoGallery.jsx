import React, { useState } from "react";
import photo1 from "../assets/images/photo1.png";
import photo2 from "../assets/images/photo2.png";
import photo3 from "../assets/images/photo3.png";
import photo4 from "../assets/images/photo4.png";
import photo5 from "../assets/images/photo5.png";
import photo6 from "../assets/images/photo6.png";

const photos = [
  { id: 1, src: photo1, alt: "Photo 1" },
  { id: 2, src: photo2, alt: "Photo 2" },
  { id: 3, src: photo3, alt: "Photo 3" },
  { id: 4, src: photo4, alt: "Photo 4" },
  { id: 5, src: photo5, alt: "Photo 5" },
  { id: 6, src: photo6, alt: "Photo 6" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="p-4">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedPhoto(photo.src)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt="Selected"
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
