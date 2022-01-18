import React from "react";
import PropTypes from "prop-types";
import Button from "../../primitives/button";

function Counter({ initialCount, step }) {
  const [counter, setCounter] = React.useState(initialCount);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);

  return (
    <div>
      <p>{counter}</p>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  initialCount: 42,
  step: 1,
};

export default Counter;
