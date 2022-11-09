import React from 'react';

//Image Rendering component
const ImagePage = (props) => {
    const { images } = props;

    return (
        <div>
            <h1>Image Page</h1>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.url} alt='images' />
                </div>
            ))}
        </div>
    )
}
export default ImagePage;