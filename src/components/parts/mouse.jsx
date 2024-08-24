
import './mouse.css';

export default function Mouse(props) {
  return (
    <div
      className="mouse"
      style={{ left: props.x + "px", top: props.y + "px" }}
    ></div>
  );
}
