import "./styles.css";
import Button from "./components/button/button.js";
export default function App() {
  return (
    <div className="App">
      <h1>Jest Tutorial</h1>
      <h2>
        <div className="button-enclose">
          <Button label={"CLICK ME"} />
        </div>
      </h2>
    </div>
  );
}
