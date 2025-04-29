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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(input);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div id="parent">
      <NavBar handleReset={handleReset} handleCopy={handleCopy}></NavBar>
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
