import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor.jsx";

function App() {
  return (
    <div id="parent">
      <div id="navBar">
        <h4> Mark Down Live editor</h4>
      </div>
      <div id="body">
        <Editor></Editor>
      </div>
    </div>
  );
}

export default App;
