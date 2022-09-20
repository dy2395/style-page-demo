import React from 'react';

export default function Outfit(apps) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div>
    <h1>Clothing</h1>
    <h3>Pick a style:</h3>
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Style: Gym,business,modern,chic,artsy,sexy</h5>
          <p className="card-text">Brief description:{apps.description}</p>
          <a href="#" className="btn btn-primary">
            Link:
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}