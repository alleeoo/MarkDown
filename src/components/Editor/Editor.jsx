import "./Editor.css";

import ConvertText from "../../logic/convertText";
export default function Editor({ input, changeInput }) {
  const handleChange = (event) => {
    let val = event.target.value;
    changeInput(val);
  };
  return (
    <div id="Editor">
      <div id="input">
        <label>Write your Mark Down here: </label>
        <textarea
          value={input}
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
