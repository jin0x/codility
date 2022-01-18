import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  border: 1px solid ${(props) => (props.loading ? "#111" : "#ccc")};
  position: relative;
  width: max-content;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const Spinner = styled(ClipLoader)``;

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style: none;
`;

export const Error = styled.p``;
