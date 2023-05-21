import React from "react";
import profile from "../assets/profile.jpeg";

const Info = () => {
  const handleClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/boluwatifeo/", "_blank");
  };

  const handleClickEmail = () => {
    window.location.href = "mailto:bolexzyy@gmaill.com";
  };

  return (
    <section className="info">
      <div className="profile--container">
        {/* <img src={profile} className="profile" /> */}
      </div>

      <div className="info--text">
        <h1>Boluwatife Oyewumi</h1>
        <h3>Software Developer</h3>
        <p>github.com/Bolexzy</p>
      </div>

      <div className="btn--container">
        <button className="email-btn" onClick={handleClickEmail}>
          <i class="fa-regular fa-envelope"></i> Email
        </button>

        <button className="linkedin-btn" onClick={handleClickLinkedin}>
          <i class="fa-brands fa-linkedin"></i> Linkedin
        </button>
      </div>
    </section>
  );
};

export default Info;
