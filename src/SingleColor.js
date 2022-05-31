import { useState, useEffect } from "react";
import rgbToHex from "./rgbTohex";


function SingleColor({ rgb, weight }) {
  const [alert, setAlert] = useState(false);

  const background = rgb.join(",");

  const onCopyColor = () => {
    navigator.clipboard.writeText(rgbToHex(...rgb));
    setAlert(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000)
  }, [alert])

  return (
    <div className="color-container" style={{ backgroundColor: `rgb(${background})` }} onClick={onCopyColor}>
      <p>{weight}%</p>
      <p>{rgbToHex(...rgb)}</p>
      {
        alert && <p className="alert">COPIED TO CLIPBOARD</p>
      }
    </div>
  )
};

export default SingleColor;