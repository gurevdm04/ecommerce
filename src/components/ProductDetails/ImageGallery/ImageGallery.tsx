import style from "./ImageGallery.module.scss";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={style.gallery}>
      <div className={style.thumbnail}>
        {images.map((url) => (
          <img
            key={url}
            src={url}
            alt=""
            onClick={() => setSelectedImage(url)}
          />
        ))}
      </div>
      <div className={style.image}>
        <img src={selectedImage} alt="" onClick={openModal} />
      </div>
      {isOpen && (
        <div className={style.modal} onClick={closeModal}>
          <img
            src={selectedImage}
            className={style.modalImg}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>
      )}
    </div>
  );
};
