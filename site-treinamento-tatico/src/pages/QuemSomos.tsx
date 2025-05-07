import styles from './quemSomos.module.css';
import { FaShieldAlt, FaMedal } from "react-icons/fa";
import instrutor from '../assets/images/JP-instrutor.jpeg'
import { Title } from '../components/title';

export function About(){
    return(
        <div id="about" className={styles.about}>
            <div className={styles.container}>
                <Title title='quem somos' />
                <div className={styles.aboutContent}>
                    <div className={styles.aboutInstrutor}>
                        <h3>Experiência e Excelência <strong>em Treinamento</strong></h3>
                        <div className={styles.border}></div>
                        <p>Com mais de 2 anos de experência em treinamento táticos e operacionais, JP de Andrade desenvolveu uma metodologia única que combina técnicas militares com aplicações práticas para civis.</p>
                        <p>
                            Nossa filosofia de treinamento é baseada em três pilares fundamentais: Segurança, Técnica e Condicionamento mental. Cada aluno recebe atenção personalizada para desenvolver suas habilidades de acordo com seu perfil e necessidades específicas.
                        </p>
                        <div className={styles.cards}>
                            <div className={styles.cardsInfo}>
                                <div className={styles.cardsIcons}>
                                    <FaShieldAlt className={styles.icons} />
                                </div>
                                <div className={styles.cardsText}>
                                    <h4>Segurança Total</h4>
                                    <p>Protocolos rigorosos em todas as etapas</p>
                                </div>
                            </div>
                            <div className={styles.cardsInfo}>
                                <div className={styles.cardsIcons}>
                                    <FaMedal className={styles.icons} />
                                </div>
                                <div className={styles.cardsText}>
                                    <h4>Instrutor Certificado</h4>
                                    <p>Credenciado pela Polícia Federal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.containerImage}>
                        <img className={styles.imagem} src={instrutor} alt="JP de Andrade - Instrutor" />
                    </div>
                </div>
            </div>
        </div>
    )
}