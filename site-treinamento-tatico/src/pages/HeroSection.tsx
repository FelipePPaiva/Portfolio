import styles from './heroSection.module.css';
import {Button} from '../components/button/index';

export function Hero(){
    return(
            <section id="inicio" className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContainer}>
                        <span className={styles.badge}>Instrutor Certificado</span>
                        <h1>Treinamento Tático <span>Profissional</span></h1>
                        <p>
                            Aprenda técnicas avançadas de armamento e tiro com metodologia profissional focada em segurança e precisão para defesa pessoal e tiro esportivo.
                        </p>
                    </div>
                    <div className={styles.button}>
                        <Button name="Ver Cursos" variant="primary" href="#courses"/>
                        <Button name="Fale Conosco" variant="secondary" href="#contato"/>
                    </div>
                </div>
            </section>
    )
}