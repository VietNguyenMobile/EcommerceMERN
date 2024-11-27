import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
import styled from "styled-components";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const Button = styled.button({
    color: "grey",
  });

  return (
    <div>
      Hello World
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
