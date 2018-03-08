import styled from 'styled-components';
import { PRIMARY_COLOR } from '.';

const Button = styled.button`
    background: ${props => props.primary ? PRIMARY_COLOR : 'white'};
    color: ${props => props.primary ? 'white' : PRIMARY_COLOR};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${PRIMARY_COLOR};
    border-radius: 3px;
`;

export default Button;