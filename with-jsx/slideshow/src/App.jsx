import { useState } from "react";

const Counter = ({ intialCount }) => {
  const [count, setCount] = useState(intialCount);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <span>
        <h4>Button is clicked {count} times</h4>
      </span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const ThemeChanger = (props) => {
  const [isDefaultTheme, setTheme] = useState(true);
  const theme = isDefaultTheme
    ? { color: props.fg, backgroundColor: props.bg }
    : { color: props.bg, backgroundColor: props.fg };

  return (
    <div>
      <h1>Theme changer</h1>
      <div style={theme}>
        <h4>{props.message}</h4>
      </div>
      <button onClick={() => setTheme(!isDefaultTheme)}>Toggle theme!</button>
    </div>
  );
};

const slideStyle = {
  height: "100vh",
  width: " 100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Slide = ({ children }) => {
  const [childInFocus, setChildInFocus] = useState(0);
  return (
    <div style={slideStyle}>
      <button
        onClick={() => setChildInFocus((childInFocus + 1) % children.length)}
      >
        next
      </button>
      {children[childInFocus]}
      <button
        onClick={() => setChildInFocus((childInFocus - 1) % children.length)}
      >
        prev
      </button>
    </div>
  );
};

const App = () => (
  <div>
    <Slide>
      <Counter intialCount={0} />
      <ThemeChanger fg="black" bg="gold" message="Hello" />
    </Slide>
  </div>
);

export default App;
