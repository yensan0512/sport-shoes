import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components/macro';
import Menu from './component/Menu';
import Container from './component/Container';

const Wrapper = styled.div`
  background:var(--white);
  height:100vh;
  width:100vw;

`;



function App() {
  return (
    <Wrapper>
      <Menu />
      <Container />
    </Wrapper>
  );
}

export default App;
