import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Title>
          Hello World
        </Title>
      </Wrapper>
    );
  }
}

export default App;
