import React, { useContext, useState } from 'react';
import { context } from '../../main.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HouseImages = () => {
  const { hostDetails, setHostDetails } = useContext(context);
  const [coverImage, setCoverImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState('');
  const [otherImagesPreviews, setOtherImagesPreviews] = useState([]);
  const navigate = useNavigate();

  // Handle Cover Image Change
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setCoverImagePreview(URL.createObjectURL(file)); // Create preview URL
    }
  };

  // Handle Other Images Change
  const handleOtherImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setOtherImages(files);
    setOtherImagesPreviews(files.map((file) => URL.createObjectURL(file))); // Create preview URLs
  };

  // Handle Next Button Click (Upload Images)
  const handleNext = async () => {
    const formData = new FormData();
    formData.append('coverImage', coverImage);
    otherImages.forEach((file) => {
      formData.append('otherImages', file);
    });

    try {
      // Upload the images
      const response = await axios.post(
        'http://localhost:3000/uploads', // Update with correct backend URL
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // For file uploads
          },
          withCredentials: true, // Include credentials (e.g., cookies)
        }
      );
      
      // Handle successful upload
      console.log('Upload success:', response.data);
      // Assuming the backend responds with image paths, update the hostDetails state
      setHostDetails({
        ...hostDetails,
        coverImage: response.data.coverImage,
        otherImages: response.data.otherImages,
      });
      
      // Navigate to next step
      navigate('/landlord/PublishHouse'); // Adjust this route based on your app's flow
    } catch (error) {
      console.error('Error uploading images:', error.response?.data || error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Upload House Images</h2>

      {/* Cover Image Upload */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Cover Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleCoverImageChange}
          className="block w-full"
        />
        {coverImagePreview && (
          <img
            src={coverImagePreview}
            alt="Cover Preview"
            className="mt-2 w-48 h-32 object-cover"
          />
        )}
      </div>

      {/* Other Images Upload */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Other Images:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleOtherImagesChange}
          className="block w-full"
        />
        <div className="flex mt-2 gap-2">
          {otherImagesPreviews.map((previewUrl, index) => (
            <img
              key={index}
              src={previewUrl}
              alt={`Other Preview ${index + 1}`}
              className="w-32 h-24 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default HouseImages;
