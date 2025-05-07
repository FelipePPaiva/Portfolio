import styles from './cursos.module.css';
import { FaCheck } from "react-icons/fa6";
import cursoLogo from '../assets/images/cursosLogo.jpeg'
import {Button} from '../components/button/index'
import { Title } from '../components/title';

export function Course(){
    return(
        <div id="courses" className={styles.course}>
            <div className={styles.container}>
               <Title title="nossos cursos"/>
                <div className={styles.cards}>
                    <div className={styles.courseCards}>
                        <div className={styles.headers}>
                            <div className={styles.courseImage}>
                                <img src={cursoLogo} alt="" />
                            </div>
                            <div className={styles.courseLevel}>
                                Iniciante
                            </div>
                        </div>
                        <div className={styles.courseContent}>
                            <h3>Curso Básico de Tiro</h3>
                            <p>
                                Ideal para iniciantes que desejam aprender os fundamentos do manuseio seguro e tiro com foco em técnicas essenciais.
                            </p>
                            <div className={styles.courseList}>
                                <ul>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Fundamentos de segurança e manuseio
                                    </li>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Posição de tiro e empunhadura
                                    </li>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Prática de tiro com alvos estáticos
                                    </li>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Certificado de conclusão
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.coursePay}>
                                <p>
                                    R$ 790<small>/pessoa</small>
                                </p>
                                <div className={styles.button}>
                                    <Button name="inscrever" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.courseCards}>
                        <div className={styles.headers}>
                            <div className={styles.courseImage}>
                                <img src={cursoLogo} alt="" />
                            </div>
                            <div className={styles.courseLevel}>
                                Intermediário
                            </div>
                        </div>
                        <div className={styles.courseContent}>
                            <h3>Tiro Tático Defensivo</h3>
                            <p>
                                Para atiradores que já dominam os fundamentos e desejam desenvolver habilidades avançadas para situações defensivas reais.
                            </p>
                            <div className={styles.courseList}>
                                <ul>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Tiro em movimento e sob estresse
                                    </li>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Diferentes posições de combate
                                    </li>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Manejo tático de armas
                                    </li>
                                    <li>
                                        <FaCheck className={styles.courseIcon}/>
                                        Simulações de cenários reais
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.coursePay}>
                                <p>
                                    R$ 1.190<small>/pessoa</small>
                                </p>
                                <div className={styles.button}>
                                    <Button name="inscrever" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}