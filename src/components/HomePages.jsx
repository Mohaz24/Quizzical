import React from "react";
import { Link } from "react-router-dom";
import blobOne from '../assets/blob-one.png'
import blobTwo from '../assets/blob-two.png'

export default function HomePage() {
  return (
    <div>
      <img className="blob-1" src={blobOne} alt="logo-1" />
      <img className="blob-2" src={blobTwo} alt="logo-2" />
      <div className="home-page-container">
        <h2>Quizzical</h2>
        <p>Some description if needed</p>
        <Link to="/quiz">Start quiz</Link>
      </div>
    </div>
  );
}
