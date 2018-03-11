import React from 'react';
import styled from 'styled-components';
// import withComponent from 'styled-components';
import {PRIMARY_COLOR, SECONDARY_COLOR,} from 'components';
// import { Button } from 'components';

const Button = styled.button`
  display: inline-block;
  color: ${() => PRIMARY_COLOR};
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 3px;
`;

const Link = Button.withComponent('a');

const TomatoLink = Link.extend`
  color: tomato;
  border-color: tomato;
`;

const ExtendingStyles = () => (
  <div>
    <Button onClick={() => alert("Click!")}>Button</Button>
    <Link href="https://play-js.github.io/style-playground/">Link</Link>
    <TomatoLink href="https://play-js.github.io/style-playground/">TomatoLink</TomatoLink>
  </div>
);

export default ExtendingStyles;