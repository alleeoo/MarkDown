import "./NavBar.css";

export default function NavBar({ handleReset }) {
  return (
    <div id="navBar">
      <h4> Mark Down Live editor</h4>
      <button id="resetBtn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
