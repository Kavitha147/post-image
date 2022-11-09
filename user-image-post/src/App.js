
import React,{useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import { connect } from "react-redux";
import PostPage from './components/Posts/post';
import ImagePage from './components/Images/image';
import LoginPage from './components/Login/login';
import { fetchPosts, fetchImages } from "./Action/action";


function App(props) {
  const [token, setToken] = useState();
  const { posts, images } = props;
  useEffect(()=>{
    const { dispatch } = props;
    dispatch(fetchPosts());
    dispatch(fetchImages());
  })

   if(!token){
    return <LoginPage setToken={setToken} />
   }

  return (
    <div className="App">
     <h1>Appliaction</h1>
     <Router>
     <Link to='/post-page'>Post Page</Link>
     <Link to='/image-page'>Image Page</Link>
      <Routes>
        <Route path='/post-page' element={<PostPage posts={posts}/>} /> 
        <Route path='/image-page' element={<ImagePage images={images}/>} /> 
      </Routes>
     </Router>
    </div> 
  );
}

const mapStateToProps = state => {
  const { postData, imageData } = state;
  return {
    posts: postData,
    images: imageData
  };
};


export default connect(mapStateToProps)(App);
