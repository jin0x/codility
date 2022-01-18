import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: #ccc;
  font-size: 1rem;
  padding: 0.25rem 1rem;

  & + & {
    margin-left: 2rem;
  }

  &:hover {
    background-color: #ddd;
  }
`;

function Button({ children, ...props }) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
