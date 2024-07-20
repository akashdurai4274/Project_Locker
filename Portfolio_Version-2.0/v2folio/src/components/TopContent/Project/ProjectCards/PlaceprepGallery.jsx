// src/Gallery.jsx
import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("placeprep.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 p-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            onClick={() => openModal(image)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <span className="text-lg text-white">{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <button
              className="top-0 right-0 mt-2 mr-2 text-xl text-black"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="relative max-w-[200px] h-[500px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
