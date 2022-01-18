import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export const Wrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled.div`
  border: 1px solid ${(props) => (props.loading ? "#111" : "#ccc")};
  position: relative;
  width: max-content;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  right: 0.25rem;
  top: 0.5rem;
`;

export const List = styled.ul`
  background-color: #eee;
  width: 240px;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
`;

export const Error = styled.p`
  color: red;
  font-size: 1rem;
`;
