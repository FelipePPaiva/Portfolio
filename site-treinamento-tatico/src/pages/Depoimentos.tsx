import styles from './Depoimentos.module.css'
import { FaStar } from "react-icons/fa";
import avatar from '../assets/images/avatar1.jpg'
import avatar1 from '../assets/images/avatar2.jpg'
import avatar2 from '../assets/images/avatar3.jpg'

export function Testimonials(){
    return(
        <div id="depoimentos" className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.headerTestimonials}>
                    <h2>O que os clientes dizem</h2>
                    <p>
                        Quer saber o que torna a nossa marca tão especial?
                        <br/>
                        Confira o que nossos clientes têm a dizer!
                    </p>
                    <div></div>
                </div>
                <div className={styles.testimonialsWrapper}>
                    <div className={styles.testimonialCards}>
                        <div className={styles.testimonialContent}>
                            <div style={{display: 'flex', gap: '4px'}}>
                                {Array.from({length: 5}).map((_,index)=>(
                                    <FaStar key={index} />
                                ))}
                                
                            </div>
                            <p>
                                <q>O curso superou todas as minhas expectativas. A metodologia de ensino é excelente e o instrutor João Paulo consegue transmitir o conhecimento de forma clara e objetiva. Me sinto muito mais confiante agora.</q>
                            </p>
                        </div>
                        <div className={styles.person}>
                            <div className={styles.avatar}>
                                <img src={avatar} alt="" />
                            </div>
                            <div className={styles.avatarInfo}>
                                <p>Carlos Miguel</p>
                                <span>Curso Básico de Tiro</span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.testimonialCards}>
                        <div className={styles.testimonialContent}>
                        <div style={{display: 'flex', gap: '4px'}}>
                                {Array.from({length: 5}).map((_,index)=>(
                                    <FaStar key={index} />
                                ))}
                                
                            </div>
                            <p>
                                <q>Inicialmente estava receosa por ser mulher em um ambiente predominantemente masculino, mas o instrutor criou um ambiente acolhedor e respeitoso. O aprendizado foi excelente e me sinto muito mais segura.</q>
                            </p>
                        </div>
                        <div className={styles.person}>
                            <div className={styles.avatar}>
                                <img src={avatar1} alt="" />
                            </div>
                            <div className={styles.avatarInfo}>
                                <p>Fernanda Castro</p>
                                <span>Curso Básico de Tiro</span>
                            </div>
                            

                        </div>
                    </div>
                    <div className={styles.testimonialCards}>
                        <div className={styles.testimonialContent}>
                        <div style={{display: 'flex', gap: '4px'}}>
                                {Array.from({length: 5}).map((_,index)=>(
                                    <FaStar key={index} />
                                ))}
                                
                            </div>
                            <p>
                                <q>Como policial militar, busquei o curso para aprimorar minhas técnicas. O nível de instrução é de altíssima qualidade, com exercícios práticos e realistas. Recomendo para todos os profissionais da área.</q>
                            </p>
                        </div>
                        <div className={styles.person}>
                            <div className={styles.avatar}>
                                <img src={avatar2} alt="" />
                            </div>
                            <div className={styles.avatarInfo}>
                                <p>Vitor Hugo</p>
                                <span>Tiro tático Defensivo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}