import styles from './styles.module.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props ={
    title: string;
    content: string;
    isOpen: boolean;
    onToggle: () => void;
}
export function QuestionItem({title, content, isOpen, onToggle}: Props){
    
    return(
        <div className={`${styles.myQuestion} ${isOpen ? styles.active: ""}`}>
            <div className={styles.itemQuestion} onClick={onToggle}>
                <h4>{title}</h4>
                {isOpen ? (<IoIosArrowUp className={styles.arrow}/>) : (<IoIosArrowDown className={styles.arrow}/>)}
            </div>
            <div className={styles.bodyQuestion}>
                <p>{content}</p>
            </div>
        </div>
    )
}