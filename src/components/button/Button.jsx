// styles
import styles from "./styles.module.css";

function Button({ children, onClick = () => {}, className = "" }) {
  return (
    <button onClick={onClick} role="button" className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
