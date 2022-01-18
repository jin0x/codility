import React, { useState } from "react";
import Button from "../../primitives/button";
import Input from "../../primitives/input";
import { InputWrapper, RemainingTasks, List, ListItem } from "./styles";

const initialList = [
  { text: "First Item", complete: false },
  { text: "Second Item", complete: false },
  { text: "third Item", complete: false },
];

function Todo({ initialListItems }) {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(initialListItems);
  const [remainingItems, setRemainingItems] = useState(todos.length);

  React.useEffect(() => {
    const newTodos = [...todos];

    const remaining = newTodos.filter(function (item) {
      return item.complete === false;
    });

    setRemainingItems(remaining.length);
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleComplete = (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    addTodo(inputValue);
    setInputValue("");
  };

  const accessibleClick = (onClick) => (e) => {
    if (e.key === "Enter") {
      onClick(e);
    }
  };

  return (
    <div>
      <InputWrapper>
        <Input type="text" value={inputValue} onChange={handleInputChange} />
        <Button onClick={handleSubmit}>Add</Button>
      </InputWrapper>
      <RemainingTasks>{`Remaining ${remainingItems} out of ${todos.length} tasks`}</RemainingTasks>
      <List>
        {todos.map(({ text, complete }, i) => (
          <ListItem
            key={i}
            data-index={i}
            onClick={handleComplete}
            onKeyPress={accessibleClick(handleComplete)}
            tabIndex="0"
            complete={complete}
          >
            <div>{text}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

Todo.defaultProps = {
  initialListItems: initialList,
};

export default Todo;
