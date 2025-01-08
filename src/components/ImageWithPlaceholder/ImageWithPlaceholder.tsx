import React, { useState } from "react";

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
}

export const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  placeholder = "https://via.placeholder.com/150",
  className,
}) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <img
          src={placeholder}
          alt="placeholder"
          className={className}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      )}

      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </>
  );
};
