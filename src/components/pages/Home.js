import React from 'react';
import pic from "../images/group-of-women.jpeg";


export default function Home() {
  return (
    <div>
      <h1>Style Home</h1>
      <p>
      This page is all about how you "look"!
      </p>
      <img
      className="card-img-top"
      src={pic}
      alt="Card cap"
      style={{ width:800 }}
      />
      
    </div>
  );
}
