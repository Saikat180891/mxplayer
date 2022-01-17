import styles from "./Label.module.css";

const Label = ({ children }) => {
    return <p className={styles.Label}>{children}</p>
}

export default Label;