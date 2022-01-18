import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-bottom: 0.25rem;
`;

export const RemainingTasks = styled.p`
  font-size: 0.875rem;
`;

export const List = styled.ul`
  font-size: 1rem;
  line-height: 1.4;
  margin-top: 1rem;
`;

export const ListItem = styled.li`
  cursor: pointer;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;
