import styled, { keyframes } from 'styled-components';

const btnAnimation = keyframes`
0% {opacity: 0.5}
100%{opacity: 1}
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
  &:hover {
    animation: 1s ${btnAnimation};
    background-color: pink;
  }
`;
