import React from "react";

export default function Gallery() {
  return (
      <>
      <h2 className="gallery">Gallery</h2>
    <div className="container-img">
        <img
          src="https://i2.wp.com/shubhwed.com/wp-content/uploads/2021/05/indian-wedding-bride-marriage-4124755.jpg?w=1280&ssl=1"
          className="img1"
          alt=""
        />

        <img
          src="https://i0.wp.com/shubhwed.com/wp-content/uploads/2021/06/pexels-photo-1045541.jpeg?resize=1536%2C1024&ssl=1"
          className="img2"
          alt=""
        />

        <img
          src="https://i0.wp.com/shubhwed.com/wp-content/uploads/2021/06/pexels-keyur-mali-7153762-scaled.jpg?resize=1365%2C2048&ssl=1"
          className="img3"
          alt=""
        />
    </div>
    </>
  );
}
