import styles from "./TypeAhead.module.css";
import React from "react";
import { debounce } from "../../utils/debounce";
import { useRouter } from "next/router"

const ARROW_RIGHT = 39;

const TypeAhead = ({ sugession = "", onChange = () => { } }) => {
    const [placeholder, setPlaceholder] = React.useState(sugession);
    const ref = React.useRef();
    const router = useRouter();

    const handleAutoPopulate = (e) => {
        if (e.keyCode === ARROW_RIGHT) {
            ref.current.value = sugession;
            onChange({ target: { value: sugession } })
        }
    }

    React.useEffect(() => {
        if (router.query?.q)
            ref.current.value = router.query.q;
    }, [])

    React.useEffect(() => {
        setPlaceholder(sugession);
    }, [sugession])

    return (
        <div className={styles.TypeAheadWrapper}>
            <div className={styles.TypeAheadInputs}>
                <input className={styles.PlaceholderInput} type="text" placeholder={placeholder} readOnly />
                <input
                    ref={ref}
                    className={styles.MainInput}
                    type="text"
                    placeholder="Search Videos"
                    onKeyUp={handleAutoPopulate}
                    onChange={debounce((e) => onChange(e))}
                />
            </div>
        </div>
    );
};

export default TypeAhead;