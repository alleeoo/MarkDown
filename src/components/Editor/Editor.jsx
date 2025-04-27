import "./Editor.css";
import { useState } from "react";
import ConvertText from "../../logic/convertText";
export default function Editor({ rows, cols }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    let val = event.target.value;
    setInput(val);
  };
  return (
    <div id="Editor">
      <div id="input">
        <label>Write your Mark Down here: </label>
        <textarea
          onChange={handleChange}
          onSubmit={(event) => {
            event.preventDefault;
          }}
        ></textarea>
      </div>
      <div id="output">
        <label>Output</label>
        <div id="outputFeild">
          <ConvertText text={input}></ConvertText>
        </div>
      </div>
    </div>
  );
}
