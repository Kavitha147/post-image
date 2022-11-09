
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import { connect } from "react-redux";
import styled from 'styled-components';
import PostPage from './components/Posts/post';
import ImagePage from './components/Images/image';
import LoginPage from './components/Login/login';
import { fetchPosts, fetchImages } from "./Action/action";

const LinkElements = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.link{
  background: skyblue;
  width: 30%;
  height: 50px;
  text-align: center;
  text-decoration: none;
  padding: 30px;
  color: white;
  font-size: 20px;
  :hover{
    background: #72d6ff;
  }
}
`;


function App(props) {
  const [token, setToken] = useState('');
  const { posts, images } = props;
  useEffect(() => {
    const { dispatch } = props;
    dispatch(fetchPosts());
    dispatch(fetchImages());
  })

<<<<<<< HEAD
  if (!token) {
    return <LoginPage setToken={setToken} />
  }
=======
   if(!token){
    return <LoginPage setToken={setToken} />
   }
>>>>>>> 610e8a10903cd1c3edc7916ffffd62127baf5809

  return (
    <div className="App">
      <h1>Appliaction</h1>
      <Router>
        <LinkElements>
          <Link to='/post-page' className='link'>Post Page</Link>
          <Link to='/image-page' className='link'>Image Page</Link>
        </LinkElements>
        <Routes>
          <Route path='/post-page' element={<PostPage posts={posts} />} />
          <Route path='/image-page' element={<ImagePage images={images} />} />
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
