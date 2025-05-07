import styles from './banner.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button } from '../components/button'
import { Title } from '../components/title'

export function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.container}>
                <div className={styles.bannerTitle}>
                    <h2>Pronto para elevar seu nível de treinamento?</h2>
                    <p>
                        Inscreva-se em um de nossos cursos e tenha acesso ao treinamento de elite em armamento e tiro com o instrutor JP de Andrade.
                    </p>
                </div>
                    <div className={styles.button}>
                        <Button name="inscreva-se agora" href="#contato"/>
                    </div>
                
                <div id="contato" className={styles.contact}>
                    <Title title="entre em contato" />
                    <div className={styles.contactWrappe}>
                        <div className={styles.contactHeader}>
                            <h3>Informações de Contato</h3>
                            <p>
                                Estamos à disposição para esclarecer suas dúvidas e fornecer mais informações sobre nossos cursos e treinamentos.
                            </p>
                            <div>
                                <div className={styles.contactList}>
                                    <FaLocationDot className={styles.contactIcons}/>
                                    <div className={styles.contactInfo}>
                                        <p>Endereço</p>
                                        <span>Rua do Bingen</span>
                                    </div>
                                </div>
                                <div className={styles.contactList}>
                                    <BsFillTelephoneFill className={styles.contactIcons}/>
                                    <div className={styles.contactInfo}>
                                        <p>Telefone</p>
                                        <span>+55 (24) 99307-9967</span>
                                    </div>
                                </div>
                                <div className={styles.contactList}>
                                    <MdEmail className={styles.contactIcons}/>
                                    <div className={styles.contactInfo}>
                                        <p>Email</p>
                                        <span>Jpandrade783@gmail.com</span>
                                    </div>
                                </div>
                                <div className={styles.contactList}>
                                    <GoClockFill className={styles.contactIcons}/>
                                    <div className={styles.contactInfo}>
                                        <p>Horario de Atendimento</p>
                                        <span>Segunda a Sexta: 9h às 18h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formContact}>
                            <h3>Envie sua mensagem</h3>
                            <form method='post'>
                                <div className={styles.formContent}>
                                    <label>Nome Completo</label>
                                    <input className={styles.formControl} type="text" />
                                </div>
                                <div className={styles.formContent}>
                                    <label>E-mail</label>
                                    <input className={styles.formControl} type="email" name="" id="" />
                                </div>
                                <div className={styles.formContent}>
                                    <label>Telefone</label>
                                    <input className={styles.formControl} type="phone" />
                                </div>
                                <div className={styles.formContent}>
                                    <label>Curso de Interesse</label>
                                    <select className={styles.formControl} name="" id="">
                                        <option label="Selecione um curso" value="Selecione um curso" disabled selected></option>
                                        <option label="Curso Básico de Tiro" value="Curso Básico de Tiro"></option>
                                        <option label="Tiro Tático Defensivo" value="Tiro Tático Defensivo"></option>
                                        <option label="Operador Tático Avançado" value="Operador Tático Avançado" ></option>
                                        <option label="Outros" value="outros"></option>
                                    </select>
                                </div>
                                <div className={styles.formContent}>
                                    <label>Mensagem</label>
                                    <textarea rows={5} cols={80}></textarea>
                                </div>
                                <Button name="enviar mensagem" variant="third"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}