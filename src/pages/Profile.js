
// src/pages/Profile.js
import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  const [favoriteToy, setFavoriteToy] = useState('Teddy Bear');

  const changeToy = () => {
    const newToy = prompt("What's your new favorite toy?");
    if (newToy) {
      setFavoriteToy(newToy);
    }
  };

  return (
    <div className="container">
      <h1>User Profile:Sisanda Mavuso</h1>
      <p>Your favorite toy is: <strong>{favoriteToy}</strong></p>
      <button onClick={changeToy}>Change Favorite Toy</button>
    </div>
  );
};

export default Profile;
