import React, { useState } from 'react';
import { CiCamera } from "react-icons/ci";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="h-min">
      <div className="relative w-24 h-24">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-full object-cover rounded-full border-2 border-gray-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-full border-2 border-gray-300"></div>
        )}

        <label className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer">
          <CiCamera className="w-5 h-5 text-gray-600" />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
