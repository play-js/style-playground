import React from 'react';
// import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { PRIMARY_COLOR } from '.';

const Link = ({ className, children }) => (
  <a className={className} href="/about">
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: ${() => PRIMARY_COLOR};
  font-weight: bold;
`;

export default StyledLink;