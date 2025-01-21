import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.carousel}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>
      <button onClick={handlePrev} style={styles.button}>
        {"<"}
      </button>
      <button onClick={handleNext} style={styles.button}>
        {">"}
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: "relative",
    width: "800px",
    margin: "auto",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  carousel: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    width: "100%",
  },
  slide: {
    minWidth: "100%",
    transition: "transform 0.5s ease-in-out",
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "18px",
    cursor: "pointer",
    zIndex: 1,
  },
};

export default Carousel;
