import React from 'react';

const ImageGalleryItem = ({webformatURL, id, tags}) => {
  return (
    <li key={id} className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
