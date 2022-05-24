import "./styles.css";
import Button from "./components/button/button.js";
import { useState } from "react";

export default function App() {
  const [val, setVal] = useState(false);
  return (
    <div className="App">
      <h1>Jest Tutorial</h1>
      <h2>
        <div className="button-enclose">
          <Button
            label={"CLICK ME"}
            toggler={(temp) => (temp ? setVal(true) : setVal(false))}
          />
        </div>
      </h2>
      {val ? <h2>Hi</h2> : <h2>Bye</h2>}
    </div>
  );
}
