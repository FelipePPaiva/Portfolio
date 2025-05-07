import video from '../assets/videos/videoJP.mp4';
import styles from './treinoSection.module.css';
import { FaCircleCheck } from "react-icons/fa6";
import {Button} from '../components/button/index';

export function Training(){
    return(
        <div id="training" className={styles.training}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.methodology}>
                        <h3>Metodologia <strong>Exclusiva</strong></h3>
                        <div className={styles.border}></div>
                        <p>
                            Nossa abordagem de treinamento é baseada em técnicas comprovadas e adaptadas para diferentes perfis de aluno, desde iniciantes até atiradores avançados.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <FaCircleCheck className={styles.icon}/>
                                Treinamento progressivo que respeita o ritmo de aprendizado de cada aluno
                            </li>
                            <li>
                                <FaCircleCheck className={styles.icon}/>
                                Uso de equipamentos modernos e técnicas atualizadas de instrução
                            </li>
                            <li>
                                <FaCircleCheck className={styles.icon}/>
                                Ênfase na segurança e responsabilidade no manuseio de armas de fogo
                            </li>
                            <li>
                                <FaCircleCheck className={styles.icon}/>
                                Simulações de situações reais para desenvolvimento de respostas eficientes
                            </li>
                        </ul>

                        <div className={styles.button}>
                            <Button name="conheça nossos cursos" variant='primary' href="#courses"/>
                        </div>
                    </div>
                    <div className={styles.videoContainer}>
                            <video width='100%' controls>
                                <source src={video} type="video/mp4" />
                            </video>
                    </div>
                </div>
            </div>
        </div>
    )
}