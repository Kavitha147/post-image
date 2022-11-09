import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
background: skyblue;
width: 50%;
height: 230px;
margin: auto;
align-items: center;
`;
const Text = styled.p`
color: white;
font-size: 20px;
`;
const Heading = styled.h3`
background: #ec6f6f;
color: #323030;
`
//Rendering Post Component
const PostPage = (props) => {
    const { posts } = props;
    return (
        <div>
            <h1>Post Page</h1>
            {posts.map((items, index) => (
                <Wrapper key={index}>
                    <Heading>Title</Heading>
                    <Text>{items.title}</Text>
                    <Heading>Body</Heading>
                    <Text>{items.body}</Text>
                </Wrapper>
            ))}
        </div>
    )
}
export default PostPage;