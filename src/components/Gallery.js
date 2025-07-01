import React, { useState, useEffect } from "react";
import "./gallery.css";
import img1 from "./Logos/g1.JPG";
import img2 from "./Logos/g2.jpg";
import img4 from "./Logos/g3.jpg";
import img6 from "./Logos/g4.jpg";
import img7 from "./Logos/g5.jpg";
import img8 from "./Logos/g6.jpg";
import img9 from "./Logos/g7.png";
import img10 from "./Logos/g8.jpg";
import img11 from "./Logos/g9.jpg";

const images = [
  { src: img1, description: "Donation" },
  { src: img2, description: "Donation" },
  { src: img11, description: "Donation" },
  { src: img4, description: "Donation" },
  { src: img9, description: "Donation" },
  { src: img6, description: "Donation" },
  { src: img7, description: "Donation" },
  { src: img8, description: "Donation" },
  { src: img9, description: "Donation" },
  { src: img10, description: "Donation" },
  { src: img11, description: "Donation" },
  { src: img1, description: "Donation" },
  { src: img2, description: "Donation" },
  { src: img4, description: "Donation" },
  { src: img2, description: "Donation" },
];

const itemsPerPage = 5;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const showItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return images.slice(startIndex, endIndex);
  };

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, []); // ✅ Fixed: no unnecessary dependency

  return (
    <div id="gallery" className="tm-content tm-content-small-top">
      <div className="gallery-wrapper">
        <div className="heading-container">
          <h2 className="headingtest">Our Gallery</h2>
        </div>

        <div className="tm-gallery-container">
          <div className="gallery-grid">
            <div className="tm-gallery tm-mb-80">
              {showItems().map((item, index) => (
                <figure className="effect-goliath tm-gallery-item" key={index}>
                  <img src={item.src} alt={item.description || "Gallery image"} />
                  <figcaption>
                    <p>{item.description}</p>
                    <a href={item.src} className="magnific-popup">
                      View more
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="pagination">
            <div className="tm-paging tm-mb-130">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`tm-paging-link ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePaginationClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
