// import React, { useState, useContext } from 'react';
// import { ProfileContext } from '../contexts/ContextProvider';

// const ChangeProfilePicture = () => {
//   const { updateProfilePic } = useContext(ProfileContext);

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//   };

//   const handleImageUpload = () => {
//     if (selectedImage) {
//       // Call the updateProfilePic function from your context
//       updateProfilePic(selectedImage);
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="bg-white shadow-md rounded-lg p-4">
//         <h2 className="text-xl font-semibold mb-4">Change Profile Picture</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Select Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             onChange={handleImageChange}
//           />
//         </div>
//         <button
//           type="button"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//           onClick={handleImageUpload}
//         >
//           Upload
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChangeProfilePicture;

