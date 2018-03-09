import React from 'react';
import { Wrapper, Title, Input, Button, StyledLink } from 'components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Wrapper className="App">
            <Title>
              Hello World
          </Title>
          </Wrapper>
          <Input placeholder="Input here" type="text" />
          <Input
            placeholder="Input here"
            type="text"
            // value="Hi There!" // error
            defaultValue="Hi There!"
          />
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <br />
          <h2>Link</h2>
          <Link to="/">Go to home</Link>
          <br />
          <StyledLink>StyledLink Go to about</StyledLink>
          <Route exact path="/" component={() => <div>home</div>}/>
          <Route path="/about" component={() => <div>about</div>}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
