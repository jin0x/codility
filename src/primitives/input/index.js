import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  background-color: #fff;
  outline: 1px solid #ccc;
  font-size: 1rem;
  padding: 0.25rem 1rem;

  &:hover {
    background-color: #fafafa;
  }
`;

function Input(props) {
  return <InputWrapper {...props} />;
}

export default Input;
