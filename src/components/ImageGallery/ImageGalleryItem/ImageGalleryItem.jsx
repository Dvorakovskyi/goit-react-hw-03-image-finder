import React from 'react';
import { StyledImageGalleryItem, StyledImg } from './ImgGalleryItem.style';
const ImageGalleryItem = ({webformatURL, id, tags}) => {
  return (
    <StyledImageGalleryItem key={id}>
      <StyledImg src={webformatURL} alt={tags} />
    </StyledImageGalleryItem>
  );
};

export default ImageGalleryItem;
