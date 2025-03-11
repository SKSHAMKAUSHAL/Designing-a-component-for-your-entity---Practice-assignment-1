// write the component code here
// write the component code here

// cart/components/Usercard.jsx
 import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRGQsIJQyU1kVGXC3Ugct4EJMfWmGHSQSlA&s"; // Dummy profile image
  const name = "CLOVE";
  const email = "Sks@gmail.com";
  const phone = "+91 75464xxxxx";
  const address = "24/7,new dehli";
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
      />
      <h2 className="text-lg font-semibold text-center mt-3">{name}</h2>
      <p className="text-sm text-gray-600 text-center">{email}</p>
      <p className="text-sm text-gray-600 text-center">{phone}</p>
      <p className="text-sm text-gray-600 text-center">{address}</p>
    </div>
  );
};

export default Usercard;