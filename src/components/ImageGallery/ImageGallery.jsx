import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import { StyledImageGallery } from "./ImgGallary.styled";

const ImageGallery = ({data}) => {
    return (
        <StyledImageGallery>
            {data.map(({id, webformatURL, tags}) => 
                <ImageGalleryItem
                    data={data}
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                />   
            )}
        </StyledImageGallery>
    )
}

export default ImageGallery;