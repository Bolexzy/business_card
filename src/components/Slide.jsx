import React from "react";
import badge from "../assets/introduction-to-cybersecurity.png";
import journal from "../assets/travel_journal.jpg";

const Slide = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="slide">
      <img
        src={badge}
        alt="cybersecurity badge"
        style={{ width: "6rem" }}
        onClick={() =>
          openInNewTab(
            "https://www.credly.com/badges/60749794-a39f-4fe1-83b8-b1d1e7e561cb/public_url"
          )
        }
      />

      <img
        src={journal}
        alt="travel journal"
        style={({ width: "6rem" }, { borderRadius: ".5rem" })}
        onClick={() =>
          openInNewTab("https://imaginative-dango-63fa75.netlify.app/")
        }
      />
    </div>
  );
};

export default Slide;
