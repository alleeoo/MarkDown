import "./NavBar.css";

export default function NavBar({ handleReset, handleCopy }) {
  return (
    <div id="navBar">
      <h4> Mark Down Live editor</h4>
      <button className="Btn" onClick={handleReset}>
        Reset
      </button>
      <button className="Btn" onClick={handleCopy}>
        Copy To clipboard
      </button>
    </div>
  );
}
