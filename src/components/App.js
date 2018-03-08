import React from 'react';
import { Wrapper, Title, Input, Button } from 'components';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper className="App">
          <Title>
            Hello World
        </Title>

        </Wrapper>
        <Input placeholder="Input here" type="text" />
        <Input
          placeholder="Input
          here"
          type="text"
          // value="Hi There!" // error
          defaultValue="Hi There!" 
        />
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </React.Fragment>
    );
  }
}

export default App;
