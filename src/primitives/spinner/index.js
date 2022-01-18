import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const SpinnerLoader = styled(ClipLoader)``;

function Spinner(props) {
  return <SpinnerLoader {...props} />;
}

export default Spinner;
