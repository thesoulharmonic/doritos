import React from "react";

// videos section wrapped in bootstrap and embedded videos 

export default function videos() {
  return (
<div className="container">
  <div className="row ">
  <div className="imageHeader"><img src="../img/videos.webp" alt="crisps"/></div>
  <div className="videos"><h2>Videos</h2></div>
    <div className="col-md-6">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YCLPiIAKqZY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <div className="col-md-6">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7Sh57oBoHCo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>

  );
}
