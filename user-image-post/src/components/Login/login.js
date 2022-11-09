import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

async function loginUser(credentials) {
  return fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}


const Form = styled.div`
   background-color: #15172b;
   border-radius: 20px;
   box-sizing: border-box;
   height: 300px;
   padding: 20px;
   width: 320px;
   `;
const Root = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  `;
const Input = styled.input`
  background-color: #303245;
  border-radius: 8px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  padding: 4px 20px 0;
  width: 100%;
  `;
const Label = styled.p`
color: white;
font-size: 20px;
`
const SubmitButton = styled.button`
background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 40px;
  margin-top: 38px;
  text-align: center;
  width: 100%;
  :hover{
    background: #72d6ff;
  }
`;

// Login Page
const LoginPage = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <>
      <center>
        <h1>Login</h1>
      </center>
      <Root>
        <Form>
          <form onSubmit={handleSubmit}>
            <label>
              <Label>Username</Label>
              <Input type="text" onChange={e => setUserName(e.target.value)} required />
            </label>
            <label>
              <Label>Password</Label>
              <Input type="password" onChange={e => setPassword(e.target.value)} required />
            </label>
            <div>
              <SubmitButton type="submit">Submit</SubmitButton>
            </div>
          </form>
        </Form>
      </Root>
    </>
  )
}


export default LoginPage;

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}