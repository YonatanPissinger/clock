import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function useTimeDisplay() {
  const [mysec, setMySec] = useState("");
  useEffect(() => {
    setInterval(() => {
      Axios.get("/api/time").then((response) => {
        setMySec(response.data.message);
      });
    }, 1000);
  }, []);
  return <h1 className="timeDisplay">{mysec}</h1>;
}

function useApi() {
  const [response, setResponse] = useState("loading...");
  useEffect(() => {
    Axios.get("/api/yonatan").then((response) => {
      setResponse(response.data.message);
    });
  }, []);
  return <p className="api">{response}</p>;
}

function App() {
  const timeDisplay = useTimeDisplay();
  const api = useApi();
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
        {api}
      </header>
    </div>
  );
}

export default App;
