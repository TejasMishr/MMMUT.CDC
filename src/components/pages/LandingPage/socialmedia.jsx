import React from "react";
import "./SocialIcons.css"; // Import the CSS file

const SocialIcons = () => {
  return (
    <div className="Amain">
    <div className="wrapper">
      <div className="icon telegram">
        <div className="tooltip">Telegram</div>
        <span>
          <i className="fab fa-telegram"></i>
        </span>
      </div>
      <div className="icon youtube">
        <div className="tooltip">Youtube</div>
        <span>
          <i className="fab fa-youtube"></i>
        </span>
      </div>
      <div className="icon linkedin">
        <div className="tooltip">Linkedin</div>
        <span>
          <i className="fab fa-linkedin"></i>
        </span>
      </div>
      <div className="icon instagram">
        <div className="tooltip">Instagram</div>
        <span>
          <i className="fab fa-instagram"></i>
        </span>
      </div>
    </div>
    </div>
  );
};

export default SocialIcons;