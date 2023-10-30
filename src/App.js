import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(count);

  const onClickCount = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setMinus(count - 1);
  };
  return (
    <div className="App">
      <h1>React Counter</h1>
      <p>{count}</p>
      <button className="plus" onClick={onClickCount}>
        +
      </button>
      <button className="minus" onClick={onClickMinus}>
        -
      </button>
    </div>
  );
}
