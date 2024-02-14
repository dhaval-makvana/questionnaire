// styles
import { input } from "./styles.module.css";

function Input({ onChange = () => {}, value = "", placeholder = "" }) {
  return (
    <input
      className={input}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
