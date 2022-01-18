import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeadingWrapper = styled.h2`
  background-color: black;
  color: white;
  margin: 2rem 0 1rem;
  padding: 1rem 2rem;
  display: inline-block;
`;

function Heading({ children }) {
  return <HeadingWrapper>{children}</HeadingWrapper>;
}

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
