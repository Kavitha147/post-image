import React,{useState, useEffect} from 'react';
import axios from 'axios';


const ImagePage =(props)=>{
    const {images} = props;
    const [imageData, setImageData] = useState([]);

    // https://jsonplaceholder.typicode.com/photos
  
    return(
        <div>
            <h1>Image Page</h1>
            {images.map((image,index)=>(
                <div key={index}>
                    <img src={image.url} alt='images' />
                </div>
            ))}

        </div>
    )
}
export default ImagePage;