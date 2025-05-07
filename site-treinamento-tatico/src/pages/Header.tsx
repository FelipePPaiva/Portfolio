import {useState} from 'react';
import logo from '../assets/images/jp-logo-fff.png';
import styles from './header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";

export function Header(){
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    }
    return(
        <header>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <a href="inicio">
                            <img src={logo} alt="Logo principal JP Andrade onde tem um soldado agachado segurando uma arma" /></a>
                        
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                    <GiHamburgerMenu  className={styles.icon} size={25} color="#fff"/>
                    </div>
                    <div className={`${styles.navLinks} ${menuAberto ? styles.active : ''}`}>
                        <a href="/#inicio" onClick={() => setMenuAberto(false)}>Início</a>
                        <a href="/#about" onClick={() => setMenuAberto(false)}>Sobre</a>
                        <a href="/#training" onClick={() => setMenuAberto(false)}>Treinamento</a>
                        <a href="/#courses" onClick={() => setMenuAberto(false)}>Cursos</a>
                        <a href="/#depoimentos" onClick={() => setMenuAberto(false)}>Depoimentos</a>
                        <a href="/#galeria" onClick={() => setMenuAberto(false)}>Galeria</a>
                        <a href="/#question" onClick={() => setMenuAberto(false)}>Faq</a>
                        <a href="/#contato" onClick={() => setMenuAberto(false)}>Contato</a>
                    </div>
                </div>
            </div>
        </header>
    )
}