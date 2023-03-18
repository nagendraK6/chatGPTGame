import React from "react";
import "./ProfilePictures.css";

const ProfilePictures = ({ images }) => {
  return (
    <div className="profile-pictures">
      {images.slice(0, 3).map((image, index) => (
        <img
          key={index}
          className="profile-picture"
          src={image}
          alt={`Profile ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ProfilePictures;
