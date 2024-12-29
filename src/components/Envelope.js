import React, { useState } from "react";
import "../css/Envelope.css";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCard = () => {
    setIsOpen(true);
    playMusic();
  };

  const playMusic = () => {
    const audio = new Audio("/assets/music1.mp3");
    audio.loop = true;
    audio.play();
  };

  return (
    <div className="card-container">
      <div className={`card ${isOpen ? "open" : ""}`} onClick={openCard}>
        <div className="card-front">
          <h2>🎉 Happy New Year 🎉</h2>
          <p>Tap to open</p>
        </div>
        <div className="card-inside">
          <h1>🎆 Cheers to 2025! 🎆</h1>
          <p>
            Wishing you a year filled with happiness, success, and unforgettable
            moments. Let’s make this New Year amazing together!
          </p>
          <p className="signature">~ From Your Best Firend</p>
        </div>
      </div>
      {isOpen && <div className="confetti"></div>}
    </div>
  );
};

export default Envelope;
