import { useEffect, useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";

import Editor from "./components/Editor/Editor.jsx";

function App() {
  const [input, setInput] = useState("");

  const changeInput = (input) => {
    setInput(input);
  };
  const handleReset = () => {
    setInput("");
  };

  return (
    <div id="parent">
      <NavBar handleReset={handleReset}></NavBar>
      <div id="body">
        <Editor
          input={input}
          changeInput={changeInput}
          handlReset={handleReset}
        ></Editor>
      </div>
    </div>
  );
}

export default App;
