import styles from './styles.module.css';

type Props ={
    title: string,
}

export function Title({title}: Props){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div></div>
        </div>
    )
}