import styles from './styles.module.css';

type Props={
    name: string;
    variant?: 'primary' | 'secondary' | 'third';
    href?: string;
}
export function Button({name, variant='primary', href='#'}: Props){
    const baseClass = styles.btn;
    const variantClass = styles[variant];
    return(
        <>
             <a className={`${baseClass} ${variantClass}`} href={href}>{name}</a>
        </>
    )
}