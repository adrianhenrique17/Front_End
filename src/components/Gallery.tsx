import React from "react";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.imageContainer}>
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
