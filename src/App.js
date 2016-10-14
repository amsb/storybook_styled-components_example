import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const Main = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const Headline = styled.h2``;

const Content = styled.p`
    font-size: large;
`;


class App extends Component {
  render() {
    return (
      <Main>
        <Header>
          <Logo src={logo} alt="logo"/>
          <Headline>Welcome to React</Headline>
        </Header>
        <Content>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Content>
      </Main>
    );
  }
}

export default App;
