import React from "react";
//styled-components
import styled from "styled-components";
const primary_color = "blue";
const secondary_color = "red";
const padding = "4rem";
const StyledButton = styled.button`
  margin: 2em;
  font-size: 2.3rem;
  font-weight: 400;
  padding: ${padding};
  background-color: ${primary_color};
  &:hover {
    background-color: ${secondary_color};
    color: aliceblue;
    border-radius: 30px;
    
  }
`;
const Button = () => {
  return <StyledButton>Michi</StyledButton>;
};
export default Button;
