import Label from "../Label";
import styles from "./Badges.module.css";

const Badges = ({ children }) => {
    return (
        <div className={styles.BadgesWrapper}>
            <Label>{children}</Label>
        </div>
    );
};

export default Badges;
