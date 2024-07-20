import React, { useState } from "react";

export function Certificate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const data = [
    {
      imageLink: "SAH.jpg",
      quote: "This is a certificate for outstanding performance in \"Smart Agni hackathon\".",
    },
    {
      imageLink: "hyeper.jpg",
      quote: "This certificate recognizes exemplary achievements in \"Web Hackathon\"",
    },
    {
      imageLink: "Cryptrix.jpg",
      quote: "Awarded for Web \"Development\" exceptional skills demonstrated in the Event \"Cryptrix\"",
    },
    {
      imageLink: "Lucas.jpg",
      quote:
        "This certificate is presented for remarkable contributions in \"Lucas TVS\" for the Best Solution.",
    },
    {
      imageLink: "Anand.jpg",
      quote: "Recognition for excellence in the Idea Presentation About \"3D Internet\"",
    },
    {
      imageLink: "placecrack.jpg",
      quote: "Led a placement Cracking session for our Juniours on \"aptitude, technical skills, soft skills, resume building, and portfolio development\", empowering them to secure their dream jobs.",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    const img = new Image();
    img.src = image.imageLink;
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setImageDimensions({ width: 0, height: 0 });
  };

  return (
    <div className="p-10 lg:w-full max-h-[650px] lg:h-auto overflow-auto">
      <span className="text-3xl font-bold font-rajdhani">Certificates</span>
      <hr className="h-2 mt-2 rounded-lg w-[160px] bg-violet-500" />
      <div className="mt-10 lg:w-full w-[300px] grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((image, index) => (
          <div key={index} onClick={() => openModal(image)}>
            <img
              className="object-cover object-center w-full h-auto max-w-full border-4 rounded-lg shadow-lg cursor-pointer lg:h-40 border-grey-500"
              src={image.imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-4 mx-4 bg-white rounded-lg">
            <img
              src={selectedImage.imageLink}
              alt="Selected"
              className="object-contain w-full h-auto rounded-lg"
              style={{ maxHeight: "50vh" }}
            />
            <p className="mt-4 text-center">{selectedImage.quote}</p>
            <button
              onClick={closeModal}
              className="flex justify-end px-4 py-2 mt-4 text-white rounded-lg bg-violet-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
