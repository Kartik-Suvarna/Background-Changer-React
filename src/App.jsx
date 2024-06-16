import { useEffect, useState } from "react";
import './main.css'
function App() {
  const [pickColor, setPickColor] = useState("#F423a4");

  useEffect
  document.body.style.backgroundColor =pickColor;
  return (
    <div className="Hero">
      <input
        type="text"
        value={pickColor}
        placeholder="#"
        onChange={(e) => setPickColor(e.target.value)}
        className="Input"
      />
      <h1 className="Text">{pickColor}</h1>
    </div>
  );
}

export default App;
