import React,{useState, useEffect} from 'react';
import axios from 'axios';

const PostPage =(props)=>{
    const [postdata, setPostData] = useState([]);
    const {posts} = props;
 
    return(
        <div>
            <h1>Post Page</h1>
            {posts.map((items,index)=>(
                <div key={index}>
                    <p>{items.userId}</p>
                    <p>{items.title}</p>
                    <p>{items.body}</p>
                </div>
            ))}
            <p>{}</p>
        </div>
    )
}
export default PostPage;