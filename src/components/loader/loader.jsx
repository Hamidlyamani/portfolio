import { useEffect, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 10); // Adjust the interval time (in ms) as needed

      return () => clearInterval(timer);
    }
  }, [count]);
  const formattedCount = String(count).padStart(3, "0");
  return (
    <div className="loader">
      <div className="loadercontainer">
        <div className="nomber_container">
          <div className="nomber">
            <div className="text-number">{formattedCount}</div>
            <div>%</div>
          </div>
          <div className="nomber-line"></div>
        </div>
      </div>
    </div>
  );
}
