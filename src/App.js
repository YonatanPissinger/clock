import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function useTimeDisplay() {
  const [mysec, setMySec] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setMySec(date.getSeconds().toString());
    }, 1000);
  }, []);
  return <h1 className="timeDisplay">{mysec}</h1>;
}

function App() {
  const timeDisplay = useTimeDisplay();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {timeDisplay}
      </header>
    </div>
  );
}

export default App;
