import Label from "../Label";
import styles from "./SearchPlaceholder.module.css";

const SearchPlaceholder = ({ showPlaceholder = false }) => {
    return (
        <div className={`${styles.placeholder} ${showPlaceholder && styles.hide}`}>
            <div className={styles.categories}>
                <Label>Show search results</Label>
                <div className={styles.typeAheadPlaceholder}></div>
                <div className={styles.category}>Movies</div>
                <div className={styles.category}>Shows</div>
                <div className={styles.category}>Live TV</div>
                <div className={styles.category}>Shorts</div>
                <div className={styles.category}>Music</div>
            </div>
        </div>
    );
};

export default SearchPlaceholder;
