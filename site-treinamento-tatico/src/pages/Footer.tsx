import styles from './footer.module.css'
import { PiInstagramLogoLight } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import logo from '../assets/images/jp-logo-000.png'
import { Copyright } from '../components/copyright';

export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerHeader}>
                    <div className={styles.footerContent}>
                        <img src={logo} className={styles.logo} alt="" />
                        <p>Somos especialistas em treinamento tático e instrução de armamento e tiro, oferecendo cursos de alta qualidade com foco em segurança, técnica e condicionamento mental para civis e profissionais.</p>
                        <div className={styles.footerSocial}>
                           <a href="https://www.instagram.com/jp783_iat?igsh=d3pmdjMxc2kxZzky" className={styles.socialLink} target='_blank'><PiInstagramLogoLight /></a>
                           <a href="http://wa.me/+5524993079967" className={styles.socialLink} target='_blank'><BsWhatsapp /></a>                
                        </div>
                    </div>
                    <div>
                        <div className={styles.linksInfo}>
                            <h3>Links Rápidos</h3>
                            <div></div>
                            <ul>
                                <li>
                                    <a href="/#inicio">Início</a>
                                </li>
                                <li>
                                    <a href="/#about">Sobre</a>
                                </li>
                                <li>
                                    <a href="/#courses">Cursos</a>
                                </li>
                                <li>
                                    <a href="/#galeria">Galeria</a>
                                </li>
                                <li>
                                    <a href="/#contato">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className={styles.linksInfo}>
                            <h3>Informações</h3>
                            <div></div>
                            <ul>
                                <li>
                                    <a href="/#question">Perguntas Frequentes</a>
                                </li>
                                <li>
                                    <a href="/TermoResponsabilidade">Termo de Responsabilidade</a>
                                </li>
                                <li>
                                    <a href="/PoliticaPrivacidade">Política de Privacidade</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={styles.cps}>
                    <Copyright />
                </div>
            </div>
        </div>
    )
}