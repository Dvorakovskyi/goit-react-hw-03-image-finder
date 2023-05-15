import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({data}) => {
    return (
        <ul>
            {data.map(({id, webformatURL, tags}) => 
                <ImageGalleryItem
                    data={data}
                    key={id}
                    webformatURL={webformatURL}
                    tags={tags}
                />   
            )}
        </ul>
    )
}

export default ImageGallery;