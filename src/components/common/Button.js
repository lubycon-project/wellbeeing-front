import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  
  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  
  ${props => props.halfWidth && 
  css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 50%;
    font-size: 1.125rem;
  `}
  
  ${props => props.fullWidth && 
    css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    width: 100%;
    font-size: 1.125rem;
  `}
  
  ${props => 
    props.cyan &&
    css`
        background: ${palette.cyan[5]};
        &:hover {
            background: ${palette.cyan[4]};
        }
    `}
    ${props =>
    props.green &&
    css`
        background: ${
    palette.green[0]};
        &:hover {
            background: ${palette.cyan[0]};
        }
    `}
    
    ${props =>
    props.blue &&
    css`

        background: ${palette.blue[0]};
        &:hover {
            background: ${palette.blue[0]};
        }
    `}
    
    ${props =>
    props.red &&
    css`
        background: ${
        palette.red[0]};
        &:hover {
            background: ${palette.red[0]};
        }
    `}
`;

const Button = props => <StyledButton {...props} />

export default Button;